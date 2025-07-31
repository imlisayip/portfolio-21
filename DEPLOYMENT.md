# Deployment Guide for Lisa Yip Portfolio

## Vercel Deployment

This portfolio is configured for deployment on Vercel with the following setup:

### Configuration Files

1. **vercel.json** - Main Vercel configuration
2. **package.json** - Contains build scripts
3. **.nvmrc** - Specifies Node.js version (20.x)

### Build Process

The build process uses RedwoodJS commands:
- `yarn rw build web` - Builds the web application
- Output directory: `web/dist`

### Environment Variables

If you need to add environment variables for production:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add any required variables

### Troubleshooting

If you encounter build errors:

1. **Node.js Version**: Ensure Vercel is using Node.js 20.x
2. **Dependencies**: All dependencies should be in `package.json`
3. **Build Command**: Should be `yarn rw build web`
4. **Output Directory**: Should be `web/dist`

### Local Testing

To test the build locally:

```bash
# Switch to Node.js 20
nvm use 20

# Install dependencies
yarn install

# Build the project
yarn build

# Check the output
ls web/dist
```

### Deployment Commands

The following commands are available:

- `yarn build` - Build for production
- `yarn dev` - Start development server
- `yarn start` - Start production server
- `yarn test` - Run tests
- `yarn lint` - Run linting
- `yarn type-check` - Run TypeScript checks

### File Structure

```
├── vercel.json          # Vercel configuration
├── package.json         # Root package.json with build scripts
├── .nvmrc              # Node.js version specification
├── web/                # Frontend application
│   ├── package.json    # Web dependencies
│   └── dist/          # Build output (generated)
└── api/                # Backend API (if needed)
```

### Notes

- This is a static site deployment (frontend only)
- No database or API functions are currently used
- All assets are optimized for production
- SEO and accessibility features are included
