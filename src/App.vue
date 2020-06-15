<template>
  <div id="app">
    <b-container class="m-0 p-0" fluid>
      <div class="d-flex bg-white">
        <div id="sidenav" class="bg-white p-4 shadow-sm d-none d-md-block">
          <div class="sidenav-logo mb-5 text-center">
            <img src="./assets/images/logo-small.png" alt="MyCScore Logo" />
          </div>
          <div class="sidenav-links">
            <router-link
              v-for="menu in menus"
              :key="menu.label"
              :to="menu.link"
              class="sidenav-item"
            >
              <div @click="activeMenu = menu.link" :key="menu.label" class="px-3 py-2 my-3 rounded">
                <img :src="activeMenu == menu.link && (menu.icon_active) ? menu.icon_active : menu.icon" :alt="`${menu.label} Icon`" />
                <span class="ml-2 px-2 sidenav-item-link">{{menu.label}}</span>
              </div>
            </router-link>
          </div>
          <div
            class="copyright-text position-absolute text-cblue d-flex justify-content-center"
          >&copy; 2020 MyCScore</div>
        </div>
        <div id="main-content">
          <b-sidebar id="sidebar-1" shadow backdrop>
            <div id="sidenav-mobile" class="bg-white p-4 shadow-sm">
              <div class="sidenav-logo mb-5 text-center">
                <img src="./assets/images/logo-small.png" alt="MyCScore Logo" />
              </div>
              <div class="sidenav-links">
                <router-link
                  v-for="menu in menus"
                  :key="menu.label"
                  :to="menu.link"
                  class="sidenav-item"
                >
                  <div @click="activeMenu = menu.link" :key="menu.label" class="px-3 py-2 my-3 rounded">
                    <img :src="activeMenu == menu.link && (menu.icon_active) ? menu.icon_active : menu.icon" :alt="`${menu.label} Icon`" />
                    <span class="px-2 sidenav-item-link">{{menu.label}}</span>
                  </div>
                </router-link>
              </div>
              <div
                class="copyright-text position-absolute text-cblue d-flex justify-content-center"
              >&copy; 2020 MyCScore</div>
            </div>
          </b-sidebar>
          <div
            id="top-nav"
            class="bg-white d-flex justify-content-between align-items-center py-3 px-md-3 sticky-top"
          >
            <div class="topnav-left d-flex align-items-center">
              <button v-b-toggle.sidebar-1 class="sidenav-toggle d-md-none btn">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M1.683,3.39h16.676C18.713,3.39,19,3.103,19,2.749s-0.287-0.642-0.642-0.642H1.683 c-0.354,0-0.641,0.287-0.641,0.642S1.328,3.39,1.683,3.39z M1.683,7.879h11.545c0.354,0,0.642-0.287,0.642-0.641 s-0.287-0.642-0.642-0.642H1.683c-0.354,0-0.641,0.287-0.641,0.642S1.328,7.879,1.683,7.879z M18.358,11.087H1.683 c-0.354,0-0.641,0.286-0.641,0.641s0.287,0.642,0.641,0.642h16.676c0.354,0,0.642-0.287,0.642-0.642S18.713,11.087,18.358,11.087z M11.304,15.576H1.683c-0.354,0-0.641,0.287-0.641,0.642s0.287,0.641,0.641,0.641h9.621c0.354,0,0.642-0.286,0.642-0.641 S11.657,15.576,11.304,15.576z"
                  />
                </svg>
              </button>
              <b-input-group>
                <b-form-input placeholder="Search"></b-form-input>
                <b-input-group-append>
                  <b-button class="bg-cblue" size="xs" variant="primary">
                    <b-icon icon="search"></b-icon>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
            <div class="topnav-right d-flex justify-content-between align-items-center">
              <div class="notifications mx-2">
                <img src="./assets/images/bell.svg" alt="Notifications" />
              </div>
              <p class="name mx-3 my-0 text-cblue d-none d-md-block">John Doe</p>
              <div
                class="d-flex justify-content-center align-items-center avatar mx-2 rounded-circle text-cblue font-heavy"
              >JD</div>
            </div>
          </div>
          <router-view />
        </div>
      </div>
    </b-container>
  </div>
</template>


<script>
export default {
  data: () => ({
    activeMenu: null,
    menus: [
      {
        label: "Dashboard",
        link: "/",
        icon: require("./assets/images/dashboard.svg"),
        icon_active: require("./assets/images/dashboard-active.svg"),
        active: false
      },
      {
        label: "Calendar",
        link: "/calendar",
        icon: require("./assets/images/event.svg"),
        active: false
      },
      {
        label: "Support",
        link: "/support",
        icon: require("./assets/images/headphones.svg"),
        icon_active: require("./assets/images/headphones-active.svg"),
        active: false
      },
      {
        label: "Settings",
        link: "/settings",
        icon: require("./assets/images/settings.svg"),
        active: false
      },
      {
        label: "Logout",
        link: "/logout",
        icon: require("./assets/images/logout.svg"),
        active: false
      }
    ],
    window: window
  }),
  mounted() {
    this.activeMenu = window.location.pathname
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Object Sans";
  src: url("./assets/fonts/object-sans.otf");
}
@font-face {
  font-family: "Object Sans Heavy";
  src: url("./assets/fonts/object-sans-heavy.otf");
}
.font-heavy {
  font-family: "Object Sans Heavy" !important;
}
$dim-color: #f1f3f9;
$blue-color: #171df9;
$text-blue-color: #001b9b;
$orange-color: #f69409;
.bg-dim {
  background-color: $dim-color !important;
}
.text-dim {
  color: $dim-color !important;
}
.bg-cblue {
  background-color: $blue-color !important;
}
.text-cblue {
  color: $text-blue-color !important;
}
.bg-corange {
  background-color: $orange-color !important;
}
.text-corange {
  color: $orange-color !important;
}
#app {
  font-family: "Object Sans";
}
#sidenav {
  position: fixed;
  left: 0;
  width: calc(100% / 6);
  min-height: 100vh;
  .sidenav-links {
    .sidenav-item {
      font-size: 0.9rem;
      text-decoration: none;
      color: #707070;
      img {
        height: 17px;
        width: 17px;
      }
      &.router-link-exact-active {
        & > div {
          background: $dim-color 0% 0% no-repeat padding-box;
        }
        color: #00105c;
      }
    }
  }
  .copyright-text {
    bottom: 2rem;
    right: 0;
    left: 0;
    font-size: 0.9rem;
  }
}
#main-content {
  width: calc(100% / (5 / 6));
  @media (min-width: 768px) {
    margin-left: calc(100% / 6);
  }
  background: $dim-color 0% 0% no-repeat padding-box;
  min-height: 100vh;

  #top-nav {
    .topnav-left {
      min-width: calc(100% / 3);
      .input-group {
        button {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        input,
        div.input-group-append,
        button {
          &::placeholder {
            font-size: 85%;
          }
          svg {
            font-size: 85%;
          }
        }
      }
    }
    .topnav-right {
      .notifications {
        img {
          width: 1rem;
          height: 1rem;
        }
      }
      .avatar {
        width: 45px;
        height: 45px;
        background: $dim-color;
        font-weight: bolder;
      }
    }
  }
}
#sidenav-mobile {
  height: 100%;
  .copyright-text {
    bottom: 1rem;
    left: 0;
    right: 0;
  }
  .sidenav-links {
    .sidenav-item {
      font-size: 0.9rem;
      text-decoration: none;
      color: #707070;
      img {
        height: 17px;
        width: 17px;
      }
      &.router-link-exact-active {
        & > div {
          background: $dim-color 0% 0% no-repeat padding-box;
        }
        color: #00105c;
      }
    }
  }
  .copyright-text {
    bottom: 2rem;
    right: 0;
    left: 0;
    font-size: 0.9rem;
  }
}
</style>
