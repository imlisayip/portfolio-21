#!/bin/bash

# Image optimization script for Lisa Yip Portfolio
echo "Starting image optimization..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Please install it first:"
    echo "brew install imagemagick"
    exit 1
fi

# Create optimized images directory
mkdir -p web/public/images/optimized

# Optimize PNG images
for file in web/public/images/*.png; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "Optimizing $filename..."

        # Create WebP version
        convert "$file" -quality 85 "web/public/images/optimized/${filename%.*}.webp"

        # Create optimized PNG
        convert "$file" -strip -quality 85 "web/public/images/optimized/$filename"

        # Show size comparison
        original_size=$(du -h "$file" | cut -f1)
        optimized_size=$(du -h "web/public/images/optimized/$filename" | cut -f1)
        webp_size=$(du -h "web/public/images/optimized/${filename%.*}.webp" | cut -f1)

        echo "  Original: $original_size"
        echo "  Optimized PNG: $optimized_size"
        echo "  WebP: $webp_size"
        echo ""
    fi
done

echo "Image optimization complete!"
echo "Optimized images are in web/public/images/optimized/"
echo ""
echo "Next steps:"
echo "1. Update image imports to use optimized versions"
echo "2. Add WebP support with fallback to PNG"
echo "3. Consider using next/image or similar for automatic optimization"
