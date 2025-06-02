#!/bin/bash

set -e

# Thư mục chứa project trên EC2
PROJECT_DIR=~/music-app
echo "Deploying project..."

cd $PROJECT_DIR || { echo "Project directory not found"; exit 1; }

echo "Pull latest code from git..."
git pull origin main

echo "Install dependencies..."
npm install

echo "Build project..."
npm run build

echo "Run migrations..."
npm run migrate

echo "Restart pm2 service..."
pm2 restart music-app-svc || pm2 start dist/server.js --name music-app-svc

echo "Deployment done!"
