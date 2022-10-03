import { Image, StyleSheet, Text, View } from "react-native"

const ProductItem = ({ productName }) => {
  return (
    <View style={styles.itemBody}>
        <View>
            <Image style={styles.itemImage} source={require('../assets/bigIcon.png')}/>
        </View>
        <View style={styles.itemName}>
            <Text style={styles.itemText}>{ productName }</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    itemBody: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 3,
        height: 90,
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#bdbdbd'
    },
    itemImage: {
        width: 60,
        height: 60,
        marginHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 30
    },
    itemName: {
        flex: 4
    },
    itemText: {
        fontSize: 20,
    }

})

export default ProductItem;