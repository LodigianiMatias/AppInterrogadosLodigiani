import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, MainMenu, Question } from "../screens";
import { colors } from "../constants/themes";

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
    return (
        <Stack.Navigator
            initiaulRouteName="MainMenu"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.background,
                },
                headerTintColor: colors.black,
                headerTitleStyle: {
                    fontFamily: 'Lato-Bold',
                },
            }}
        >
            <Stack.Screen
                name="MainMenu"
                component={MainMenu}
                options={{
                    title: 'Menú',
                }}
            />
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                    headerShown: false,
                    title: 'Categorias',
                }}
            />
            <Stack.Screen
                name="Question"
                component={Question}
                options={({ route }) => ({
                    headerShown: false,
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    )
}

export default GameNavigator;
