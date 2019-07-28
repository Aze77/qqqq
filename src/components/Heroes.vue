<template>
    <div class="wrapper">
    <router-link to="/heroes/add" class="btn btn-primary">添加英雄</router-link>
    <hr>
    <table class="table table-hover">
      <thead>
      <tr>
        <th>ID</th>
        <th>英雄名称</th>
        <th>英雄性别</th>
        <th>创建时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
       <tr v-for="item in list" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.gender}}</td>
        <td>{{item.ctime}}</td>
        <td>
          <button class="btn btn-success" @click="toEdit(item.id)">编辑</button>
          <button class="btn btn-danger" @click="del(item.id)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Heroes',
    data () {
      return {
        list: []
      }
    },
    methods: {
      getData(){
          axios.get('http://localhost:3000/heroes')
          .then(res=>{
            this.list = res.data
          }).catch(err=>alert('获取英雄数据失败'))
      },
      del (id) {
        if (confirm('老铁，确认删除吗')) {
          axios.delete('http://localhost:3000/heroes/' + id)
            .then(res => {
              this.getData()
            }).catch(err => alert('删除失败'))
        }
      },
      toEdit(id){
        this.$router.push({name:'heroesEdit',params:{id}})
      }
    }, 
    mounted() {
      this.getData()
  }   
}
</script>

<style scoped>
    
</style>