import store from "./src/Redux/store";
import { Provider } from "react-redux";
import Router from "./src/routes/Router";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
