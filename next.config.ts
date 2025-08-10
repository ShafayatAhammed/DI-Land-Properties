import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias["@app"] = path.resolve(__dirname, "src/app");
    config.resolve.alias["@components"] = path.resolve(
      __dirname,
      "src/components"
    );
    config.resolve.alias["@constants"] = path.resolve(
      __dirname,
      "src/constants"
    );
    config.resolve.alias["@context"] = path.resolve(__dirname, "src/context");
    config.resolve.alias["@fonts"] = path.resolve(__dirname, "src/fonts");
    config.resolve.alias["@hooks"] = path.resolve(__dirname, "src/hooks");
    config.resolve.alias["@lib"] = path.resolve(__dirname, "src/lib");
    config.resolve.alias["@services"] = path.resolve(__dirname, "src/services");
    config.resolve.alias["@styles"] = path.resolve(__dirname, "src/styles");
    return config;
  },
};

export default nextConfig;
