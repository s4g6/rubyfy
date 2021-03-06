// Generate regex for blocks

const regenerate = require('regenerate')

const CUI = 'CJK_Unified_Ideographs'
const CCI = 'CJK_Compatibility_Ideographs'
const blocks = [
  CUI,
  ...['A', 'B', 'C', 'D', 'E'].map(c => `${CUI}_Extension_${c}`),
  CCI,
  `${CCI}_Supplement`
]

const set = regenerate(
  require(`unicode-9.0.0/General_Category/Decimal_Number/code-points`),
  '々',
  'ヶ',
  ...blocks.map(b => require(`unicode-9.0.0/Block/${b}/code-points`))
)

console.log(set.toString({ hasUnicodeFlag: true }))
