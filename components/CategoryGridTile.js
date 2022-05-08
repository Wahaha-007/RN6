import { Text, View, Pressable, StyleSheet, Platform } from 'react-native';

// -- THIS IS THE CUSTOM BUTTON -- //

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable 
        android_ripple={{color: '#ccc'}}  // For android
        style={({pressed})=>[               // For iOS
          styles.button,
          pressed ? styles.buttonPressed : null
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer,  {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>    
      </Pressable>
    </View>
  )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 100, 
    borderRadius: 8,

    // To use 'Shadow' ==> MUST HAVE background color first
    backgroundColor: 'white', 
    
    elevation: 4, // Shadow for Andriod
    shadowColor: 'black', // Shadow for iOS
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 8,

    // For animation, In iOS can cause shodow to disappear
    overflow: Platform.OS === 'android' ? 'hidden':'visible', 
  },

  button : {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title : {
    fontWeight: 'bold',
    fontSize: 18,
  },
});