import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeView from '../features/home/Home';
import DetailView from '../features/detail/Detail';

const stackNavigation = createStackNavigator({
  Home: { screen: HomeView },
  Detail: { screen: DetailView },
}, {
  initialRouteName: 'Home'
});

export default createAppContainer(stackNavigation);
