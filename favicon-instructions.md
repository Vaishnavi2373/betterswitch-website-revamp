# How to Create favicon.ico

## Method 1: Online Tools (Recommended)

Visit one of these sites and upload your `public/favicon.svg`:

1. **RealFaviconGenerator** (Best quality):
   - Go to: https://realfavicongenerator.net/
   - Upload `public/favicon.svg`
   - Download favicon.ico
   - Place in `public/` folder

2. **Favicon Generator**:
   - Go to: https://www.favicon-generator.org/
   - Upload your logo image
   - Download favicon.ico

3. **ICO Converter**:
   - Go to: https://convertio.co/svg-png/
   - Convert SVG to PNG
   - Then use: https://convertio.co/png-ico/
   - Download favicon.ico

## Method 2: Command Line (If you have ImageMagick)

```bash
# Install ImageMagick first
# Windows: choco install imagemagick
# Mac: brew install imagemagick

# Convert SVG to ICO
magick public/favicon.svg -define icon:auto-resize=256,128,96,64,48,32,16 public/favicon.ico
```

## After Creating favicon.ico:

1. Place it in `public/` folder
2. Run: `pnpm run build`
3. Deploy the `dist/` folder

Your favicon.ico is now ready! 🎉
