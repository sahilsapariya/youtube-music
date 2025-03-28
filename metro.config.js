const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add support for SVGs
config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

// Remove SVG from assetExts
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);

// Add SVG to sourceExts
config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"];

// Add NativeWind with global.css
module.exports = withNativeWind(config, { input: "./global.css" });
