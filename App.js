import { useState } from 'react';

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [productName, setProductName] = useState('');

  onChangeProduct = (value) => {
    console.log(value);
    setProductName(value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.productInput}>
        <TextInput 
          style={styles.productName}
          placeholder={"Introduzca un producto"}
          keyboardType={"default"}
          onChangeText={onChangeProduct}
          />
        <Button title="Add"/>
      </View>

      <View>
        <Text style={styles.productItem}>{productName}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  productInput: {
    flexDirection: 'row',     
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    width: '80%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#eef4ed',
  },
  productName: {
    flex: 4,
    height: 40,
    borderBottomWidth: 1,
    marginHorizontal: 10
  },
  addButton: {
    flex: 1
  },
  productItem: {
    fontSize: 20,
  }
});
