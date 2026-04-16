#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment to Hostinger VPS..."

# Pull latest code
echo "📥 Pulling latest code..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Build application
echo "🔨 Building application..."
npm run build

# Restart PM2 application
echo "🔄 Restarting application with PM2..."
pm2 restart ecosystem.config.js --update-env

echo "✅ Deployment complete!"
echo "👀 View logs with: pm2 logs legallens-app"
