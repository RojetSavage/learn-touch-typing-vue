import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '../components/MainContent.vue'
import levelsInformation from '../data/levelsInformation';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: (() =>  {
    let routes = [{
      path:'',
      name: 'home',
      component: MainContent
      // redirect: {
      //   name: 'Level 1'
      // }
    }];

    for (let entry of Object.entries(levelsInformation)) {
      for (let levelName of Object.keys(entry[1])) {
        routes.push({
        path:`/${entry[1][levelName].name.replaceAll(' ', '%20')}`,
        name: levelName,
        component: MainContent,
      })
      }
    }
    return routes
    })()
  })

export default router
