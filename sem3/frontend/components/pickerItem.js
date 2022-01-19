import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppText from './AppText';
import Icon from "./Icon";

const PickerItem = ({ onpress, label, name, color }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onpress}>
      {/* <Icon>{name}</Icon> */}
      <Icon  name={name} color='black' size={40} backgroundColor={color}/>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
     width: "33%",
  },
  text: {
    textAlign: "center",
  },
});

export default PickerItem;