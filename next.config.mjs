/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',              // Redirect from the root URL
          destination: '/week-2',  
          permanent: true,          // Set true for permanent (301) or false for temporary (302)
        },
      ];
    },
  };
  
  export default nextConfig;