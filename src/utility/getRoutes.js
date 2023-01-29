import levelsInformation from '../data/levelsInformation';
import MainContent from '../components/MainContent.vue'

export default getRoutes = () =>  {
    let routes = [];
    
    for (let entry of Object.entries(levelsInformation)) {
      for (let levelName of Object.keys(entry[1])) {
      routes.push({
        path:`/${levelName}`,
        levelName,
        component: "",
      })
      }
    }
    return routes
    }