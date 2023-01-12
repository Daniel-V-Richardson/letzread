/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental:{
    appDir:true,
  },
  images: {
    domains: ["https://cloudinary.com","cdn.sanity.io"]
  }
}
