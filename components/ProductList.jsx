import { ScrollView, StyleSheet, Text, View } from 'react-native';

import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    return (
        <View style={styles.productList}>
            <ScrollView>
                {
                    products && products.length > 0 ?
                        products.map((product, idx) => (
                            <ProductItem key={product + idx} productName={product} />
                        ))
                        : <Text style={styles.productAlert}>There aren't products defined yet</Text>
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    productList: {
        flex: 1,
        width: '80%',
        marginTop: 16
    },
    productAlert: {
        color: 'grey',
        fontSize: 20
    }
});

export default ProductList