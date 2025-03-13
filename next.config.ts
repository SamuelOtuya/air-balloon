import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Prevents image optimization issues on static exports
  },
};

module.exports = nextConfig;

