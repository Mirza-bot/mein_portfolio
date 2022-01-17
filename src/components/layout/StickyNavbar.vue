<template>
  <header>
    <span></span>
  </header>
</template>

<style lang="scss" scoped>
@import "../../assets/styles";

header {
  background-color: $mainColor;
  backdrop-filter: blur(20px) saturate(160%) contrast(100%) brightness(140%);
  -webkit-backdrop-filter: blur(20px) saturate(160%) contrast(100%) brightness(140%);
  width: 100vw;
  height: 12vh;
  z-index: 140;
  position: sticky;
  position: -webkit-sticky;
  top: -20px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.5rem;
  @media only screen and (min-width: 2100px) {
    font-size: 4rem;
    height: 10vh;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 0.8rem;
  }
}
</style>
