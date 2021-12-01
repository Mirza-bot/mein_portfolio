<template>
  <header>
    <div class="icon ml5 mt2 pb2" @click="redirect('main/projects')">
      <h1>Malkoc Mirza</h1>
      <p>
        <w-icon class="mr1" xl color="black"> mdi mdi-monitor-cellphone </w-icon
        >Web-Developer/Front-End-Developer
      </p>
    </div>
    <div class="nav__links ma6" v-if="!mobileMenu">
      <ul>
        <li>
          <w-button
            class="mx10"
            bg-color="$mainColor"
            outline
            xl
            @click="redirect('main/contact')"
            ><a class="title1 pa5">Kontakt</a></w-button
          >
        </li>
        <li>
          <w-button
            class="mx10"
            bg-color="$mainColor"
            outline
            xl
            @click="redirect('main/aboutme')"
            ><a class="title1 pa5">Über Mich</a></w-button
          >
        </li>
        <li>
          <w-button
            class="mx10"
            bg-color="$mainColor"
            outline
            xl
            @click="redirect('main/resumee')"
            ><a class="title1 pa5">Lebenslauf</a></w-button
          >
        </li>
      </ul>
    </div>
    <div class="mobile__menu my6 mx4" v-else>
      <w-button class="py5" @click="openDrawer = true" outline>
        <w-icon xl color="black"> mdi mdi-menu </w-icon>
      </w-button>
      <w-drawer v-model="openDrawer" width="30vw" bg-color="black">
        <div class="grow mx0 mobile__drawer">
          <w-flex column align-center justify-space-between class="wrapper">
            <div class="box">
              <w-button color="primary" outline xl @click="openDrawer = false"
                ><w-icon xl color="black">
                  mdi mdi-arrow-left
                </w-icon></w-button
              >
            </div>
            <div class="box">
              <w-button
                color="primary"
                outline
                xl
                @click="redirect('main/contact')"
                ><w-icon xl color="black"> mdi mdi-email </w-icon>
              </w-button>
              <br />
              <span>Kontakt</span>
            </div>
            <div class="box">
              <w-button
                color="primary"
                outline
                xl
                @click="redirect('main/aboutme')"
                ><w-icon xl color="black">
                  mdi mdi-head-question-outline
                </w-icon></w-button
              >
              <br />
              <span>Über Mich</span>
            </div>
            <div class="box">
              <w-button
                color="primary"
                outline
                xl
                @click="redirect('main/resumee')"
                ><w-icon xl color="black">
                  mdi mdi-badge-account-outline
                </w-icon></w-button
              >
              <br />
              <span>Lebenslauf</span>
            </div>
            <div class="box">
              <ul>
                <li>
                  <w-icon xl color="black"> mdi mdi-github </w-icon><br />
                  <span>GitHub</span>
                </li>
                <li>
                  <w-icon xl color="black"> mdi mdi-linkedin </w-icon><br />
                  <span>LinkedIn</span>
                </li>
              </ul>
            </div>
          </w-flex>
        </div>
      </w-drawer>
    </div>
  </header>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import router from "../../routes/router";
export default {
  setup() {
    let mobile = ref(window.matchMedia("(max-width: 1200px)"));

    const mobileMenu = computed(() => {
      return mobile.value.matches;
    });

    return {
      mobileMenu,
    };
  },
  data() {
    return {
      openDrawer: false,
    };
  },
  methods: {
    redirect(route) {
      router.push(route);
      this.openDrawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles";

header {
  background: $mainGradient;
}
div.icon {
  font-family: "Bebas Neue", cursive;
  color: black;
  text-shadow: -6px 4px 3px rgb(214, 121, 0);
  display: inline-block;
  caret-color: transparent;
  :hover {
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -ms-user-select: none;
  }
}

div.nav__links {
  float: right;
  font-family: "Roboto Condensed", sans-serif;
  color: rgb(0, 0, 0);
  ul {
    list-style-type: none;
    padding: none;
    li {
      float: left;
    }
  }
}

.mobile__menu {
  float: right;
}

.mobile__drawer {
  background: $mainColor;
}

div.box {
  text-align: center;
  margin: 5vh 2vw 5vw 2vw;
  font-family: "Roboto Condensed", sans-serif;
  color: black;
  ul {
    list-style: none;
    li {
      margin: 40px 0 20px 0;
    }
  }
}
</style>
