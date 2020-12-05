<template>
  <div class="routes">
    <slot></slot>
  </div>
</template>

<styles lang="scss">
.routes {
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: rem($gutter);

  ul {
    display: grid;
    grid-row-gap: rem($gutter / 2);

    &.results {
      overflow-y: scroll;
      height: 100%;
      max-height: rem(250px);
    }

    li {
      display: grid;
      background-color: white;
      padding: $gutter;

      div {
        display: grid;
        grid-template-rows: rem(24px) 1fr;
        justify-items: center;
        align-items: center;

        img {
          width: rem(24px);
          height: rem(24px);
        }

        span {
          font-size: 0.6rem;
        }
      }

      &[empty] {
        grid-template-columns: rem(28px) 1fr;
        grid-column-gap: rem($gutter / 2);
        text-decoration: underline;
      }

      &:not([empty]) {
        display: grid;
        grid-template-columns: rem(48px) 1fr rem(48px);
        grid-column-gap: rem($gutter / 2);
        align-items: center;
      }

      &[results] {
        display: grid;
        grid-template-columns: rem(72px + $gutter) 1fr 1fr;
        align-items: center;
        justify-items: center;

        div {
          display: grid;
          grid-template-columns: rem(24px) rem(24px) rem(24px);
          grid-column-gap: rem($gutter / 2);
        }
      }
    }
  }
}
</styles>
