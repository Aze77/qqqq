<template>
  <div id="app" class="container">
    <app-nav></app-nav>
    <div class="col-md-2">
      <div class="row">
        <app-slider></app-slider>
      </div>
    </div>
    <div class="col-md-10">
      <!--显示组件的位置-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import appNav from './components/AppNav'
import appSlider from './components/AppSlider'


export default {
  name: 'app',
  components:{appNav,appSlider}
}
</script>

<style>

</style>
