import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';

function PendingList({navigation}) {
  return (
    <View style={styles.container}>
      <Text>welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1,
    width:"100%",
    backgroundColor:'silver'}
});

export default PendingList;