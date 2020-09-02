import * as React from "react";
import { Text, View, Image, SafeAreaView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

function CustomHeader() {
  return (
    <View
      style={{
        // flex: 1,
        height: 40,
        width: "100%",
        flexDirection: "row",
        paddingTop: 5,
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={require("./src/assets/menu.png")}
          style={{ height: 40, width: 40, marginLeft: 15 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1.5 }}></View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
}

function HomeScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home!</Text>
        <Button
          title="Go to HomeDetails"
          onPress={() => props.navigation.navigate("HomeDetails")}
        />
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetails() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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

function SettingsScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Settings!</Text>
        <Button
          title="Go to SettingsDetails"
          onPress={() => props.navigation.navigate("SettingsDetails")}
        />
      </View>
    </SafeAreaView>
  );
}

function SettingsScreenDetails() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Settings Screen Details!</Text>
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();
const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} />
      <StackHome.Screen name="HomeDetails" component={HomeScreenDetails} />
    </StackHome.Navigator>
  );
}

const StackSettings = createStackNavigator();

function SettingsStack() {
  return (
    <StackSettings.Navigator initialRouteName="Settings">
      <StackSettings.Screen name="Settings" component={SettingsScreen} />
      <StackSettings.Screen
        name="SettingsDetails"
        component={SettingsScreenDetails}
      />
    </StackSettings.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
