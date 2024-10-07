import path from "path";
import { Bundler } from "scss-bundle";
import { writeFile } from "fs/promises";
const projectDirectory = path.join("node_modules", "bootstrap", "scss");
const bundler = new Bundler(undefined, projectDirectory);
// Relative file path to project directory path.
const result = await bundler.bundle("bootstrap.scss");
await writeFile("src/assets/bootstrap.scss", result.bundledContent);
