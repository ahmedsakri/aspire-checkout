<template>
  <div class="side-menu-container">
    <div class="drawer-content">
      <div class="scrollarea-container">
        <div class="hide-scrollbar">
          <router-link :to="'/'">
            <img src="../assets/logo.svg" alt="Aspire" />
          </router-link>
          <span class="subtitle"
            >Trusted way of banking for 3,000+ SMEs and startups in
            Singapore</span
          >
        </div>
        <div class="menus-container">
          <ul class="menu-ul">
            <li v-for="(item, index) in sideMenus" :key="index" class="menu">
              <router-link :to="item.link" class="menu-link">
                <img :src="item.icon" :alt="item.title" class="menu-icon" />
                <span class="menu-title">{{ item.title }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sideMenus: [
        {
          title: "Home",
          icon: require("../assets/home.svg"),
          link: "/home",
        },
        {
          title: "Cards",
          icon: require("../assets/card.svg"),
          link: "/cards",
        },
        {
          title: "Payments",
          icon: require("../assets/payments.svg"),
          link: "/payments",
        },
        {
          title: "Credit",
          icon: require("../assets/credit.svg"),
          link: "/credit",
        },
        {
          title: "Settings",
          icon: require("../assets/account.svg"),
          link: "/settings",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.side-menu-container {
  position: fixed;
  left: 0;
  background: #0c365a;
  bottom: 0;
  top: 0;
  z-index: 1000;
  display: block;
  width: 340px;
  transform: translateX(0px);
  .drawer-content {
    height: 100%;
    width: 100%;
    will-change: scroll-position;
    color: #ffffff;
    overflow: auto;
    .scrollarea-container {
      padding-left: 48px;
      padding-right: 48px;
      background: #0c365a;
      position: relative;
      .hide-scrollbar {
        display: flex;
        align-items: baseline;
        flex-direction: column;
        img {
          width: 7.8rem;
          margin-top: 48px;
          margin-bottom: 20px;
          border-style: none;
        }
        .subtitle {
          font-size: 15px;
          text-align: left;
          opacity: 0.3;
          line-height: 20px;
        }
      }
      .menus-container {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        .menu-ul {
          list-style: none;
          padding: 0;
          margin: 0;
          .menu {
            display: flex;
            align-items: center;
            padding: 30px 0;
            .menu-link {
              display: flex;
              align-items: center;
              padding: 0;
              margin: 0;
              text-decoration: none;
              color: #ffffff;
              .menu-icon {
                width: 24px;
                height: 24px;
                margin-right: 16px;
                filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(18deg)
                  brightness(97%) contrast(114%);
              }

              .menu-title {
                font-size: 16px;
                font-weight: 500;
                text-align: left;
                line-height: 32px;
              }
            }
          }
          .router-link-exact-active {
            color: #01d167 !important;
            font-weight: bold;
            filter: invert(59%) sepia(79%) saturate(1913%) hue-rotate(104deg)
              brightness(95%) contrast(101%);
          }
        }
      }
    }
  }
}
</style>
