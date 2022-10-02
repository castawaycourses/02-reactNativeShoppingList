import { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import ProductInput from './components/ProductInput';

export default function App() {
  
  const [productList, setProductList] = useState([]);

  const newProductHandler = (newProductName) => {
    setProductList(() => ([...productList, newProductName]));
  }


  return (
    <View style={styles.container}>
      {console.log('rendering app')}
      <ProductInput onAddProduct={newProductHandler} />
      <View>
        {
          productList.map((product) => (
            <Text key={product} style={styles.productItem}>
              {product}
            </Text>
          ))
        }
        
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
