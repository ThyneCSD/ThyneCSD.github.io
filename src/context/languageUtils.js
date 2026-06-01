/**
 * Resolves a value that can be either a plain string or a { nl, en } object.
 * Falls back to nl, then en, then empty string.
 */
export function getTranslated(value, lang) {
  if (!value) return "";
  if (typeof value === "object") {
    return value[lang] || value["nl"] || value["en"] || "";
  }
  return value;
}
