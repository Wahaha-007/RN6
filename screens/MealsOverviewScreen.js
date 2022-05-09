import { useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from "../data/dummy-data";


// Any registered screen got 'navigation' and 'route' props

function MealsOverviewScreen({ route, navigation }) { 

  // -- 1. DATA Preparation -- //
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {  // True = keep
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // -- 2. Header Rendering --- //
  useLayoutEffect(()=> {
    // CATEGORIES is an "Array of Object", we need 'one Object' then 'Object.title'
    const categoryTitle = CATEGORIES.find((item)=>item.id === catId).title;  

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  // -- 3. Body Rendering -- //
  function renderMealItem(itemData) {
    const item = itemData.item;   // Helper Variable

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    };

    return (
      <MealItem {...mealItemProps} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={displayedMeals}
        keyExtractor={(item)=>item.id}
        renderItem={renderMealItem}
      />  
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});