#!/bin/bash

# Deploy Build Script
# Installs dependencies, builds the site, and removes node_modules for deployment

set -e  # Exit on error

echo "🔧 Installing dependencies..."
pnpm install

echo "🏗️  Building site..."
pnpm build

echo "🗑️  Removing node_modules..."
rm -rf node_modules

echo "✅ Build complete! Ready to deploy the dist/ folder"
echo "📦 Upload the contents of dist/ to your server"

