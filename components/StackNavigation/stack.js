import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home1 from './Home1';
import Home2 from './Home2';

const AppNavigator = createStackNavigator({
    Home1: {screen : Home1},
    Home2: {screen : Home2}
},{headerMode : "none"});
  
  export default createAppContainer(AppNavigator);