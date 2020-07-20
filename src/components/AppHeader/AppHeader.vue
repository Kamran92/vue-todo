<template>
  <div class="app-header">
    <h1>Список задач</h1>
    <h2>{{NUM_ACTIVE}} активные, {{NUM_NOT_ACTIVE}} завершенные</h2>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "AppHeader",
    computed: mapGetters(['NUM_ACTIVE', 'NUM_NOT_ACTIVE']),
  }
</script>

<style scoped lang="scss">
  .app-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    h1 {
      flex-grow: 1;
    }

    h2 {
      font-size: 20px;
      color: grey;
    }
  }

  @media (max-width: 580px) {
    .app-header {
      display: block;
      h1 {
        margin-bottom: 0
      }
    }
  }
</style>