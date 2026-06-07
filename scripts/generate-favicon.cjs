const fs = require('fs');
const path = require('path');

// Simple SVG to ICO converter
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <rect x="8" y="8" width="240" height="240" rx="44" fill="#E27533"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="white" font-family="Arial,sans-serif" font-weight="bold" font-size="180">b</text>
</svg>`;

// ICO file structure (simplified 16x16 and 32x32)
function createSimpleICO() {
  const sizes = [16, 32];
  const images = [];

  for (const size of sizes) {
    // Create a simple PNG-like bitmap (this is a placeholder)
    // In production, use sharp or jimp to properly convert SVG to PNG then ICO
    const bytesPerRow = Math.ceil(size * 4 / 4) * 4;
    const pixelDataSize = bytesPerRow * size;
    const header = 40; // BITMAPINFOHEADER size
    const totalSize = header + pixelDataSize;

    const buffer = Buffer.alloc(totalSize);

    // BITMAPINFOHEADER
    buffer.writeUInt32LE(totalSize, 0); // biSize
    buffer.writeUInt32LE(size, 4);      // biWidth
    buffer.writeUInt32_LE(size * 2, 8);  // biHeight (doubled for ICO)
    buffer.writeUInt16LE(1, 12);        // biPlanes
    buffer.writeUInt16LE(32, 14);       // biBitCount
    buffer.writeUInt32LE(0, 16);        // biCompression (BI_RGB)
    buffer.writeUInt32LE(pixelDataSize, 20); // biSizeImage
    buffer.writeInt32LE(0, 24);         // biXPelsPerMeter
    buffer.writeInt32_LE(0, 28);         // biYPelsPerMeter
    buffer.writeUInt32LE(0, 32);        // biClrUsed
    buffer.writeUInt32LE(0, 36);        // biClrImportant

    images.push({ size, buffer });
  }

  // ICO header
  const iconDirCount = images.length;
  const icoHeader = Buffer.alloc(6 + 16 * iconDirCount);
  icoHeader.writeUInt16LE(0, 0);        // Reserved
  icoHeader.writeUInt16LE(1, 2);        // Type: 1 = ICO
  icoHeader.writeUInt16LE(iconDirCount, 4); // Number of images

  let offset = 6 + 16 * iconDirCount;
  let dirOffset = 6;

  // Write directory entries
  for (const img of images) {
    icoHeader.writeUInt8(img.size, dirOffset);     // Width
    icoHeader.writeUInt8(img.size, dirOffset + 1);   // Height
    icoHeader.writeUInt8(0, dirOffset + 2);          // Color palette
    icoHeader.writeUInt8(0, dirOffset + 3);          // Reserved
    icoHeader.writeUInt16LE(1, dirOffset + 4);        // Color planes
    icoHeader.writeUInt16LE(32, dirOffset + 6);       // Bits per pixel
    icoHeader.writeUInt32LE(img.buffer.length, dirOffset + 8); // Size
    icoHeader.writeUInt32LE(offset, dirOffset + 12);  // Offset

    offset += img.buffer.length;
    dirOffset += 16;
  }

  // Combine everything
  return Buffer.concat([icoHeader, ...images.map(img => img.buffer)]);
}

try {
  const icoBuffer = createSimpleICO();
  const outputPath = path.resolve(__dirname, '../public/favicon.ico');
  fs.writeFileSync(outputPath, icoBuffer);
  console.log('✓ Created favicon.ico');
  console.log('Note: This is a basic placeholder. For best quality, use an online converter:');
  console.log('  https://www.favicon-generator.org/');
  console.log('  https://realfavicongenerator.net/');
} catch (error) {
  console.error('Error creating favicon.ico:', error.message);
}
