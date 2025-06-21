import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import CompletedTasks from "../pages/CompletedTasks";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

export const PATHS = {
  HOME: "Home Page",
  COMPLETED_TASKS: "Completed Tasks",
  DETAILS: "Todo Details",
};

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === PATHS.HOME) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === PATHS.COMPLETED_TASKS) {
              iconName = focused
                ? "checkmark-circle"
                : "checkmark-circle-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            // marginBottom: 4,
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "#8E8E93",

          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            borderTopWidth: 1,
            borderTopColor: "#E5E5EA",
          },

          headerShown: false,
        })}
      >
        <Tab.Screen
          name={PATHS.HOME}
          component={StackNavigator}
          options={{
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name={PATHS.COMPLETED_TASKS}
          component={CompletedTasks}
          options={{
            tabBarLabel: "Completed",
            headerBackTitle: "Back",
            headerShown: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
