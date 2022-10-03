import { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import ProductInput from './components/ProductInput';
import ProductList from './components/ProductList';

export default function App() {
  
  const [productList, setProductList] = useState([]);

  const newProductHandler = (newProductName) => {
    setProductList(() => ([...productList, newProductName]));
  }


  return (
    <View style={styles.container}>
      {console.log('rendering app')}
      <ProductInput onAddProduct={newProductHandler} />
      <ProductList products={productList}/>
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
  }
});
