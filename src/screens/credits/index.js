import { Text, View } from "react-native";

import { LocationSelector } from "../../components";
import React from "react";
import { styles } from "./styles";
import { useState } from "react";

const Credits = ({navigation}) => {

    const [location, setLocation] = useState("")
    const onHandlerLocation = (location) => {
        setLocation(location);
    }

    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Gracias por jugar mi juego!</Text>
            <LocationSelector onLocation={onHandlerLocation}/>
        </View>
    )
}

export default Credits;