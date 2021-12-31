<template>
  <div class="selected-card-container">
    <div class="show-number" @click="toggleCardNumber">
      <img src="../../assets/eye.svg" alt="eye-btn" />
      <span>Show card number</span>
    </div>
    <div
      class="card-container"
      v-if="selectedCard"
      :style="{ backgroundColor: getBackgroundColor(selectedCard) }"
      ref="cardContainer"
      :class="{ 'freeze-card': selectedCard.frozen }"
    >
      <div class="aspire-logo">
        <img src="../../assets/logo-white.svg" alt="" />
      </div>
      <div class="name">{{ selectedCard.name }}</div>
      <div class="card-number" v-if="!showCardNumber">
        {{ maskCreditCardNumber(selectedCard.number) }}
      </div>
      <div class="card-number" v-if="showCardNumber">
        {{ selectedCard.number }}
      </div>
      <div class="card-info">
        <div class="expiry">Thru: {{ selectedCard.expiry }}</div>
        <div class="cvv">
          CVV: <span class="value">{{ selectedCard.cvv }}</span>
        </div>
      </div>
      <div class="card-type">
        <img src="../../assets/visa.svg" alt="visa" />
      </div>
    </div>
    <div class="bullet-container" v-if="cards && cards.length > 0">
      <div
        v-for="(data, index) in cards"
        :key="index"
        @click="changeCard(data)"
        class="bullet"
        :style="{ backgroundColor: getBackgroundColor(data) }"
        :class="{ 'bullet-active': data.id === selectedCard.id }"
      ></div>
    </div>
    <div class="card-action-container">
      <div
        v-for="(item, index) in action_menus"
        :key="index"
        class="item"
        @click="toggleCardAction(item)"
      >
        <img :src="item.icon" :alt="item.title" class="menu-icon" />
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
    selectedCard: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    console.log(this.selectedCard);
  },
  watch: {
    selectedCard(newVal) {
      console.log(newVal, "New Value");
      this.selectedCard = newVal;
    },
    cards(newVal) {
      this.cards = newVal;
    },
  },
  data() {
    return {
      showCardNumber: false,
      action_menus: [
        {
          title: "Freeze Card",
          icon: require("../../assets/freeze.svg"),
          action: "freeze",
        },
        {
          title: "Set spend limit",
          icon: require("../../assets/limit.svg"),
          action: "limit",
        },
        {
          title: "Add to GPay",
          icon: require("../../assets/gpay.svg"),
          action: "gpay",
        },
        {
          title: "Replace Card",
          icon: require("../../assets/replace.svg"),
          action: "replace",
        },
        {
          title: "Cancel Card",
          icon: require("../../assets/delete.svg"),
          action: "delete",
        },
      ],
    };
  },

  methods: {
    changeCard(card) {
      this.$emit("change-card", card);
    },
    getBackgroundColor(card) {
      if (card.card_type === "visa") {
        return "#01D167";
      } else if (card.card_type === "mastercard") {
        return "#00A0E1";
      } else if (card.card_type === "amex") {
        return "#0C365A";
      }
    },
    toggleCardNumber() {
      this.showCardNumber = !this.showCardNumber;
    },
    toggleCardAction(item) {
      if (item.action === "freeze") {
        let obj = {
          title: "Unfreeze Card",
          icon: require("../../assets/freeze.svg"),
          action: "unfreeze",
        };
        this.replaceObjectinArray(this.action_menus, item, obj);
        this.$refs.cardContainer.classList.add("freeze-card");
      } else if (item.action === "unfreeze") {
        let obj = {
          title: "Freeze Card",
          icon: require("../../assets/freeze.svg"),
          action: "freeze",
        };
        this.replaceObjectinArray(this.action_menus, item, obj);
        this.$refs.cardContainer.classList.remove("freeze-card");
      }
      console.log(this.action_menus);
      this.$emit("toggle-card-action", item);
    },
    maskCreditCardNumber(cardNumber) {
      return cardNumber.replace(/\d(?=\d{4})/g, "*");
    },
    replaceObjectinArray(array, oldObject, newObject) {
      let index = array.indexOf(oldObject);
      array.splice(index, 1, newObject);
    },
  },
};
</script>

<style lang="less" scoped>
.selected-card-container {
  .show-number {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #01d167;
    font-weight: bold;
    cursor: pointer;
    font-size: 12px;
    padding: 0 0 12px 0;
    img {
      margin-right: 10px;
    }
  }

  .card-container {
    padding: 28px;
    border-radius: 12px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
    .aspire-logo {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      img {
        width: 85px;
      }
    }
    .name {
      color: #ffffff;
      font-size: 24px;
      font-weight: bold;
      line-height: 20px;
      text-align: left;
      letter-spacing: 0.58px;
      padding-top: 25px;
    }
    .card-number {
      color: #ffffff;
      font-size: 20px;
      font-weight: bold;
      line-height: 19px;
      letter-spacing: 3.46px;
      padding-top: 35px;
      text-align: left;
    }
    .card-info {
      display: flex;
      padding: 10px 0;
      align-items: center;
      .expiry {
        color: #ffffff;
        font-size: 12px;
        font-weight: bold;
        line-height: 18px;
      }
      .cvv {
        color: #ffffff;
        font-size: 13px;
        font-weight: bold;
        line-height: 24px;
        letter-spacing: 0.31px;
        margin-left: 20px;
        display: flex;
        align-items: center;
        .value {
          color: #ffffff;
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 2.88px;
          line-height: 24px;
          margin-left: 10px;
        }
      }
    }
    .card-type {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      img {
        width: 85px;
      }
    }
  }
  .freeze-card {
    opacity: 0.2;
  }
  .bullet-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0 20px 0;
    .bullet {
      border-radius: 8px;
      background: #01d167;
      opacity: 20%;
      width: 8px;
      height: 8px;
      margin: 0 5px;
      cursor: pointer;
    }
    .bullet-active {
      opacity: 100%;
      width: 16px;
    }
  }
  .card-action-container {
    background: #edf3ff;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    padding: 20px 27px;
    .item {
      display: flex;
      flex-direction: column;
      color: #0c365a;
      font-size: 13px;
      font-weight: 400;
      line-height: 14px;
      text-align: center;
      width: 60px;
      align-items: center;
      cursor: pointer;
      img {
        width: 32px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
