<template lang="pug">
  div.value
    span Количество дней в году
    input(
      type="number",
      placeholder="Введите количество дней в году",
      v-model.number="dayInYear"
    )
    span Количество дней в срезе
    input(
      type="number",
      placeholder="Введите количество дней в срезе",
      v-model.number="dayInSlice"
    )
    span Сумма взноса
    input(
      type="number",
      placeholder="Введите сумму",
      v-model.number="amount"
    )
    button(@click="setValue") Задать
</template>

<script>
export default {
  name: 'SetValue',
  data: () => ({
    dayInYear: 365,
    dayInSlice: 365,
    amount: 0,
  }),

  methods: {
    setValue() {
      this.$store.commit('changeDayInYear', this.dayInYear);
      this.$store.commit('changeDayInSlice', this.dayInSlice);
      this.$store.commit('changeAmount', this.amount);
      return undefined;
    },
  },
};
</script>
