/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Désactive l'optimisation d'image pour le mode exporté
  },
};

export default nextConfig;

