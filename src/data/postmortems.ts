// Each file in src/content/postmortems/ is one card.
// Files with `draft: true` show only in `npm run dev`, never on the live site.
export interface Postmortem {
  id: string;
  title: string;
  impact: string;
  fix: string;
  since: string;
  draft?: boolean;
}

const files = import.meta.glob<{ frontmatter: Postmortem }>('../content/postmortems/*.md', { eager: true });

export const postmortems = Object.values(files)
  .map((f) => f.frontmatter)
  .filter((p) => import.meta.env.DEV || !p.draft)
  .sort((a, b) => a.id.localeCompare(b.id));
