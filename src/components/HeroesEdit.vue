<template>
    <form action="" method="post" role="form" >
      <legend>编辑英雄</legend>
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
    name: 'HeroesEdit',
    data() {
        return {
            form:{
                name:'',
                gender:''
            }
        }
    },
    methods: {
        getData(){
            const id = this.$route.params.id
            axios.get('http://localhost:3000/heroes/'+id)
            .then(res=>{
                this.form = res.data
            }).catch(err=>alert('获取英雄数据失败'))
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style scoped>
    
</style>