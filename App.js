import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';   // Base Foundation
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Real Navigator

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDeatilScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f01',},
        }}> 
        {/*<Stack.Navigator initialRouteName="MealsOverview"> // Change initial page to 2nd page */} 
          <Stack.Screen 
            name="MealsCategories" 
            component={CategoriesScreen} 
            options={{
              title: 'All Categories',
            }}

          /> 
          
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen} 
            // options={({ route }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };     
            // }}    
          />

          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            // options={{
            //   headerRight: ()=> {
            //     return <Button title="Tap me!"/>;
            //   }    
            // }}
                 
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
