/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@proposalflow/shared-config', '@proposalflow/shared-types', '@proposalflow/shared-schemas']
};

export default nextConfig;
