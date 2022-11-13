import { Credits } from "../screens";
import React from "react";
import { colors } from "../constants/themes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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