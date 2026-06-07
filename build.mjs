import { execSync } from 'child_process';
import { existsSync, mkdirSync, cpSync, rmSync } from 'fs';
import { join } from 'path';

const root = process.cwd();

console.log('>>> Building debut_blog...');
execSync('npm install', { cwd: join(root, 'blogs/debut_blog'), stdio: 'inherit' });
execSync('npm run build', { cwd: join(root, 'blogs/debut_blog'), stdio: 'inherit' });

console.log('>>> Copying blog build to public/blogs/debut_blog/...');
const destDir = join(root, 'public/blogs/debut_blog');
if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}
cpSync(join(root, 'blogs/debut_blog/dist'), destDir, { recursive: true });

console.log('>>> Building main site...');
execSync('npm run build:main', { stdio: 'inherit' });

console.log('>>> Cleaning up temp blog files from public/...');
rmSync(join(root, 'public/blogs/debut_blog'), { recursive: true, force: true });

console.log('>>> Done! Output is in dist/');
