#!/bin/bash

echo "🔍 Performance Check Script"
echo "=========================="

# Check bundle size
echo "📦 Checking bundle size..."
if [ -d "web/dist" ]; then
    echo "JavaScript files:"
    find web/dist -name "*.js" -exec ls -lh {} \;
    echo ""
    echo "CSS files:"
    find web/dist -name "*.css" -exec ls -lh {} \;
    echo ""
    echo "Image files:"
    find web/dist -name "*.png" -o -name "*.jpg" -o -name "*.webp" | head -10
else
    echo "❌ No dist folder found. Run 'yarn rw build web' first."
fi

# Check for large files
echo ""
echo "📊 Large files (>100KB):"
find web/dist -type f -size +100k 2>/dev/null | head -10

# Check for duplicate files
echo ""
echo "🔄 Checking for potential duplicates..."
find web/dist -name "*.js" | xargs basename | sort | uniq -d

echo ""
echo "✅ Performance check complete!"
