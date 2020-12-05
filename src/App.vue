<template>
  <default-layout>
    <base-page>
      <div id="map"></div>
    </base-page>
  </default-layout>
</template>

<script>
import addresses from './data.json'
import GoogleMaps from './config/google-maps.js'

let google = null
let map = null

const config = {
  center: {
    lat: 23.634501,
    lng: -102.552784
  },
  zoom: 5
}

export default {
  name: 'App',
  data() {
    return {
    }
  },
  async created() {
    google = await GoogleMaps({
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
    })

    const {Map} = google.maps
    const el = document.getElementById('map')
    map = new Map(el, config)

    for (const address of addresses) {
      const position = new google.maps.LatLng(address[1], address[2]);
      this.addMarker(position, address[0])
    }
  },
  methods: {
    addMarker(position, title) {
      const infowindow = new google.maps.InfoWindow({
        content: title,
      });
      const marker = new google.maps.Marker({
        map,
        position,
        title
      });
      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
    },
  },
}
</script>

<style lang="scss" scoped>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
