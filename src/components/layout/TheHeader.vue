<template>
  <header>
    <div class="icon ml5 mt4 pb2" @click="scrollUp(0)">
      <h1>Malkoc Mirza</h1>
      <p>
        <w-icon class="mr1" xl color="white"> mdi mdi-monitor-cellphone </w-icon
        >Web-Developer/Front-End-Developer
      </p>
    </div>
    <div class="other__links ml10" v-if="!mobileMenu">
      <div class="github__link">
        <a href="https://github.com/Mirza-bot" rel="noopener" target="_blank" aria-label="Github-Link">
          <w-icon color="white my2"> mdi mdi-github </w-icon>
        </a>
      </div>
      <div class="linkedin__link">
        <a
          href="https://www.linkedin.com/in/mirza-malkoc-508470218/"
          rel="noopener"
          target="_blank"
          aria-label="Linkedin-Link"
        >
          <w-icon color="white my1"> mdi mdi-linkedin </w-icon>
        </a>
      </div>
      <div class="mail__link">
        <a href="mailto:malkoc.mirza.95@gmail.com" aria-label="E-Mail-Link">
          <w-icon color="white mt2"> mdi mdi-email </w-icon>
        </a>
      </div>
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
            <img src="../../images/English.svg" alt="english Language Switch" />
          </div>
          <div class="language__selector" @click="setLanguage('de')" v-else>
            <img src="../../images/German.png" alt="english Language Switch" />
          </div>
        </li>
      </ul>
    </div>
    <div class="mobile__menu my6 mx4" v-else>
      <w-button
        class="py5"
        @click="openDrawer = true"
        color="white"
        outline
        aria-label="Menu"
      >
        <w-icon xl color="white"> mdi mdi-menu </w-icon>
      </w-button>
      <w-drawer v-model="openDrawer" width="20vw" bg-color="black">
        <div class="grow mxa mobile__drawer">
          <w-flex column align-center justify-space-between class="wrapper">
            <div class="box">
              <w-button color="white" outline xl @click="openDrawer = false"
                ><w-icon xl color="white">
                  mdi mdi-arrow-left
                </w-icon></w-button
              >
            </div>
            <div class="box">
              <w-button
                color="white"
                outline
                xl
                @click="redirect('main', '#projects')"
                ><w-icon xl color="white"> mdi mdi-table-settings </w-icon>
              </w-button>
              <br />
              <span>{{ $t("header.projects") }}</span>
            </div>
            <div class="box">
              <w-button
                color="white"
                outline
                xl
                @click="redirect('main', '#aboutme')"
                ><w-icon xl color="white">
                  mdi mdi-badge-account-outline
                </w-icon></w-button
              >
              <br />
              <span>Person</span>
            </div>
            <div class="box">
              <w-button
                color="white"
                outline
                xl
                @click="redirect('main', '#contactme')"
                ><w-icon xl color="white"> mdi mdi-email </w-icon>
              </w-button>
              <br />
              <span>{{ $t("header.contact") }}</span>
            </div>
            <div class="box">
              <ul>
                <li>
                  <a
                    href="https://github.com/Mirza-bot"
                    rel="noopener"
                    target="_blank"
                  >
                    <w-icon xl color="white"> mdi mdi-github </w-icon><br />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mirza-malkoc-508470218/"
                    rel="noopener"
                    target="_blank"
                  >
                    <w-icon xl color="white"> mdi mdi-linkedin </w-icon><br />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:malkoc.mirza.95@gmail.com">
                    <w-icon xl color="white"> mdi mdi-email </w-icon> <br />
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
              <div class="language__selector" @click="setLanguage('de')" v-else>
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
  </header>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import router from "../../routes/router";
export default {
  setup() {
    let mobile = ref(window.matchMedia("(max-width: 1120px)"));

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

header {
  background: transparent;
  width: 100vw;
  z-index: 100;
  position: fixed;
  top: 0vh;
  font-size: 1rem;
  @media only screen and (min-width: 2100px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 0.8rem;
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
    margin: 1rem 3rem 1rem 3rem;
  }
  .nav__button {
    padding: 1.1rem;
    margin-right: 4rem;
    @media only screen and (min-width: 2100px) {
      padding: 2rem;
      margin-right: 6rem;
      font-size: 2rem;
    }
  }
  span {
    font-size: 1.7rem;
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
  width: 45px;
  height: 30px;
  margin: 8% 1rem 0 0;
  padding: 3px;
  border: 1px solid white;
  border-radius: 3px;
  @media only screen and (min-width: 2100px) {
    width: 70px;
    height: 48px;
  }
  @media only screen and (max-width: 1100px) {
    width: 40px;
    height: 28px;
    margin: 0;
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
  font-size: 1rem;
  @media only screen and (min-width: 2100px) {
    font-size: 2rem;
  }
  div {
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
  background: $mainGradient;
}

div.box {
  text-align: center;
  margin: 3vh 2vw 5vw 2vw;
  font-family: "Roboto Condensed", sans-serif;
  color: white;
  ul {
    list-style: none;
    li {
      margin: 40px 0 20px 0;
        @media only screen and (max-width: 400px) {
          font-size: 0.7rem;
          margin: 15px 0 10px 0
        }
      a {
        color: white;
      }
    }
  }
}
</style>
