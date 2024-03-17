/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'freepik.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
