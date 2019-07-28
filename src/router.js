import Vue from 'vue'
import Heroes from './components/Heroes'
import HeroesAdd from './components/HeroesAdd'
import HeroesEdit from './components/HeroesEdit'
import Equip from './components/Equip'
import Skill from './components/Skill'

const routes = [
  {path:'/heroes',component:Heroes},
  {path:'/heroes/add',component:HeroesAdd},
  {path:'/heroes/edit/:id',name:'heroesEdit',component:HeroesEdit},
  {path:'/equip',component:Equip},
  {path:'/skill',component:Skill}
]

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({routes})

export default router