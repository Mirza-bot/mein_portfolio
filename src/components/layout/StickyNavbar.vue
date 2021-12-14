<template>
  <header>
    <div>
      <w-icon xl color="transparent" class="my4"> mdi mdi-github </w-icon
      ><span>GitHub</span><br />
    </div>
    <div class="linkedin__link my4">
      <w-icon xl color="transparent"> mdi mdi-linkedin </w-icon
      ><span>LinkedIn</span><br />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../../assets/styles";

header {
  color: transparent;
  background: $mainGradient;
  box-shadow: 0px 4px 4px black;
  width: 100vw;
  z-index: 100;
  position: sticky;
  position: -webkit-sticky;
  top: 0vh;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.5rem;
  @media only screen and (min-width: 2100px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 0.8rem;
  }
}
</style>
