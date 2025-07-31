#!/bin/bash

# Performance check script for Lisa Yip Portfolio
echo "🔍 Running performance checks..."

# Check if Lighthouse CI is installed
if ! command -v lhci &> /dev/null; then
    echo "Installing Lighthouse CI..."
    npm install -g @lhci/cli
fi

# Check bundle size
echo "📦 Checking bundle size..."
if [ -d "web/dist" ]; then
    echo "Bundle size:"
    du -sh web/dist/*
else
    echo "No dist folder found. Run 'yarn build' first."
fi

# Check image sizes
echo "🖼️  Checking image sizes..."
if [ -d "web/public/images" ]; then
    echo "Image sizes:"
    du -sh web/public/images/* | sort -hr
    echo ""
    echo "Total images size:"
    du -sh web/public/images/
else
    echo "No images folder found."
fi

# Check for large files
echo "📁 Checking for large files..."
find web/public -type f -size +1M -exec ls -lh {} \;

# Check dependencies
echo "📋 Checking dependencies..."
echo "Total dependencies:"
npm list --depth=0 2>/dev/null | wc -l

echo ""
echo "✅ Performance check complete!"
echo ""
echo "Next steps:"
echo "1. Run 'yarn build' to generate bundle"
echo "2. Run 'yarn analyze' to analyze bundle size"
echo "3. Run Lighthouse audit: npx lighthouse https://lisayip.com"
echo "4. Optimize images: ./scripts/optimize-images.sh" 