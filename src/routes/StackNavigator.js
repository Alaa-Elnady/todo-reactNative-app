import { PATHS } from "./Router";
import Home from "../pages/Home";
import TodoDetails from "../pages/TodoDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={PATHS.HOME}
        component={Home}
        options={{
          headerTitle: "Todo App",
        }}
      />
      <Stack.Screen name={PATHS.DETAILS} component={TodoDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
