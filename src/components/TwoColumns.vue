<template>
  <div class="two-columns">
    <div class="two-columns__first-column">
      <slot name="first-column"></slot>
    </div>
    <div class="two-columns__second-column">
      <slot name="second-column"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.two-columns {
  display: grid;

  @include respond-to("large and up") {
    grid-template-columns: .33fr 1fr;
  }

  @include respond-to("medium and down") {
    grid-auto-rows: min-content;
  }

  &__first-column {
    display: grid;
    grid-auto-rows: min-content;
    grid-row-gap: rem($gutter);
    padding: $gutter;
  }
}
</style>
