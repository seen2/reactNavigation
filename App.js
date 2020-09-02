import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

function CustomHeader({ isMenu, navigation }) {
  return (
    <View
      style={{
        // flex: 1,
        height: 40,
        width: "100%",
        flexDirection: "row",
        paddingTop: 5,
        marginBottom: 20,
      }}
    >
      {isMenu ? (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{ flex: 1, marginLeft: 15 }}
        >
          <Ionicons name="ios-menu" size={50} color="red" />
        </TouchableOpacity>
      ) : null}
      <View style={{ flex: 1.5 }}></View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
}

function HomeScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader isMenu={true} navigation={props.navigation} />
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
          color="tomato"
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
      <CustomHeader isMenu={true} navigation={props.navigation} />
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
          color="tomato"
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

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, paddingTop: 30, margin: 10 }}>
      <CustomHeader isMenu={true} navigation={navigation} />
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home"
        color="tomato"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "md-home";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MenuTab">
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
