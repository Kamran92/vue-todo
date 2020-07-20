<template>
  <li class="list-group-item">
  <div class="todo-list-item" v-bind:class="{done: !todo.active}">
      <span class="todo-list-item-label">{{todo.title}}</span>
      <div class="btn-group">
         <button type="button"
                 class="btn btn-outline-success btn-sm"
                 v-on:click="toggleActive(todo.id)">
        <i class="fa fa-exclamation"></i>
      </button>
      <button type="button"
              class="btn btn-outline-danger btn-sm"
              v-on:click="deleteTodo(todo.id)">
        <i class="fa fa-trash-o"></i>
      </button>
      </div>
  </div>
  </li>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "TodoListItem",
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapMutations(['TOGGLE_ACTIVE', 'DELETE_TODO']),
      toggleActive(id) {
        this.TOGGLE_ACTIVE(id)
      },
      deleteTodo(id) {
        this.DELETE_TODO(id)
      }
    }
  }
</script>

<style scoped lang="scss">
  .btn-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    color: #1e2933;
    border: 1px solid #1e2933;
  }


  .btn-outline-danger:hover,
  .btn-outline-success:hover {
    color: #ffffff;
    background-color: #576774;
    border-color: #576774;
  }

  .btn-outline-danger:not(:disabled):not(.disabled):active,
  .btn-outline-success:not(:disabled):not(.disabled):active {
    color: #ffffff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  .btn-outline-danger:not(:disabled):not(.disabled):active:focus,
  .btn-outline-success:not(:disabled):not(.disabled):active:focus,
  .btn-outline-danger:focus,
  .btn-outline-success:focus {
    box-shadow: none;
  }


  .list-group-item {
    padding: 4px 12px;
  }

  .todo-list-item {
    display: flex;
    justify-content: space-between;
    font-size: 20px;

    button {
      width: 35px;
      margin: 3px;
    }
  }

  .todo-list-item-label {
    margin-left: 20px;
    line-height: 35px;
    cursor: pointer;
    user-select: none;
  }

  .todo-list-item.done .todo-list-item-label {
    text-decoration: line-through;
  }

  .todo-list-item.important .todo-list-item-label {
    font-weight: bold;
    color: steelblue;
  }
</style>