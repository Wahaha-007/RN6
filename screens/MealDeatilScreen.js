import { Text, View, StyleSheet } from 'react-native';

function MealDetailScreen( { route }){

  const mealId = route.params.mealId;  

  return (
    <View>
      <Text style={styles.menuText}>This is the Meal Details Screen ({mealId})</Text>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  menuText: {
    color: 'white',


  },
});
