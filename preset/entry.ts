import "#nitro-internal-pollyfills";
import { useNitroApp } from "nitropack/runtime";

const nitroApp = useNitroApp();

// Default export for edge runtime
export default async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  return nitroApp.localFetch(url.pathname + url.search, {
    context: {},
    host: url.hostname,
    protocol: url.protocol,
    method: request.method,
    headers: request.headers,
    body: await request.body,
  });
};
