// 日期统一显示成 "Jul 20, 2026"。
// frontmatter 里的 2026-07-20 会被解析成 UTC 零点，所以显示也必须按 UTC，否则美西时区会退回前一天
export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
}
