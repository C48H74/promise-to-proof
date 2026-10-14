#!/usr/bin/env node
// Validates the skill folder: frontmatter, internal links, referenced paths, orphans, placeholders.
// Usage: node scripts/validate_skill.mjs [folder]   (no dependencies)
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, relative, resolve, sep } from 'node:path';

const root = resolve(process.argv[2] || '.');
const M = {
  en: { fm: 'frontmatter', noName: 'missing "name"', badName: 'name must be lowercase-hyphen and match the folder', noDesc: 'missing "description"', longDesc: 'description over 1024 characters', link: 'broken link', path: 'referenced path does not exist', orphan: 'orphan (not reachable from SKILL.md)', ok: 'OK', files: 'files', errors: 'errors', warnings: 'warnings', big: 'SKILL.md over 500 lines' },
  pt: { fm: 'frontmatter', noName: '"name" ausente', badName: 'name deve ser minúsculo com hífen e igual à pasta', noDesc: '"description" ausente', longDesc: 'description acima de 1024 caracteres', link: 'link quebrado', path: 'caminho citado não existe', orphan: 'órfão (não alcançável a partir do SKILL.md)', ok: 'OK', files: 'arquivos', errors: 'erros', warnings: 'avisos', big: 'SKILL.md com mais de 500 linhas' },
  es: { fm: 'frontmatter', noName: 'falta "name"', badName: 'name debe ser minúsculas con guiones e igual a la carpeta', noDesc: 'falta "description"', longDesc: 'description de más de 1024 caracteres', link: 'enlace roto', path: 'la ruta citada no existe', orphan: 'huérfano (no alcanzable desde SKILL.md)', ok: 'OK', files: 'archivos', errors: 'errores', warnings: 'avisos', big: 'SKILL.md de más de 500 líneas' },
};

const walk = (d) => readdirSync(d).flatMap((n) => {
  if (n.startsWith('.') || n === 'node_modules') return [];
  const p = join(d, n);
  return statSync(p).isDirectory() ? walk(p) : [p];
});
const files = walk(root);
const md = files.filter((f) => f.endsWith('.md'));
const rel = (f) => relative(root, f).split(sep).join('/');
const errors = [], warnings = [];

const skillPath = join(root, 'SKILL.md');
if (!existsSync(skillPath)) { console.error('SKILL.md not found'); process.exit(1); }
const skill = readFileSync(skillPath, 'utf8');
const fm = skill.match(/^---\r?\n([\s\S]*?)\r?\n---/);
const lang = ((fm && fm[1].match(/language:\s*"?(\w+)/)) || [, 'en'])[1];
const t = M[lang] || M.en;
if (!fm) errors.push(`SKILL.md: ${t.fm}`);
else {
  const name = (fm[1].match(/^name:\s*(.+)$/m) || [])[1]?.trim();
  const desc = (fm[1].match(/^description:\s*"([\s\S]*?)"\s*$/m) || fm[1].match(/^description:\s*(.+)$/m) || [])[1];
  if (!name) errors.push(`SKILL.md: ${t.noName}`);
  else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name) || name !== root.split(sep).pop()) warnings.push(`SKILL.md: ${t.badName} (${name})`);
  if (!desc) errors.push(`SKILL.md: ${t.noDesc}`);
  else if (desc.length > 1024) errors.push(`SKILL.md: ${t.longDesc} (${desc.length})`);
}
if (skill.split('\n').length > 500) warnings.push(`SKILL.md: ${t.big}`);

const edges = new Map(md.map((f) => [rel(f), new Set()]));
const exists = (p) => existsSync(p);
for (const f of md) {
  const text = readFileSync(f, 'utf8').replace(/```[\s\S]*?```/g, '');
  const dir = dirname(f);
  for (const m of text.matchAll(/\]\(([^)#\s]+?)(#[^)]*)?\)/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|computer:)/.test(href)) continue;
    const target = resolve(dir, href);
    if (!exists(target)) errors.push(`${rel(f)}: ${t.link} -> ${href}`);
    else edges.get(rel(f))?.add(rel(target));
  }
  for (const m of text.matchAll(/`((?:references|templates|checklists|examples|objections|scripts)\/[A-Za-z0-9._-]+\.(?:md|mjs))`/g)) {
    const target = join(root, m[1]);
    if (!exists(target)) errors.push(`${rel(f)}: ${t.path} -> ${m[1]}`);
    else edges.get(rel(f))?.add(m[1]);
  }
  for (const m of text.matchAll(/`((?:trends|reading-list|CHANGELOG)\.md)`/g)) {
    if (exists(join(root, m[1]))) edges.get(rel(f))?.add(m[1]);
  }
}
// reachability from SKILL.md
const seen = new Set(['SKILL.md']), q = ['SKILL.md'];
while (q.length) for (const n of edges.get(q.pop()) || []) if (!seen.has(n)) { seen.add(n); q.push(n); }
for (const f of md) {
  const r = rel(f);
  if (!seen.has(r) && !['CHANGELOG.md', 'README.md'].includes(r)) warnings.push(`${r}: ${t.orphan}`);
}

for (const w of warnings) console.log('WARN  ' + w);
for (const e of errors) console.log('ERROR ' + e);
console.log(`${files.length} ${t.files} · ${errors.length} ${t.errors} · ${warnings.length} ${t.warnings}`);
if (!errors.length && !warnings.length) console.log(t.ok);
process.exit(errors.length ? 1 : 0);
