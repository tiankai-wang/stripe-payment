import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import Home from './screen/Home'
import Payment from './screen/Payment'

export type RootStackPramList = {
    Home: undefined;
    Payment: {product: Product}
}

const Stack = createNativeStackNavigator<RootStackPramList>()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "All Products"
                }}
                />
                <Stack.Screen
                name="Payment"
                component={Payment}
                options={{
                    title: "Payment Page"
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App