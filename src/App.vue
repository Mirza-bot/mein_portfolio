<template>
  <w-app>
    <header>
      <div class="icon ml5 mt2 pb2">
        <h1>Malkoc Mirza</h1>
        <p>
          <w-icon class="mr1" xl color="black">
            mdi mdi-monitor-cellphone </w-icon
          >Web-Developer/Front-End-Developer
        </p>
      </div>
      <div class="nav__links ma6">
        <ul>
          <li><w-button class="mx10" bg-color="$mainColor" xl><a class="title1 pa3">Projekte</a></w-button></li>
          <li><w-button class="mx10" bg-color="$mainColor" xl><a class="title1 pa3">AboutMe</a></w-button></li>
          <li><w-button class="mx10" bg-color="$mainColor" xl><a class="title1 pa3">Lebenslauf</a></w-button></li>
        </ul>
      </div>
    </header>
  </w-app>
</template>

<style lang="scss" scoped>
@import "assets/_styles.scss";

header {
  background: $mainGradient;
  height: auto;
  box-shadow: 0px 10px 10px black;
}
div.icon {
  font-family: "Bebas Neue", cursive;
  color: black;
  text-shadow: -6px 4px 3px $mainColor;
  display: inline-block;
}

div.nav__links {
  float: right;
  font-family: 'Open Sans', sans-serif;

  ul {
    list-style-type: none;
    padding: none;
    li{
      float: left;
    }
  }
}

</style>
