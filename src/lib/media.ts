import fs from "fs";
import path from "path";

function toPublicPath(src: string): string {
  return path.join(process.cwd(), "public", src.replace(/^\/+/, ""));
}

/**
 * Checks whether a file referenced by a `/public`-relative path has actually
 * been dropped into the project yet. Lets <Visual> silently switch from a
 * placeholder frame to the real screenshot the moment a file with the
 * expected name appears — no code changes needed when real assets arrive.
 */
export function imageExists(src: string): boolean {
  try {
    const filePath = toPublicPath(src);
    return fs.existsSync(filePath) && fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

export interface ImageDimensions {
  width: number;
  height: number;
}

/**
 * Reads intrinsic width/height straight from a PNG/JPEG header, without
 * decoding the image. Used so <Visual> can size its frame to the image's
 * real aspect ratio instead of cropping it to a fixed preset.
 *
 * Deliberately hand-rolled rather than a library: the only formats our own
 * screenshot pipeline ever produces are PNG and JPEG, and general-purpose
 * image-dimension packages carry parsers (ICNS/JXL/HEIF, etc.) we don't need
 * and don't want the attack surface of.
 */
export function getImageDimensions(src: string): ImageDimensions | null {
  try {
    const buf = fs.readFileSync(toPublicPath(src));
    return readPng(buf) ?? readJpeg(buf);
  } catch {
    return null;
  }
}

function readPng(buf: Buffer): ImageDimensions | null {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (buf.length < 24 || !buf.subarray(0, 8).equals(signature)) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

const SOF_MARKERS = new Set([
  0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf,
]);

function readJpeg(buf: Buffer): ImageDimensions | null {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 9 < buf.length) {
    if (buf[offset] !== 0xff) {
      offset++;
      continue;
    }
    const marker = buf[offset + 1];
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) {
      offset += 2;
      continue;
    }
    const segmentLength = buf.readUInt16BE(offset + 2);
    if (SOF_MARKERS.has(marker)) {
      return {
        height: buf.readUInt16BE(offset + 5),
        width: buf.readUInt16BE(offset + 7),
      };
    }
    offset += 2 + segmentLength;
  }
  return null;
}
