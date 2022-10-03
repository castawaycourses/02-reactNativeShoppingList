import { useState } from 'react';

import { Button, StyleSheet, TextInput, View } from 'react-native';


const ProductInput = ({onAddProduct}) => {

    const [productName, setProductName] = useState('');


    const onChangeProduct = (value) => {
        console.log(value);
        setProductName(value);
    }

    const addProductHandler = () => {
        if (productName !== '') {
            onAddProduct(productName);
            setProductName('');
        }
    }

    return (
        <View style={styles.productInput}>
            {console.log('rendering ProductInput')}
            <TextInput
                style={styles.productName}
                placeholder={"Introduzca un producto"}
                keyboardType={"default"}
                onChangeText={onChangeProduct}
                value={productName}
            />
            <Button title="Add" onPress={addProductHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
});

export default ProductInput;