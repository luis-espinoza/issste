let rejectInitPromise
let resolveInitPromise
let initialized = !!window.google
const CALLBACK_NAME = 'gmapsCallback'

const initPromise = new Promise((resolve, reject) => {
  resolveInitPromise = resolve
  rejectInitPromise = reject
})

function init (params) {
  if (initialized) return initPromise

  initialized = true

  window[CALLBACK_NAME] = () => resolveInitPromise(window.google)

  const script = document.createElement('script')
  script.async = true
  script.defer = true
  script.src = `https://maps.googleapis.com/maps/api/js?key=${params.apiKey}&callback=${CALLBACK_NAME}`
  script.onerror = rejectInitPromise
  document.querySelector('head').appendChild(script)

  return initPromise
}

module.exports = init
