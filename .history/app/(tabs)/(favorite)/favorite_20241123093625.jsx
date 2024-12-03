import React, { Fragment } from 'react'
import CustomFlatList from '../../../components/CustomFlatList';
import MenuBar from '../../../components/MenuBar';
import { useSelector } from 'react-redux';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const Favorite = () => {
  const { favorites } = useSelector((state) => state.meals);
  let FavoriteComponent;
  if (favorites.length > 0) {
    FavoriteComponent = <CustomFlatList selectedMeal={favorites} />;
  }else{
    FavoriteComponent = (<View>
      <Text style={styles.text}>No Favorites</Text>
      </View>);
  }
  return (
    <Fragment>
      <MenuBar/>
      {FavoriteComponent}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: Dimensions.get("window").fontScale * 30,
  },
});
export default Favorite