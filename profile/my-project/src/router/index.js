import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Top from '@/components/Top'
import Output from '@/components/Output'
import Skill from '@/components/Skill'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/outputs',
      name: 'Output',
      component: Output
    },
    {
      path: '/skills',
      name: 'Skill',
      component: Skill
    }
  ]
})
