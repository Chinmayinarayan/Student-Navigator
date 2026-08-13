const fs = require('fs');
const inventory = JSON.parse(fs.readFileSync('./scratch_coding_links_inventory.json', 'utf8'));

const lines = [];
lines.push('# Coding Challenge Links Inventory\n');
lines.push(`Total Subjects Audited: ${inventory.totalSubjects} | Total Coding Challenges: ${inventory.totalProblems}\n`);

inventory.subjects.forEach((sub, sIdx) => {
  lines.push(`\n## ${sIdx + 1}. ${sub.subjectName} (${sub.totalCodingProblems} Challenges)`);

  if (sub.totalCodingProblems === 0) {
    lines.push(`> *No coding challenges required for this subject (Theoretical / Managerial).*`);
    return;
  }

  sub.modules.forEach(m => {
    if (m.problems.length === 0) {
      lines.push(`- **Module ${m.order}: ${m.topicTitle}** — *No coding challenges*`);
    } else {
      lines.push(`- **Module ${m.order}: ${m.topicTitle}** (${m.problems.length} problems)`);
      m.problems.forEach(p => {
        lines.push(`  - [${p.platform}] [${p.title}](${p.url}) \`${p.difficulty}\``);
      });
    }
  });
});

fs.writeFileSync('./scratch_coding_links_summary.md', lines.join('\n'));
console.log('Summary markdown generated at ./scratch_coding_links_summary.md');
