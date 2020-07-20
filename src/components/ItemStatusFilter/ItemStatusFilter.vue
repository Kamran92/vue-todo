<template>
  <div class="btn-group">
    <button type="button" class="btn"
            v-bind:class="[filter === 'all' ? activeClass : notActiveClass]"
            v-on:click="toggleFilter('all')">Все
    </button>
    <button type="button" class="btn"
            v-bind:class="[filter === 'active' ? activeClass : notActiveClass]"
            v-on:click="toggleFilter('active')">Активные
    </button>
    <button type="button" class="btn"
            v-bind:class="[filter === 'notActive' ? activeClass : notActiveClass]"
            v-on:click="toggleFilter('notActive')">Завершенные
    </button>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "ItemStatusFilter",
    data() {
      return {
        filter: 'all',
        activeClass: 'btn-info',
        notActiveClass: 'btn-outline-secondary'
      }
    },
    methods: {
      ...mapMutations(['TOGGLE_FILTER']),
      toggleFilter(filter) {
        this.filter = filter
        this.TOGGLE_FILTER(filter)
      },
    }

  }
</script>

<style scoped lang="scss">
  .btn-info {
    border: 1px solid #576774;
    background-color: #576774;
  }

  .btn-outline-secondary {
    background-color: #ffffff;
  }

  .btn-info:not(:disabled):not(.disabled):active {
    background-color: #576774;
  }


  .btn-info:not(:disabled):not(.disabled):active:focus,
  .btn-outline-secondary:not(:disabled):not(.disabled):active:focus {
    box-shadow: none;
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

  @media (max-width: 580px) {
    .btn-group {
      margin-top: 10px;
    }
  }

</style>