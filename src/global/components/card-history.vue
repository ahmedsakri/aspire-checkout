<template>
  <div>
    <div v-for="(item, index) in accordions" :key="index">
      <Accordion :item="item" />
    </div>
  </div>
</template>
<script>
import Accordion from "./accordion.vue";
export default {
  components: {
    Accordion,
  },
  data() {
    return {
      accordions: [
        {
          title: "Card Details",
          icon: require("../../assets/card-details.svg"),
          order_history: [],
        },
        {
          title: "Recent transactions",
          icon: require("../../assets/transactions.svg"),
          order_history: [
            {
              icon: require("../../assets/file-storage.svg"),
              product_name: "Hamleys",
              amount: "S$ 150",
              is_returned: true,
              order_date: "20 May 2020",
              status: "Charged to debit card",
              bg_color: "#009DFF1A",
            },
            {
              icon: require("../../assets/flights.svg"),
              product_name: "Hamleys",
              amount: "S$ 150",
              is_returned: false,
              order_date: "20 May 2020",
              status: "Charged to debit card",
              bg_color: "#00D6B51A",
            },
            {
              icon: require("../../assets/megaphone.svg"),
              product_name: "Hamleys",
              amount: "S$ 150",
              is_returned: false,
              order_date: "20 May 2020",
              status: "Charged to debit card",
              bg_color: "#F251951A",
            },
            {
              icon: require("../../assets/file-storage.svg"),
              product_name: "Hamleys",
              amount: "S$ 150",
              is_returned: false,
              order_date: "20 May 2020",
              status: "Charged to debit card",
              bg_color: "#009DFF1A",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
