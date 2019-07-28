<template>
  <form action="" method="post" role="form" @submit.prevent="add()">
      <legend>添加英雄</legend>
      <div class="form-group">
        <label>英雄名称</label>
        <input type="text" class="form-control" v-model="form.name">
      </div>
      <div class="form-group">
        <label>英雄性别</label>
        <input type="text" class="form-control" v-model="form.gender">
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
    </form>
</template>

<script>
    import axios from 'axios'
    export default {
    name: 'HeroesAdd',
    data() {
      return {
        form: {
          name: '',
          gender:''
        } 
      }
    },
    methods: {
      add(){
        axios.post('http://localhost:3000/heroes',this.form)
        .then(res=>{
          this.$router.push('/heroes')
        }).catch(err=>alert('添加失败'))
    }
  }
  }
</script>

<style scoped>

</style>