import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type ProductProps = PropsWithChildren<{
    product: Product
}>

const ProductItem = ({product}: ProductProps) => {
    return (
        <View style={styles.container}>
            <Image 
            source={{uri: product.imageUrl}}
            style={styles.image}
            />
            <View>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>${product.price.toLocaleString()}</Text>
            </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        margin: 8,
        flexDirection: 'row',
    },
    image: {
        width: 90,
        height: 150,
        resizeMode: 'contain',
        marginRight: 12,
    },
    name: {
        marginBottom: 4,
        fontSize: 15,
        fontWeight: '500',
    },
    price: {
        fontSize: 18,
        marginRight: 4,
        fontWeight: '600',
        color: '#000000',
    }
})