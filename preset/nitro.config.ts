import type { NitroPreset } from "nitropack";
import { fileURLToPath } from "node:url";

const edge: NitroPreset = {
  extends: "node-server",
  entry: fileURLToPath(new URL("./entry", import.meta.url)),
};

export default edge;