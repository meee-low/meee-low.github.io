interface MarkdownStyling {
  bold: string;
  italic: string;
}

export function makeMarkdownFormatter(
  styling: MarkdownStyling,
): (s: string) => string {
  return (s: string) =>
    sanitizeInnerHTML(s)
      .replace("\\*", "&#42")
      .replace(
        /(?<!\\)\*\*(.+?)(?<!\\)\*\*/g,
        `<strong class="${styling.bold}">$1</strong>`,
      )
      .replace(
        /(?<!\\)\*(.+?)(?<!\\)\*/g,
        `<em class="${styling.italic}">$1</em>`,
      );
}

/// WARN: should only be used for inner html, as it's not sufficient for proper XSS sanitization for other uses.
export function sanitizeInnerHTML(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export function formatBasicMarkdown(input: string): string {
  const basicFormatter = makeMarkdownFormatter({
    bold: "font-semibold",
    italic: "italic",
  });
  return basicFormatter(input);
}
