import { Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";
import { useState } from "react";

const Credits = () => {
    
    return (
        <View style={styles.content}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Lista de ganadores</Text>
            </View>
        </View>
    )
}

export default Credits;