import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import Button from "@/components/Button";
import { useColorScheme } from "@/components/useColorScheme";
import { FlatList } from "react-native";
import Colors from "@/constants/Colors";
import Card from "@/components/Card";
import BigCard from "@/components/BigCard";

const colorScheme = useColorScheme();
export default function Home() {
  const data = [
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
    // ... add more items as needed
  ];
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.mainTab}>
          <Button title="Offer Food" active={true} />{" "}
          <Button title="Find Food" active={false} />
        </View>
      </View>
      <View style={styles.middle}>
        <Text>Deals of the day</Text>
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Pressable>
                <Card item={item} />
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: 20 }}
            horizontal
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text>Today's Recipes </Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable>
              <BigCard item={item} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: 10 }}

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    gap: 16,
    padding: 16,
  },
  top: {
    flex: 0.1,
    justifyContent: "center",
    padding: 8,
  },
  mainTab: {
    flexDirection: "row",
    backgroundColor: Colors[colorScheme ?? "light"].secondary,
    borderRadius: 50,
  },
  middle: {
    flex: 0.2,
    padding: 8,
 
  },
  bottom: {
    flex: 1,
    backgroundColor: "pink",
    padding: 8,
    // borderWidth: 5,
    // borderRadius: 20,
  },
});
