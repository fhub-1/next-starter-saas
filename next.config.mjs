//  dont start the up when all env urls are wrong 
import createJiti from "jiti";
import { fileURLToPath } from "node:url";
const jiti = createJiti(fileURLToPath(import.meta.url));
 
// Import env here to validate during build. Using jiti we can import .ts files :)
jiti("./src/env/server.ts");
 
 

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true
    }
};

export default nextConfig;
