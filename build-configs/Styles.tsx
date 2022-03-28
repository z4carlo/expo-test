import Red from "./red/theme";
import Blue from "./blue/theme";
import Constants from "expo-constants";

export const GetStyles = () => {
    console.log(Constants.manifest?.extra?.CONFIG);
    const buildConfig = Constants.manifest?.extra?.CONFIG;

    switch(buildConfig) {
        case "red":
            return Red;
        case "blue":
            return Blue;
        default:
            return {};
    }
}