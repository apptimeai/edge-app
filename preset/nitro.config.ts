import type { NitroPreset } from "nitropack";
import { fileURLToPath } from "node:url";

const edge: NitroPreset = {
  extends: "base-worker",
  entry: fileURLToPath(new URL("./entry", import.meta.url)),
  rollupConfig: {
    output: {
      format: "esm",
      exports: "default",
    },
  },
};

export default edge;