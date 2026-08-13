const fs = require('fs');
const inventory = JSON.parse(fs.readFileSync('./scratch_coding_links_inventory.json', 'utf8'));

const lines = [];
lines.push('# Complete Catalog: All Subjects, Sub-Topics & Coding Challenge Links\n');
lines.push(`> **Total Subjects Audited:** ${inventory.totalSubjects} | **Total Active Practice Challenges:** ${inventory.totalProblems}\n`);

inventory.subjects.forEach((sub, sIdx) => {
  lines.push(`\n## ${sIdx + 1}. ${sub.subjectName} (${sub.totalCodingProblems} Challenges)`);

  if (sub.totalCodingProblems === 0) {
    lines.push(`> *Non-coding theoretical / managerial module. No coding challenges assigned.*\n`);
    return;
  }

  sub.modules.forEach(m => {
    if (m.problems.length === 0) {
      lines.push(`\n### Module ${m.order}: ${m.topicTitle} *(0 challenges)*`);
      lines.push(`*Theoretical module / concepts review.*`);
    } else {
      lines.push(`\n### Module ${m.order}: ${m.topicTitle} *(${m.problems.length} challenges)*`);
      m.problems.forEach((p, pIdx) => {
        const platformBadge = p.platform ? `[${p.platform}]` : '[Practice]';
        const diffBadge = p.difficulty ? `\`${p.difficulty}\`` : '';
        const impBadge = p.placementImportance === 'Optional' ? '⚪ `Optional`' : p.placementImportance === 'Important' ? '🔹 `Important`' : '⭐ `Essential`';
        lines.push(`${pIdx + 1}. **[${p.title}](${p.url})** — ${platformBadge} ${diffBadge} ${impBadge}`);
      });
    }
  });
});

fs.writeFileSync('./scratch_coding_links_complete_catalog.md', lines.join('\n'));
console.log('Complete catalog written to ./scratch_coding_links_complete_catalog.md');
