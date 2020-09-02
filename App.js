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
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

//->
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
//1->2->1->
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
//1->2->1->1
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

//1->2->2->
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

//1->2->2->1
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

//1->2->1
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} />
      <StackHome.Screen name="HomeDetails" component={HomeScreenDetails} />
    </StackHome.Navigator>
  );
}

const StackSettings = createStackNavigator();

//1->2->2
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
//1->3
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, paddingTop: 30, margin: 10 }}>
      <CustomHeader isMenu={true} navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Notifications Screen</Text>
        <Button
          onPress={() => navigation.goBack()}
          title="Go back home"
          color="tomato"
        />
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

//1->2

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

//1->1
function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: "pink" }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingTop: 10,
            alignItems: "center",
          }}
        >
          <Ionicons name="ios-person-add" size={50} color="black" />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Ionicons name="ios-log-out" size={50} color="black" />
      </View>
    </SafeAreaView>
  );
}

//1

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MenuTab"
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => CustomDrawerContent(props)}
      >
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
