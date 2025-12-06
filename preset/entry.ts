import "#nitro-internal-pollyfills";
import { useNitroApp } from "nitropack/runtime";

const nitroApp = useNitroApp();

// Export default handler function for edge runtime
export default async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);
  return nitroApp.localFetch(url.pathname + url.search, {
    context: {},
    host: url.hostname,
    protocol: url.protocol,
    method: request.method,
    headers: request.headers,
    body: undefined,
  });
}
