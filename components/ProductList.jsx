import { StyleSheet, Text, View } from 'react-native';

const ProductList = ({ products }) => {
    return (
        <View style={styles.productList}>
            {
                products && products.length > 0 ?
                    products.map((product, idx) => (
                        <Text key={product + idx} style={styles.productItem}>
                            {product}
                        </Text>
                    ))
                    : <Text style={styles.productAlert}>There aren't products defined yet</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    productList: {
        flex: 1
    },
    productItem: {
        fontSize: 20,
    },
    productAlert: {
        color: 'grey',
        fontSize: 20
    }
});

export default ProductList