import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.BoxTitle}>
            <Text style={styles.texTitle}>ONBITHEALTH...</Text>
            <Text>04/03/2024...</Text>
            <Text>Aula 02 parte 3 </Text>
        </View>
    );
}