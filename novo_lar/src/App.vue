<template> 
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">       
    <novo-lar-menu></novo-lar-menu>
    <main class="mdl-layout__content">
        <div class="page-content">
          <transition name="pagina">
            <router-view></router-view>
          </transition>
        </div>
    </main>
  </div>
</template>

<script>
import Menu from './components/shared/menu/menu.vue';
export default {
    components:{
    'novo-lar-menu' : Menu
  },
}
</script>

<style scoped>
  .pagina-enter, .pagina-enter-active {
    opacity: 0;
  }
  .pagina-leave-active, .pagina-enter-active {
    transition: opacity .4s;
  }
</style>
