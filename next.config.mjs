/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

    async redirects() {
      return [
        {
          source: '/',
          destination: '/quotes-add',
          permanent: true,
        },
      ]
    },
  
};



export default nextConfig;

