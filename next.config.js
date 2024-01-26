/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "links.papareact.com", 
            },
            {
              protocol: "https",
              hostname: "images.unsplash.com", 
            },
          ],
       
},
    };
   


module.exports = nextConfig;
