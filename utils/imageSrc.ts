export function imageSrc(path: string): string {
  if (process.env.NODE_ENV === "development") {
    // Append timestamp to prevent caching in dev
    return `${path}?v=${Date.now()}`;
  }
  return path;
}
