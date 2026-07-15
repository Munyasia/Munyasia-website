import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const projectsDir = path.join(publicDir, "projects");

const projects = [
  { slug: "lirason", title: "Lirason Investments" },
  { slug: "jadi", title: "Jadi" },
  { slug: "heardback", title: "HeardBack" },
  { slug: "beliways", title: "Beliways Adventures" },
  { slug: "maahir", title: "Maahir Graphics" },
  { slug: "panama", title: "Panama General Agencies" },
];

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function projectSvg(title, width, height) {
  const label = escapeXml(title);
  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3f3f46" />
      <stop offset="100%" stop-color="#18181b" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <text
    x="50%"
    y="50%"
    dominant-baseline="middle"
    text-anchor="middle"
    font-family="Arial, Helvetica, sans-serif"
    font-size="56"
    font-weight="600"
    fill="#e4e4e7"
  >${label}</text>
</svg>`;
}

function photoSvg(width, height) {
  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#52525b" />
      <stop offset="100%" stop-color="#27272a" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <text
    x="50%"
    y="50%"
    dominant-baseline="middle"
    text-anchor="middle"
    font-family="Arial, Helvetica, sans-serif"
    font-size="40"
    font-weight="600"
    fill="#e4e4e7"
  >Photo</text>
</svg>`;
}

async function main() {
  await mkdir(projectsDir, { recursive: true });

  for (const project of projects) {
    const svg = projectSvg(project.title, 1600, 1000);
    const outPath = path.join(projectsDir, `${project.slug}.jpg`);
    await sharp(Buffer.from(svg)).jpeg({ quality: 82 }).toFile(outPath);
    console.log(`wrote ${outPath}`);
  }

  const photoSvgContent = photoSvg(800, 1000);
  const photoPath = path.join(publicDir, "photo-placeholder.jpg");
  await sharp(Buffer.from(photoSvgContent))
    .jpeg({ quality: 82 })
    .toFile(photoPath);
  console.log(`wrote ${photoPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
