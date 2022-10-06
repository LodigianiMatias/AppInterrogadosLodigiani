import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Credits } from "../screens";
import { colors } from "../constants/themes";

const Stack = createNativeStackNavigator();

const CreditsNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="Credits"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.background,
                },
                headerShown: false,
            }}

        >
            <Stack.Screen
                name="Credits"
                component={Credits}
            />
        </Stack.Navigator>
    )
}

export default CreditsNavigator;