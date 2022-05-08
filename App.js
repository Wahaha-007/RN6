import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';   // Base Foundation
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Real Navigator

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator> 
        {/*<Stack.Navigator initialRouteName="MealsOverview"> // Change initial page to 2nd page */} 
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} /> 
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
