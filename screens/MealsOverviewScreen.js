import { useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from '../components/MealList/MealList';


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

  return <MealsList items={displayedMeals} />

}

export default MealsOverviewScreen;

