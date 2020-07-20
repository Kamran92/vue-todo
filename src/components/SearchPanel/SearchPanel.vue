<template>
  <input type="text"
         class="search-input"
         placeholder="введите для поиска"
         v-model="value"
         v-on:keyup="addSearchValue"/>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "SearchPanel",
    data() {
      return {
        value: ''
      }
    },
    methods: {
      ...mapMutations(['ADD_SEARCH_VALUE']),
      addSearchValue() {
        this.ADD_SEARCH_VALUE(this.value)
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
    padding: 6px 12px;

    @media (max-width: 580px) {
        width: 100%;
    }
  }





</style>