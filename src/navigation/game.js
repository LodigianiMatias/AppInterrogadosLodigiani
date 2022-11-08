import { Categories, EndGame, MainMenu, NextQuestion, Question, TryAgain } from "../screens";

import React from "react";
import { colors } from "../constants/themes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
            <Stack.Screen
                name="EndGame"
                component={EndGame}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="TryAgain"
                component={TryAgain}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="NextQuestion"
                component={NextQuestion}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    )
}

export default GameNavigator;
