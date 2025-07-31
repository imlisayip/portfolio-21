#!/bin/bash

# Build script for RedwoodJS deployment on Vercel
echo "Starting RedwoodJS build..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  yarn install
fi

# Build the web side
echo "Building web application..."
yarn rw build web

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build completed successfully!"
  echo "Output directory: web/dist"
else
  echo "Build failed!"
  exit 1
fi
