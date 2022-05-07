<template lang="pug">
  div.home
    SetValue
    AddBank
    ListBanks
</template>

<script>
import SetValue from '../components/SetValue.vue';
import AddBank from '../components/AddBank.vue';
import ListBanks from '../components/ListBanks.vue';

export default {
  name: 'HomeView',
  components: {
    SetValue,
    AddBank,
    ListBanks,
  },
};
</script>
