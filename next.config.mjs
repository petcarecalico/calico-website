// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // disable next/image optimization
  },
};

export default nextConfig;
