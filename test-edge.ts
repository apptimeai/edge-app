#!/usr/bin/env bun

import { join } from "node:path";
import { stat } from "node:fs/promises";

// Simulate edge tenant with dynamic import
const PORT = process.env.PORT || 9000;
const EDGE_APP_PATH = "./.output/server/index.mjs";
const STATIC_DIR = "./.output/public";

type EdgeHandler = (request: Request) => Promise<Response> | Response;

async function loadEdgeApp(resolvedPath: string): Promise<EdgeHandler | null> {
  // Dynamically import the edge app module
  const module = await import(resolvedPath);

  if (typeof module.default !== "function") {
    console.error(`Edge app does not export a valid handler function`);
    return null;
  }

  return module.default as EdgeHandler;
}

async function serveStaticFile(pathname: string): Promise<Response | null> {
  try {
    const filePath = join(STATIC_DIR, pathname);
    const fileStats = await stat(filePath);
    
    if (!fileStats.isFile()) {
      return null;
    }

    const file = Bun.file(filePath);
    return new Response(file);
  } catch (error) {
    return null;
  }
}

// Load the edge handler on startup
const handler = await loadEdgeApp(EDGE_APP_PATH);

if (!handler) {
  console.error("Failed to load edge handler");
  process.exit(1);
}

const server = Bun.serve({
  port: PORT,
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    
    try {
      // Try to serve static files first
      const staticResponse = await serveStaticFile(url.pathname);
      if (staticResponse) {
        return staticResponse;
      }

      // Fall back to the edge handler for dynamic routes
      return await handler(request);
    } catch (error) {
      console.error("Edge handler error:", error);
      return new Response(
        error instanceof Error ? error.message : String(error),
        { status: 500 }
      );
    }
  },
});

console.log(`✓ Edge server running at http://localhost:${PORT}`);
