import { merge } from "lodash"

const devConfig = {
    expo : {
        extra: {
            CONFIG: "dev",
        }
    }
}

module.exports = ({ config }) => {
    const buildConfig = process.env.BUILDCONFIG ? process.env.BUILDCONFIG : "No Config Set";
    const env = process.env.ENV ? process.env.ENV : "dev";

    let customConfig = { expo: {} };

    try {
        customConfig = require(`./build-configs/${buildConfig}/config`);
    } catch (e) {
        console.log("Custom Config Failed");
    }

    // if (env === "dev") {
    //     customConfig = merge(customConfig, devConfig);
    // }

    return { expo: merge( {}, config, customConfig.expo ) };
}