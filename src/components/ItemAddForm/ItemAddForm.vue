<template>
  <form class="bottom-panel d-flex" v-on:submit.prevent="addTodo">
    <input type="text"
           class="form-control new-todo-label"
           placeholder="Что нужно сделать?"
           v-model="title"/>

    <button type="submit"
            class="btn btn-outline-secondary">Добавить
    </button>
  </form>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "ItemAddForm",
    data() {
      return {
        title: ''
      }
    },

    methods: {
      ...mapMutations(['ADD_TODO']),
      addTodo() {
        if (this.title.trim()) {
          const newTodo = {
            id: Date.now(),
            title: this.title,
            active: true
          }
          this.title = ''
          this.ADD_TODO(newTodo)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .bottom-panel {
    margin-top: 10px;

    .btn-outline-secondary {
      background-color: #ffffff;
    }

    .new-todo-label {
      width: auto;
      flex-grow: 1;
      margin-right: 3px;
    }
  }

  .form-control {
    border: 1px solid #767676;
    &:focus {
      box-shadow: none;
      border: 2px solid #101010;
    }
  }

  .btn {
    &:hover {
      border: 1px solid #576774;
      background-color: #576774;
    }

    &:focus,
    &:active {
      outline: none;
      box-shadow: none;
    }
  }


  .btn-outline-secondary:not(:disabled):not(.disabled):active:focus {
    box-shadow: none;
  }


</style>