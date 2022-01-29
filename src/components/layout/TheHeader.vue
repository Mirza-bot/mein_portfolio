<template>
  <div>
    <nav>
      <div class="icon ml5 mt4 pb2" v-show="!mobileMenu" @click="scrollUp(0)">
        <h1>Mirza Malkoc</h1>
        <p>
          <w-icon class="mr1" xl color="white">
            mdi mdi-monitor-cellphone </w-icon
          >Web-Developer
        </p>
      </div>
      <div class="other__links ml3" v-if="!mobileMenu">
        <ul>
          <li class="mx2">
            <div class="github__link">
              <a
                href="https://github.com/Mirza-bot"
                rel="noopener"
                target="_blank"
                aria-label="Github-Link"
              >
                <w-icon color="white my2"> mdi mdi-github </w-icon>
              </a>
            </div>
          </li>
          <li class="mx2 mt1">
            <div class="linkedin__link">
              <a
                href="https://www.linkedin.com/in/mirzamalkoc/"
                rel="noopener"
                target="_blank"
                aria-label="Linkedin-Link"
              >
                <w-icon color="white my1"> mdi mdi-linkedin </w-icon>
              </a>
            </div>
          </li>
          <li class="mx2">
            <div class="mail__link">
              <a
                href="mailto:malkoc.mirza.95@gmail.com"
                aria-label="E-Mail-Link"
              >
                <w-icon color="white mt2"> mdi mdi-email </w-icon>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="nav__links" v-if="!mobileMenu">
        <ul>
          <li>
            <w-button
              class="nav__button"
              outline
              color="white"
              @click="redirect('main', '#projects')"
              ><span
                ><w-icon color="white" class="mt-1 mr1">
                  mdi mdi-table-settings </w-icon
                >{{ $t("header.projects") }}</span
              ></w-button
            >
          </li>
          <li>
            <w-button
              class="nav__button"
              outline
              color="white"
              @click="redirect('main', '#aboutme')"
              ><span
                ><w-icon color="white" class="mt-2 mr1">
                  mdi mdi-badge-account-outline </w-icon
                >Person</span
              ></w-button
            >
          </li>
          <li>
            <w-button
              class="nav__button"
              outline
              color="white"
              @click="redirect('main', '#contactme')"
              ><span
                ><w-icon color="white" class="mt-1 mr1">
                  mdi mdi-card-account-mail-outline </w-icon
                >{{ $t("header.contact") }}</span
              ></w-button
            >
          </li>
          <li>
            <div
              class="language__selector"
              @click="setLanguage('en')"
              v-if="getLanguage"
            >
              <img
                src="../../images/English.svg"
                alt="english Language Switch"
              />
            </div>
            <div class="language__selector" @click="setLanguage('de')" v-else>
              <img
                src="../../images/German.png"
                alt="english Language Switch"
              />
            </div>
          </li>
        </ul>
      </div>
      <div class="mobile__menu my6 mx4" v-else>
        <w-button
          class="py5"
          @click="openDrawer = true"
          color="black"
          outline
          bg-color="white"
          aria-label="Menu"
        >
          <w-icon xl color="black"> mdi mdi-menu </w-icon>
        </w-button>
        <w-drawer v-model="openDrawer" width="20vw" bg-color="black">
          <div class="grow mxa mobile__drawer">
            <w-flex column align-center justify-space-between class="wrapper">
              <div class="box">
                <w-button color="black" outline xl @click="openDrawer = false"
                  ><w-icon xl color="black">
                    mdi mdi-arrow-left
                  </w-icon></w-button
                >
              </div>
              <div class="box">
                <w-button color="black" outline xl @click="scrollUp(0)"
                  ><w-icon xl color="black">
                    mdi mdi-arrow-up-bold-box-outline
                  </w-icon>
                </w-button>
                <br />
                <span>Start</span>
              </div>
              <div class="box">
                <w-button
                  color="black"
                  outline
                  xl
                  @click="redirect('main', '#projects')"
                  ><w-icon xl color="black"> mdi mdi-table-settings </w-icon>
                </w-button>
                <br />
                <span>{{ $t("header.projects") }}</span>
              </div>
              <div class="box">
                <w-button
                  color="black"
                  outline
                  xl
                  @click="redirect('main', '#aboutme')"
                  ><w-icon xl color="black">
                    mdi mdi-badge-account-outline
                  </w-icon></w-button
                >
                <br />
                <span>Person</span>
              </div>
              <div class="box">
                <w-button
                  color="black"
                  outline
                  xl
                  @click="redirect('main', '#contactme')"
                  ><w-icon xl color="black"> mdi mdi-email </w-icon>
                </w-button>
                <br />
                <span>{{ $t("header.contact") }}</span>
              </div>
              <div class="box">
                <ul>
                  <li class="px2">
                    <a
                      href="https://github.com/Mirza-bot"
                      rel="noopener"
                      target="_blank"
                    >
                      <w-icon xl color="black"> mdi mdi-github </w-icon><br />
                      <span>GitHub</span>
                    </a>
                  </li>
                  <li class="px1">
                    <a
                      href="https://www.linkedin.com/in/mirzamalkoc/"
                      rel="noopener"
                      target="_blank"
                    >
                      <w-icon xl color="black"> mdi mdi-linkedin </w-icon><br />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li class="px2">
                    <a href="mailto:malkoc.mirza.95@gmail.com">
                      <w-icon xl color="black"> mdi mdi-email </w-icon> <br />
                      <span>E-Mail</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="box">
                <div
                  class="language__selector"
                  @click="setLanguage('en')"
                  v-if="getLanguage"
                >
                  <img
                    src="../../images/English.svg"
                    alt="english Language Switch"
                  />
                </div>
                <div
                  class="language__selector"
                  @click="setLanguage('de')"
                  v-else
                >
                  <img
                    src="../../images/German.png"
                    alt="english Language Switch"
                  />
                </div>
              </div>
            </w-flex>
          </div>
        </w-drawer>
      </div>
    </nav>
  </div>
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
    redirect(route, hash) {
      router.push({ name: route, hash: hash });
      this.openDrawer = false;
    },
    scrollUp(position) {
      window.scrollTo({ top: position, behavior: "smooth" });
      this.openDrawer = false;
    },
    setLanguage(lang) {
      this.openDrawer = false;
      this.$i18n.locale = lang;
    },
  },
  computed: {
    getLanguage() {
      if (this.$i18n.locale === "en") return false;
      else return true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles";

nav {
  width: 1200px;
  margin: 0 auto;
  z-index: 150;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 1rem;
  @media only screen and (min-width: 2100px) {
    width: 2300px;
    top: 2vh;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 0.8rem;
    width: 100%;
  }
}
div.icon {
  font-family: "Bebas Neue", cursive;
  color: white;
  text-shadow: -6px 4px 3px rgb(0, 0, 0);
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
  @media only screen and (min-width: 2100px) {
    font-size: 2.2rem;
  }
}

a {
  color: white;
}

div.nav__links {
  float: right;
  font-family: "Roboto Condensed", sans-serif;
  color: white;
  padding: 2rem;
  @media only screen and (min-width: 2100px) {
    margin: 1rem 0;
  }
  .nav__button {
    margin-right: 15px;
    padding: 15px;
    @media only screen and (min-width: 2100px) {
      padding: 2rem;
      margin-right: 3rem;
      font-size: 2rem;
    }
  }
  span {
    font-size: 1.3rem;
    @media only screen and (min-width: 2100px) {
      font-size: 3rem;
    }
  }
  ul {
    list-style-type: none;
    padding: none;
    li {
      float: left;
    }
  }
}

div.language__selector {
  width: 50px;
  height: 31px;
  border: 1px solid white;
  border-radius: 3px;
  @media only screen and (min-width: 2100px) {
    width: 105px;
    height: auto;
  }
  @media only screen and (max-width: 1100px) {
    width: 40px;
    height: 25px;
    margin: 0;
    border: 1px solid black;
    border-radius: 3px;
  }
  :hover {
    cursor: pointer;
  }
  img {
    width: 100%;
  }
}

div.other__links {
  display: inline-block;
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.3rem;
  margin: 30px 0 0 50px;
  @media only screen and (min-width: 2100px) {
    font-size: 2.2rem;
    margin: 0 0 0 70px;
  }
  div {
    @media only screen and (min-width: 2100px) {
      margin: 0 0 0 50px;
    }
    :hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
}

.mobile__menu {
  float: right;
}

.mobile__drawer {
  background: white;
  height: 110vh;
}

div.box {
  text-align: center;
  margin: 2vh 2vw 1vh 2vw;
  font-family: "Roboto Condensed", sans-serif;
  color: black;
  ul {
    list-style: none;
    li {
      margin: 20px 5px;
      @media only screen and (max-width: 400px) {
        font-size: 0.7rem;
        margin: 15px 0 10px 10px;
      }
      a {
        color: black;
      }
    }
  }
}

ul {
  list-style-type: none;
  li {
    float: left;
  }
}
</style>
