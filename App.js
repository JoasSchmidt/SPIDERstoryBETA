import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/drawer';

export default function App() {
  return (
   <NavigationContainer>
    <DrawerNavigator/>
   </NavigationContainer>
  );
}


