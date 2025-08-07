import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a string to kebab-case.
 *
 * Kebab case is lowercase words separated by hyphens.
 * Example: "Hello World" -> "hello-world"
 *
 * @param str - The input string to convert.
 * @returns The kebab-cased string.
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // handle camelCase
    .replace(/[\s_\/]+/g, "-") // spaces, underscores, and slashes to hyphens
    .toLowerCase();
}

/**
 * Converts a string to Title Case.
 *
 * - Hyphens and multiple spaces are treated as word separators.
 * - Each word's first letter is capitalized; the rest are lowercased.
 *
 * Examples:
 *   toTitleCase("hello-world")         -> "Hello World"
 *   toTitleCase("multi--word_string")  -> "Multi Word String"
 *   toTitleCase("  messy-input  text") -> "Messy Input Text"
 *
 * @param {string} str - The input string to convert.
 * @returns {string} - The Title Case version of the string.
 */
export function toTitleCase(str: string) {
  return str
    .replace(/[-_]+/g, " ") // convert hyphens and underscores to spaces
    .toLowerCase()
    .trim()
    .split(/\s+/) // split on one or more spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Converts a timestamp (ISO 8601, UNIX seconds, or UNIX ms) to a human-readable creation time.
 *
 * Rules:
 * - < 1 hour   → "Created X minutes ago"
 * - < 24 hours → "Created X hours ago"
 * - < 7 days   → "Created X days ago"
 * - ≥ 7 days   → "Created DD/MM/YYYY"
 *
 * @param {string|number} input - The timestamp (ISO string, UNIX in seconds or ms).
 * @returns {string} - A human-readable description of the creation time.
 */
export function formatCreationTime(input: string) {
  let timestamp;

  // Handle input types
  if (typeof input === "string") {
    const parsed = Date.parse(input);
    if (isNaN(parsed)) throw new Error("Invalid ISO 8601 date string.");
    timestamp = parsed;
  } else if (typeof input === "number") {
    timestamp = input > 1e12 ? input : input * 1000; // millis vs seconds
  } else {
    throw new Error("Input must be a string or number.");
  }

  const now = Date.now();
  const diffMs = now - timestamp;

  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    return `Identified ${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `Identified ${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (days < 7) {
    return `Identified ${days} day${days !== 1 ? "s" : ""} ago`;
  } else {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `Identified on ${day}/${month}/${year}`;
  }
}
