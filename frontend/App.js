import { NavigationContainer, Na } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
//derp
import store from "./redux/store";
import HomeScreen from "./screens/home/HomeScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import CreatePost from "./screens/create/CreatePost";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
                size = 20;
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
                size = 20;
              } else if (route.name === "Create") {
                iconName = focused ? "add" : "add-outline";
                size = 35;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#13997c",
            tabBarInactiveTintColor: "gray"
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home ", headerShown: false }}
          />
          <Tab.Screen
            name="Create"
            component={CreatePost}
            options={{ title: "Create Post", headerShown: false }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: "Profile", headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
