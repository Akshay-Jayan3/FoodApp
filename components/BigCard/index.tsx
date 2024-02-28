import * as React from "react";
import { styles } from "./styles";
import { Text, View } from "@/components/Themed";
import { Image, ImageBackground, ImageSourcePropType } from "react-native";

type CardProp = {
  item: {
    text: string;
    backgroundImage?: ImageSourcePropType;
  };
};

const BigCard = (props: CardProp) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={props.item.backgroundImage} />
      <View style={styles.details}>
      <Text style={styles.dishName}>{props.item.text}</Text>
      <Text style={styles.price}>{props.item.text}</Text>
      <Text style={styles.cardText}>akshay jayan</Text>
      </View>
      
    </View>
  );
};

export default BigCard;
