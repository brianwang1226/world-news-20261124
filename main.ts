import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Copy the newspaper front page that sums up Tuesday 24 November 2026
// (Nvidia reinstates Jensen Huang as CEO; the world court finds Myanmar
// committed genocide against the Rohingya; Russia warned over a reported
// nuclear satellite; Ukraine confirms a drone hit on a Russian warship
// off Libya; tankers ablaze after mine strikes in the Strait of Hormuz;
// COP31 ends with no deal) to the output the contest reads.
// The image is 1024x1024 JPEG bytes named entry.png, under the 1 MiB cap.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL("./entry.png", import.meta.url),
  join(outDir, "entry.png"),
);
