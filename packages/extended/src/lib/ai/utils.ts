/**
 * Generate a unique identifier with an optional prefix.
 * @param prefix - Optional prefix for the ID.
 * @returns A unique identifier string.
 */
export function generateUniqueId(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
