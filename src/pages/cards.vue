<template>
  <div class="page-container">
    <div class="cards-container">
      <div class="card-header">
        <div class="title">Available balance</div>
        <div class="action-btns">
          <div class="wallet-container">
            <span class="currency">S$</span>
            <span class="balance">3,000</span>
          </div>
          <div class="button" @click="toggleAddCard">
            <Button text="New card" />
          </div>
        </div>
      </div>
      <div class="toggle-container" v-if="menus && menus.length > 0">
        <div
          v-for="(item, index) in menus"
          :key="index"
          class="text"
          :class="{ 'toggle-active': item.key === selectedToggle }"
          @click="toggleMenu(item)"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="page-content" v-if="selectedToggle">
        <card-container
          :cards="cards"
          :selectedCard="selectedCard"
          @card-action="cardAction"
          @change-card="changeCard"
          class="equal-share"
        ></card-container>
        <card-history class="equal-share"></card-history>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../global/components/button.vue";
import cardContainer from "../global/components/card-container.vue";
import cardHistory from "../global/components/card-history.vue";
export default {
  name: "cards",
  props: {},
  components: {
    "card-container": cardContainer,
    "card-history": cardHistory,
    Button,
  },
  data() {
    return {
      selectedToggle: "my-debit-cards",
      openAddCard: false,
      menus: [
        {
          title: "My Debit Cards",
          key: "my-debit-cards",
        },
        {
          title: "All Company Cards",
          key: "all-company-cards",
        },
      ],
      cards: [
        {
          id: 1,
          name: "Mark Henry",
          number: "1234 1234 1234 1234",
          expiry: "12/20",
          cvv: "***",
          card_type: "visa",
          frozen: false,
        },
        {
          id: 2,
          name: "Ahmed Sakri",
          number: "4242 4242 4242 4242",
          expiry: "12/20",
          cvv: "***",
          card_type: "mastercard",
          frozen: false,
        },
        {
          id: 3,
          name: "Jack Bill",
          number: "4141 4141 4141 4141",
          expiry: "12/20",
          cvv: "***",
          card_type: "amex",
          frozen: false,
        },
      ],
      selectedCard: null,
    };
  },
  mounted() {
    this.selectedCard = this.cards[0];
  },
  methods: {
    toggleMenu(item) {
      this.selectedToggle = item.key;
    },
    changeCard(data) {
      this.selectedCard = data;
    },
    cardAction(action) {
      console.log(action);
      if (action === "delete") {
        this.cards.splice(this.cards.indexOf(this.selectedCard), 1);
        this.selectedCard = this.cards[0];
      } else if (action === "freeze") {
        this.selectedCard.frozen = true;
      } else if (action === "unfreeze") {
        this.selectedCard.frozen = false;
      }
    },
    toggleAddCard() {
      this.openAddCard = !this.openAddCard;
    },
  },
};
</script>
<style lang="less" scoped>
.cards-container {
  padding: 60px;
  .card-header {
    display: flex;
    flex-direction: column;
    .title {
      text-align: left;
      color: #222222;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      padding-bottom: 5px;
    }
    .action-btns {
      display: flex;
      justify-content: space-between;
      .wallet-container {
        display: flex;
        align-items: center;
        .currency {
          margin-right: 10px;
          border-radius: 4px;
          width: 40px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 13px;
          font-weight: bold;
          background: #01d167;
        }
        .balance {
          color: #222222;
          font-size: 26px;
          font-weight: bold;
        }
      }
      .button {
        margin-left: auto;
      }
    }
  }
  .toggle-container {
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 40px 0 15px 0;
    .text {
      cursor: pointer;
      padding: 5px 0;
      transition: 0.5s;
      font-size: 14px;
      color: #909297;
      font-weight: 300;
      text-align: left;
      &:nth-child(2) {
        margin-left: 15px;
      }
    }
    .toggle-active {
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
      border-bottom: 3px solid #23cefd;
      color: #000;
      font-weight: 600;
    }
  }
  .page-content {
    border-radius: 8px;
    border: 1px solid #fcfcfc;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
    padding: 40px;
    display: flex;
    height: 760px;
    width: 906px;
    .equal-share {
      width: 50% !important;
    }
  }
}
</style>
