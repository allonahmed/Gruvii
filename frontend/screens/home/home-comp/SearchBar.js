import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import RNPickerSelect from "react-native-picker-select";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { updateFilter, updateQuery } from "../../../redux/reducers/reducers";

const SearchBar = () => {
  const state = useSelector((state) => state.reduxStore);
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();
  const placeholder = {
    label: "Sort by",
    value: null
  };

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search posts"
        onChangeText={(q) => dispatch(updateQuery(q))}
        value={state.query}
      />
      <RNPickerSelect
        onValueChange={(value) => dispatch(updateFilter(value))}
        useNativeAndroidPickerStyle={false}
        items={[
          { label: "Most Recent", value: "recent" },
          { label: "Most Likes", value: "likes" },
          { label: "Most Comments", value: "comments" }
        ]}
        Icon={() => {
          return <MaterialIcons name="sort" size={20} color={"#7a7a7a"} />;
        }}
        style={{
          ...pickerSelectStyles,
          placeholder: {
            color: "#7a7a7a",
            right: 10
          },
          iconContainer: {
            right: 10,
            top: 25
          }
        }}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    backgroundColor: "white",
    flexDirection: "row",
    shadowColor: "f8f8f8",
    shadowOpacity: 0.6,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -5 }
  },
  searchBar: {
    width: "70%",
    backgroundColor: "transparent",
    borderRadius: 6
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    position: "relative",
    width: "100%",
    height: 70,
    display: "flex",
    alignItems: "center",
    color: "#7a7a7a",
    paddingRight: 40 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "#7a7a7a",
    height: 70,
    display: "flex",
    alignItems: "center",
    paddingRight: 40 // to ensure the text is never behind the icon
  }
});

export default SearchBar;
