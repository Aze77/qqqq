<template>
   <div class="list-group">
    <router-link to="/heroes" class="list-group-item">英雄列表</router-link>
    <router-link to="/equip" class="list-group-item">装备列表</router-link>
    <router-link to="/skill" class="list-group-item">技能列表</router-link>
   </div>
</template>

<script>
    export default {
    name: 'AppSlider'
  }
</script>

<style scoped>
a.list-group-item.router-link-exact-active,
a.list-group-item.router-link-active{
    z-index:2;
    color:#fff;
    background-color:#337ab7;
    border-color:#337ab7;
}
    
</style>