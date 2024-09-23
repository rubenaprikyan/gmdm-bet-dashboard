import webpack from 'webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        '__DEV__': dev,
      })
    );
    return config;
  },
};

export default nextConfig;
