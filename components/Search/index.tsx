import * as React from "react";
import { styles } from "./styles";
import { Text, View } from "@/components/Themed";
import { TextInput } from "react-native";

import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

type SearchProp = {
  //   title: string;
  //   active: boolean;
};

const Search = (props: SearchProp) => {
  const colorScheme = useColorScheme();
  //   const containerStyle = {
  //     ...styles.container,
  //     backgroundColor: props.active ? Colors[colorScheme ?? 'light'].primary :Colors[colorScheme ?? 'light'].secondary,
  //     fontWeight :props.active ? 600:300,

  //     color: props.active ? Colors[colorScheme ?? 'light'].primaryLabel :Colors[colorScheme ?? 'light'].terneryLabel,
  //   };

  return (
    <TextInput
      style={styles.container}
      underlineColorAndroid="transparent" 
      selectionColor="transparent"
      // value={value}
      placeholder="What are you looking for?"
      // onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Search;
