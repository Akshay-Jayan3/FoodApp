import * as React from 'react';
import { styles } from './styles';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Text, View } from '@/components/Themed';
import {
    TouchableOpacity,
} from "react-native";

type ButttonProp = {
    title: string;
    active: boolean;
};

const Button = (props: ButttonProp) => {
    const colorScheme = useColorScheme();
    const containerStyle = {
        ...styles.container,
        backgroundColor: props.active ? Colors[colorScheme ?? 'light'].primary : Colors[colorScheme ?? 'light'].secondary,
    };

    return (
            <TouchableOpacity style={containerStyle}>
                <Text style={{ color: props.active ? Colors[colorScheme ?? 'light'].primaryLabel : Colors[colorScheme ?? 'light'].terneryLabel, fontWeight: props.active ? "600" : "normal" }}>{props.title}</Text>
            </TouchableOpacity>
    );
};


export default Button;
