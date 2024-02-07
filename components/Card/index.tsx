import * as React from "react";
import { styles } from "./styles";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import { Text, View } from "@/components/Themed";


type CardProp = {
  item:{}
};

const Card = (props: CardProp) => {
  // const colorScheme = useColorScheme();
  // const containerStyle = {
  //     ...styles.container,
  //     backgroundColor: props.active ? Colors[colorScheme ?? 'light'].primary : Colors[colorScheme ?? 'light'].secondary,
  // };

  return (
    <View style={styles.card}>
     <View>
        <Text>Helloss</Text>
     </View>
    </View>
  );
};

export default Card;
