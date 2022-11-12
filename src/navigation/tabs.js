import CreditsNavigator from "./credits";
import GameNavigator from "./game";
import { Ionicons } from "@expo/vector-icons"
import React from "react";
import { colors } from "../constants/themes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="MainMenuTab"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.background,
                },
                tabBarLabelStyle: {
                    fontFamily: 'Bungee',
                    color: colors.black,
                    fontSize: 12,
                    textShadowColor: colors.white, 
                    textShadowOffset: {width: 1, height: 1}, textShadowRadius: 1,
                }
            }}
        >
            <BottomTab.Screen
                name="MainMenuTab"
                component={GameNavigator}
                options= {{
                    title: 'Game',
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? 'game-controller' : 'game-controller-outline'}
                            size= {34}
                            color={colors.black}
                        />    
                    ),
                }}
            />
            <BottomTab.Screen
                name="HallofFameTab"
                component={CreditsNavigator}
                options= {{
                    title: 'Hall of fame',
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? 'file-tray-full' : 'file-tray-full-outline'}
                            size= {34}
                            color={colors.black}
                        />    
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

export default Tabs;