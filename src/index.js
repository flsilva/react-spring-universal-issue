import { AppRegistry, Platform } from "react-native";
import App from "./App";

AppRegistry.registerComponent("IssueTemplate", () => App);
if (Platform.OS === "web") {
  AppRegistry.runApplication("IssueTemplate", {
    rootTag: document.getElementById("root")
  });
}
