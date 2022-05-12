import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id)=> {},
  removeFavorite: (id) => {},
});


const FavoritesContextProvider = ({children}) => {

  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds(prev=>[...prev,id]);
  }

  const removeFavorite =(id) => {
    setFavoriteMealIds(prev=>prev.filter(mealId=>mealId !== id))
  }

  const value = {   // Just Temp Var to pack thing up
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
 
export default FavoritesContextProvider;