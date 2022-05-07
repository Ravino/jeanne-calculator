<template lang="pug">
  div.hello
    span Имя банка
    input(
      type="text",
      placeholder="Введите имя банка",
      v-model="nameBank"
    )
    span Минимальный процент
    input(
      type="number",
      placeholder="Введите минимальный годовой процент",
      v-model.number="minPercent"
    )
    span Максимальный процент
    input(
      type="number",
      placeholder="Введите максимальный годовой процент",
      v-model.number="maxPercent"
    )
    button(@click="addBank") Добавить
</template>

<script>
export default {
  name: 'AddBank',
  data: () => ({
    nameBank: '',
    minPercent: 0,
    maxPercent: 0,
  }),

  methods: {
    addBank() {
      const bank = {
        id: Math.random(),
        nameBank: this.nameBank,
        minPercent: this.minPercent,
        maxPercent: this.maxPercent,
        minAmount: 0,
        maxAmount: 0,
      };

      this.nameBank = '';
      this.minPercent = 0;
      this.maxPercent = 0;

      this.$store.commit('addBank', bank);
      return undefined;
    },
  },
};
</script>
