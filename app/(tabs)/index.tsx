import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Text, View } from "@/components/Themed";
import Button from "@/components/Button";
import { useColorScheme } from "@/components/useColorScheme";
import { FlatList } from "react-native";
import Colors from "@/constants/Colors";
import Card from "@/components/Card";
import BigCard from "@/components/BigCard";
import { useState } from "react";

const colorScheme = useColorScheme();
export default function Home() {
  const [role, setRole] = useState("Buyer");
  const data = [
    {
      id: "1",
      text: "Breakfast Good Deals",
      backgroundImage: require("../../assets/images/breakfast.png"),
    },
    {
      id: "2",
      text: "Lunch Deals",
      backgroundImage: require("../../assets/images/lunch.png"),
    },
    // { id: "3", text: "Item 3" },
  ];
  const data2 = [
    {
      id: "1",
      text: "Breakfast Good Deals",
      backgroundImage: require("../../assets/images/breakfast.jpg"),
    },
    {
      id: "2",
      text: "Lunch Deals",
      backgroundImage: require("../../assets/images/lunch.jpg"),
    },
    {
      id: "3",
      text: "Lunch Deals",
      backgroundImage: require("../../assets/images/lunch.jpg"),
    },
    {
      id: "4",
      text: "Lunch Deals",
      backgroundImage: require("../../assets/images/lunch.jpg"),
    },
    // { id: "3", text: "Item 3" },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        {role === "Buyer" ? (
          <View>
            <ImageBackground
              source={require("../../assets/images/intro2.jpg")}
              style={styles.introImage}
            >
              <Text style={styles.maintext}>
                {" "}
                Satisfy Your Cravings And Support Our Colleague Chefs
              </Text>
              <Text style={styles.subtext}>
                Find a diverse menu of homemade meals, snacks, and treats to
                suit your tastes and Support your talented colleagues who double
                as culinary artists.
              </Text>
              <View style={styles.overlay}></View>
            </ImageBackground>
            <View style={styles.top}>
              <View style={styles.mainTab}>
                <Button title="Offer Food" active={true} />{" "}
                <Button title="Find Food" active={false} />
              </View>
            </View>
            <View style={styles.middle}>
              <Text style={styles.heading}>Deals of the day</Text>
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
            <View style={styles.bottom}>
              <Text style={styles.heading}>Food of the Day </Text>
              <FlatList
                data={data2}
                renderItem={({ item }) => (
                  <Pressable>
                    <BigCard item={item} />
                  </Pressable>
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
                // contentContainerStyle={styles.container}
              />
            </View>
          </View>
        ) : (
          <View>
            <ImageBackground
              source={require("../../assets/images/intro2.jpg")}
              style={styles.introImage}
            >
              <Text style={styles.maintext}>
                {" "}
                Share the Joy of Good Food and be a Workplace Food Hero
              </Text>
              <Text style={styles.subtext}>
                Spread the love of homemade meals by offering your culinary
                creations to colleagues. It's a win-win for food enthusiasts and
                those seeking delicious options.
              </Text>
              <View style={styles.overlay}></View>
            </ImageBackground>
            <View style={styles.top}>
              <View style={styles.mainTab}>
                <Button title="Offer Food" active={true} />{" "}
                <Button title="Find Food" active={false} />
              </View>
            </View>
            <View style={styles.dashboard}>
              <Text style={styles.heading}>Dashboard</Text>
              <View style={styles.dashCardContainer}>
                <View style={styles.dashCard}>
                  <Text>Total Earnings</Text>
                </View>
                <View style={styles.dashCard}>
                  <Text>Total Orders</Text>
                </View>
              </View>
              <View style={styles.dashCardContainer}>
                <View style={styles.dashCard}>
                  <Text>Products</Text>
                </View>
                <View style={styles.dashCard}>
                  <Text>Customers</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    gap: 8,
    // padding: 16,
  },
  top: {
    justifyContent: "center",
    padding: 16,
  },
  mainTab: {
    flexDirection: "row",
    backgroundColor: Colors[colorScheme ?? "light"].secondary,
    borderRadius: 50,
  },
  middle: {
    padding: 8,
    // backgroundColor:"red"
  },
  bottom: {
    flex: 1,
    padding: 8,
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom:8
  },
  introImage: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
    alignItems: "center",
    paddingTop: 72,
    paddingHorizontal: 16,
  },
  maintext: {
    color: "#fff",
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    zIndex: 1,
    marginBottom: 16,
  },
  subtext: {
    color: "#fff",
    fontSize: 14,
    zIndex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  dashCardContainer: {
    flexDirection: "row",
    gap: 16,
  },
  dashCard: {
    width: "48%",
    aspectRatio: 1 / 1,
    // backgroundColor: "#FF0000",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
  },
  dashboard: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
