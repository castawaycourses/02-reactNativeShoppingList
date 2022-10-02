import { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import ProductInput from './components/ProductInput';

export default function App() {
  
  const [productList, setProductList] = useState([]);

  const [newProduct, setNewProduct] = useState('')

  const newProductHandler = (newProductName) => {
    setNewProduct(newProductName);
  }


  return (
    <View style={styles.container}>
      {console.log('rendering app')}
      <ProductInput onAddProduct={newProductHandler} />
      <View>
        <Text style={styles.productItem}>{newProduct}</Text>
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
  productItem: {
    fontSize: 20,
  }
});
