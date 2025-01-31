const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['react-reveal'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      use: {
        loader: "url-loader",
      },
    });

    // Resolve react to a single version
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': require.resolve('react'),
      'react-dom': require.resolve('react-dom')
    };

    return config;
  },
};

export default nextConfig;
