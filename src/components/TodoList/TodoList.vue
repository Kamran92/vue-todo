<template>
  <ul class="todo-list list-group">
    <TodoItem v-for="(todo) of TODOS" :key="todo.id"
              v-bind:todo="todo"/>
  </ul>
</template>

<script>
  import TodoItem from "../TodoListItem/TodoListItem"
  import {mapGetters} from 'vuex'

  export default {
    name: "TodoList",
    computed: mapGetters(['TODOS']),
    components: {
      TodoItem
    }
  }

</script>

<style scoped lang="scss">
</style>