/**
 * Capitalizes the given string.
 *
 * @param {string} val - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalize(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
