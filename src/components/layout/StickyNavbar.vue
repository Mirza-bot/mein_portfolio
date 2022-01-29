<template>
  <header>
  </header>
</template>

<style lang="scss" scoped>
@import "../../assets/styles";

header {
  background-color: $mainColor;
  backdrop-filter: blur(8px) saturate(10%) contrast(150%) brightness(30%);
  -webkit-backdrop-filter: blur(8px) saturate(80%) contrast(150%) brightness(30%);
  width: 100vw;
  height: 10vh;
  z-index: 140;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
}
</style>
