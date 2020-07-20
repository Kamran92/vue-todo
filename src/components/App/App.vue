<template>
  <div class="app">
    <div class="container">
      <AppHeader/>
      <div class="search-panel">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList/>
      <ItemAddForm/>
    </div>
  </div>
</template>

<script>
  import AppHeader from '../AppHeader/AppHeader'
  import SearchPanel from "../SearchPanel/SearchPanel"
  import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
  import TodoList from "../TodoList/TodoList";
  import ItemAddForm from "../ItemAddForm/ItemAddForm";

  export default {
    name: 'App',
    components: {
      AppHeader,
      SearchPanel,
      ItemStatusFilter,
      TodoList,
      ItemAddForm
    }
  }
</script>

<style lang="scss">
  .app {
    margin: 20px auto 0 auto;
  }

  .search-panel {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
  }

  body {
    background-color: #f9f9fa;
  }
</style>
