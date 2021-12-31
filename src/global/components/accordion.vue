<template>
  <div>
    <div class="accordion-container" @click="toggleOrderHistoy">
      <div class="block">
        <div class="img-container">
          <img :src="item.icon" :alt="item.title" />
        </div>
        <div class="title">{{ item.title }}</div>
      </div>
      <div class="right-content">
        <img class="arrow-icon" src="../../assets/down-arrow.svg" alt="" />
      </div>
      <div
        class="history-container"
        v-if="showOrderHistory && item.order_history.length > 0"
      >
        <div
          v-for="(data, index) in item.order_history"
          :key="index"
          class="order-item-cont"
        >
          <div class="order-item">
            <div
              class="order-img-container"
              :style="{ backgroundColor: data.bg_color }"
            >
              <img :src="data.icon" alt="" srcset="" />
            </div>
            <div class="order-info">
              <div class="order-name">{{ data.product_name }}</div>
              <div class="order-date">{{ data.order_date }}</div>
              <div class="status-container">
                <div class="img-cont">
                  <img src="../../assets/business-and-finance.svg" alt="" />
                </div>
                <span class="status-text">{{ data.status }}</span>
              </div>
            </div>
            <div class="price" :class="{ positive: data.is_returned }">
              <span v-if="!data.is_returned">-</span>
              <span v-if="data.is_returned">+</span>
              {{ data.amount }}
            </div>
          </div>
        </div>
        <div class="view-all-trans">View all card transactions</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showOrderHistory: false,
    };
  },
  methods: {
    toggleOrderHistoy() {
      this.showOrderHistory = !this.showOrderHistory;
    },
  },
};
</script>
<style lang="less" scoped>
.accordion-container {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);
  background: #f5f9ff;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 24px;
  margin: 28px auto;
  width: 366px;
  cursor: pointer;
  .block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .img-container {
      width: 24px;
      height: 24px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      font-size: 14px;
      font-weight: bold;
      color: #0c365a;
      line-height: 18px;
      font-weight: 400;
      margin-left: 15px;
    }
  }
  .right-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .arrow-icon {
      width: 20px;
      height: 20px;
    }
  }
  .history-container {
    top: 45px;
    position: absolute;
    left: 0;
    background: #ffffff;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
    padding: 0 24px;
    margin: 28px auto;
    width: 366px;
    .order-item-cont {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 0;
      border-bottom: 1px solid #f0f0f0;
      &:last-child {
        border-bottom: 0;
      }
      .order-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .order-img-container {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 16px;
          }
        }
        .order-info {
          display: flex;
          flex-direction: column;
          margin-left: 15px;
          .order-name {
            font-size: 14px;
            font-weight: 500;
            color: #222222;
            line-height: 18px;
            text-align: left;
          }
          .order-date {
            font-size: 13px;
            font-weight: 400;
            line-height: 18px;
            color: #aaaaaa;
            text-align: left;
          }
          .status-container {
            display: flex;
            align-items: center;
            margin-top: 10px;
            .img-cont {
              border-radius: 50%;
              background: #325baf;
              width: 24px;
              height: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 10px;
              img {
                width: 10px;
              }
            }
            .status-text {
              font-size: 12px;
              font-weight: bold;
              color: #0c365a;
              line-height: 18px;
            }
          }
        }
        .price {
          font-size: 14px;
          font-weight: bold;
          flex: 1;
          color: #222222;
          line-height: 18px;
          text-align: right;
        }
        .positive {
          color: #00b865;
        }
      }
    }
    .view-all-trans {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px 0;
      border: 1px solid #ddffec;
      font-size: 13px;
      font-weight: 500;
      background: #edfff5;
      color: #01d167;
      line-height: 18px;
      text-align: center;
      margin-left: -24px;
      margin-right: -24px;
    }
  }
}
</style>
