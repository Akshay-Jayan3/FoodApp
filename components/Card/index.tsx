import * as React from "react";
import { styles } from "./styles";
import { useColorScheme } from "@/components/useColorScheme";

import { Text, View } from "@/components/Themed";
import { Image, ImageBackground, ImageSourcePropType } from "react-native";


type CardProp = {
  item: {
    text: string;
    backgroundImage?: ImageSourcePropType;
  };
};

const Card = (props: CardProp) => {
  // const colorScheme = useColorScheme();
  // const containerStyle = {
  //     ...styles.container,
  //     backgroundColor: props.active ? Colors[colorScheme ?? 'light'].primary : Colors[colorScheme ?? 'light'].secondary,
  // };

  return (
    <View style={styles.card}>
      <View style={styles.textWrapper}>
        <Text style={styles.maintext}>{props.item.text}</Text>
        <Text style={styles.subtext}> 50% Discount</Text>
      </View>
      <Image source={props.item.backgroundImage}
         style={styles.backgroundImage}/>
      {/* <ImageBackground
        source={props.item.backgroundImage} // Replace with the actual path to your image
        style={styles.backgroundImage}
      >
        

       
      </ImageBackground> */}
    </View>
  );
};

export default Card;
