<template lang="pug">
  div.listBank
    div
      span Банк
      span мин %
      span Мин ₽
      span Макс %
      span Макс ₽
      button(@click="computeBanks") Посчитать

    div(v-for="(item, index) in listBanks", :key="item.id")
      span {{ item.nameBank }}
      span {{ item.minPercent }}
      span {{ item.minAmount || '-' }}
      span {{ item.maxPercent }}
      span {{ item.maxAmount || '-' }}
      button(@click="removeBank($event, index)") Удалить
</template>

<script>
export default {
  name: 'ListBanks',

  data: () => ({}),

  computed: {
    listBanks() {
      return this.$store.state.listBanks;
    },
  },

  methods: {
    removeBank(event, indexPosition) {
      this.$store.commit('removeBank', indexPosition);
      return undefined;
    },
    computeBanks() {
      this.$store.commit('computeBanks');
      return undefined;
    },
  },
};
</script>
