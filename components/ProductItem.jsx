import { StyleSheet, Text, View } from "react-native"

const ProductItem = ({ productName }) => {
  return (
    <View style={styles.itemBody}>
        <View>
            <Text>
                Logo
            </Text>
        </View>
        <View>
            <Text>{ productName }</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    itemBody: {
        flexDirection: 'row',
        height: 90,
        width: '80%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#bdbdbd'
    }
})

export default ProductItem;