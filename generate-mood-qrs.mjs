import QRCode from "qrcode";
import { mkdirSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const qrDir = join(__dirname, "qr-codes");
mkdirSync(qrDir, { recursive: true });

const MOODS = [
  "peekaboo",
  "shy",
  "puzzled",
  "giggle",
  "curious",
  "sneaky",
  "sleepy",
  "stubborn",
  "excited",
  "silly",
  "suspicious",
  "welcome",
];

const DOMAIN = "https://ustadapp.com";

for (const mood of MOODS) {
  const url = `${DOMAIN}/hello?mood=${mood}`;
  const filepath = join(qrDir, `${mood}.png`);
  await QRCode.toFile(filepath, url, {
    width: 300,
    margin: 2,
    color: { dark: "#145a3f", light: "#ffffff" },
  });
  console.log(`✓ ${mood}: ${url}`);
}

console.log(`\nAll ${MOODS.length} QR codes generated in ./qr-codes`);
