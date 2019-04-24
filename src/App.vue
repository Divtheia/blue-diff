<template>
  <transition
    name="fade"
    mode="out-in"
    appear="ture"
    appear-active-class="fadeInDown"
    >
    <div
    style="animation-duration:3s">
      <Menu/>   
        <img src="./assets/imgs/SPA0.jpg" class='SPAcover' width="100%">
      <router-view/>  
    </div>   
  </transition> 
</template>

<script>
import Menu from './components/Menu.vue';
export default {
  //name: 'App',
  components:{
    Menu,
  },
}
</script>

<style>
</style>
