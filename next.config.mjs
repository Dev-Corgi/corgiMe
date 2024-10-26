/** @type {import('next').NextConfig} */
const nextConfig = {
    // 기타 설정
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };

export default nextConfig;
