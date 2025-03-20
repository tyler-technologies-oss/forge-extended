/**
 * Compose the text content of all provided nodes into a single string.
 * @param nodes - The nodes to compose the text content of.
 * @returns The composed text content.
 */
export function composeSlottedTextContent(nodes: Node[]): string {
  return nodes
    .map(node => node.textContent)
    .join(' ')
    .trim();
}
