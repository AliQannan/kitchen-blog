/** @type {import('next').NextConfig} */
const nextConfig = {
  // إضافة هذا الجزء إلى ملف التكوين
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
