import { StyleSheet, Text, View } from 'react-native';

import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    return (
        <View style={styles.productList}>
            {
                products && products.length > 0 ?
                    products.map((product, idx) => (
                        <ProductItem key={product + idx} productName={product} />
                    ))
                    : <Text style={styles.productAlert}>There aren't products defined yet</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    productList: {
        flex: 1,
        marginTop: 16
    },
    productAlert: {
        color: 'grey',
        fontSize: 20
    }
});

export default ProductList