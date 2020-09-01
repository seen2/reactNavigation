import * as React from "react";
import { Text, View, Image, SafeAreaView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function CustomHeader() {
  return (
    <View
      style={{
        // flex: 1,
        height: 40,
        width: "100%",
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={require("./src/assets/menu.png")}
          style={{ height: 40, width: 40, marginLeft: 5 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1.5 }}></View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
}

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <CustomHeader />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home!</Text>
        <Button title="Go to HomeDetails" />
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetails() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <CustomHeader />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home Screen Details!</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <CustomHeader />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Settings!</Text>
        <Button title="Go to SettingsDetails" />
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
