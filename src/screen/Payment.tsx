import { StyleSheet, Text, View, Platform, Alert, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {StripeProvider, usePaymentSheet} from '@stripe/stripe-react-native';
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { RootStackPramList } from '../App';
import { API_URL, publishableKey } from '../data/constants';

type PaymentProps = NativeStackScreenProps<RootStackPramList, "Payment">

const Payment = ({route}: PaymentProps) => {
	const {product} = route.params
	const [ready, setReady] = useState(false)
	const {initPaymentSheet, presentPaymentSheet, loading} = usePaymentSheet()

	useEffect(() => {
		initializePaymentSheet()
	}, [])
	
	const initializePaymentSheet = async () => {
		const {paymentIntent} = await fetchPaymentSheetParams();
	
		const {error} = await initPaymentSheet({
			paymentIntentClientSecret: paymentIntent,
			merchantDisplayName: 'Example Inc.',
		})
	
		if (error) {
			Alert.alert(`Error code: ${error.code}`, error.message);
		} else {
		   setReady(true);
		}
	}

	const fetchPaymentSheetParams = async () => {
		const response = await fetch(`${API_URL}/payment-sheet`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				amount: product.price * 100
			})
		});
		return await response.json();
	}

	const buy = async () => {
		const {error} = await presentPaymentSheet();
		if (error) {
			Alert.alert(`Error code: ${error.code}`, error.message);
		} else {
			Alert.alert('Success', 'The payment was confirmed successfully');
			setReady(false);
		}
	}

    return (
        <View style={styles.container}>
			<StripeProvider publishableKey={publishableKey}>
				<Text style={styles.name}>{product.name}</Text>
				<Image style={styles.image} source={{uri: product.imageUrl}} />
				<Text style={styles.price}>${product.price.toLocaleString()}</Text>
				<Button title={'Buy'} onPress={buy} disabled={loading || !ready} />
			</StripeProvider>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 18,
		backgroundColor: '#FFFFFF',
	},
	image: {
		width: 300,
		height: 450,
		resizeMode: 'contain',
	},
	name: {
		marginBottom: 4,
		fontSize: 20,
		fontWeight: '500',
	},
	price: {
		fontSize: 18,
		color: '#000000',
		fontWeight: '600',
	},
})