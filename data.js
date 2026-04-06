// ── CAT QUANT TRACKER DATA ────────────────────────────────────────────────
const PHASES = [
  {
    id: '0', label: 'Ph 0', title: 'Speed Foundations', weeks: 'Week 1',
    color: 'rgba(34,211,163,0.12)', tc: '#22D3A3', bc: 'rgba(34,211,163,0.3)',
    sections: [
      { name: 'Watch first — before any other topic', videos: [
        { t: 'Course intro & overview', d: '11m' },
        { t: 'Speed Maths 1', d: '31m' }, { t: 'Speed Maths 2', d: '20m' }, { t: 'Speed Maths 3', d: '22m' },
        { t: 'Speed Maths 4', d: '20m' }, { t: 'Speed Maths 5', d: '27m' }, { t: 'Speed Maths 6', d: '20m' },
        { t: 'Percentages 1', d: '26m' }, { t: 'Percentages 2', d: '22m' }, { t: 'Percentages 3', d: '20m' },
      ]}
    ]
  },
  {
    id: '1', label: 'Ph 1', title: 'Number Systems', weeks: 'Weeks 2–4',
    color: 'rgba(96,165,250,0.12)', tc: '#60A5FA', bc: 'rgba(96,165,250,0.3)',
    sections: [
      { name: 'Core numbers', videos: [
        { t: 'Numbers 1', d: '28m' }, { t: 'Numbers 2', d: '23m' }, { t: 'Numbers 3', d: '26m' },
      ]},
      { name: 'Divisibility rules', videos: [
        { t: 'Divisibility Rules 1', d: '30m' }, { t: 'Divisibility Rules 2', d: '25m' },
        { t: 'Divisibility Rules 3', d: '20m' }, { t: 'Divisibility Rules 4', d: '25m' },
      ]},
      { name: 'Remainders', videos: [
        { t: 'Remainders 1', d: '30m' }, { t: 'Remainders 2', d: '24m' }, { t: 'Remainders 3', d: '34m' },
        { t: 'Remainders 4 Part 1', d: '18m' }, { t: 'Remainders 4 Part 2', d: '27m' },
        { t: 'Remainders 5', d: '24m' }, { t: 'Remainders 6', d: '24m' },
        { t: 'Remainders 7', d: '27m' }, { t: 'Remainders 8', d: '29m' },
      ]},
      { name: 'Factorials', videos: [
        { t: 'Factorials 1', d: '34m', here: true }, { t: 'Factorials 2', d: '34m' }, { t: 'Factorials 3', d: '35m' },
        { t: 'Factorials 4', d: '23m' }, { t: 'Factorials 5', d: '18m' }, { t: 'Factorials 6', d: '28m' },
      ]},
      { name: 'Factors', videos: [
        { t: 'Factors 1', d: '28m' }, { t: 'Factors 2', d: '27m' }, { t: 'Factors 3', d: '24m' },
        { t: 'Factors 4', d: '36m' }, { t: 'Factors 5', d: '25m' }, { t: 'Factors 6', d: '35m' },
        { t: 'Factors 7', d: '32m' }, { t: 'Factors 8', d: '27m' }, { t: 'Factors 9', d: '23m' },
        { t: 'Factors 10', d: '24m' }, { t: 'Factors 11', d: '21m' }, { t: 'Factors 12', d: '27m' },
      ]},
      { name: 'HCF & LCM', videos: [
        { t: 'HCF LCM 1', d: '25m' }, { t: 'HCF LCM 2', d: '19m' }, { t: 'HCF LCM 3', d: '22m' },
        { t: 'HCF LCM 4', d: '25m' }, { t: 'HCF LCM 5', d: '25m' },
      ]},
      { name: 'Difference of perfect squares', videos: [
        { t: 'Diff of Perfect Squares 1', d: '21m' }, { t: 'Diff of Perfect Squares 2', d: '18m' }, { t: 'Diff of Perfect Squares 3', d: '15m' },
      ]},
      { name: 'Base systems & special topics', videos: [
        { t: 'Base Systems 1', d: '39m' }, { t: 'Base Systems 2', d: '23m' }, { t: 'Base Systems 3', d: '21m' },
        { t: 'Base Systems 4', d: '19m' }, { t: 'Base Systems 5', d: '15m' },
        { t: 'Last 2 Digits — Odd numbers', d: '22m' }, { t: 'Last 2 Digits — Even numbers', d: '23m' },
        { t: 'Recurring Decimal Cyclicity', d: '57m' },
      ]},
      { name: 'Number Systems practice (all 16)', videos: [
        { t: 'Practice Numbers Part 1', d: '12m' }, { t: 'Practice Numbers Part 2', d: '12m' },
        { t: 'Practice Numbers Part 3', d: '21m' }, { t: 'Practice Numbers Part 4', d: '11m' },
        { t: 'Practice Numbers Part 5', d: '16m' }, { t: 'Practice Numbers Part 6', d: '11m' },
        { t: 'Practice Numbers Part 7', d: '15m' }, { t: 'Practice Numbers Part 8', d: '11m' },
        { t: 'Practice Numbers Part 9', d: '10m' }, { t: 'Practice Numbers Part 10', d: '14m' },
        { t: 'Practice Numbers Part 11', d: '14m' }, { t: 'Practice Numbers Part 12', d: '11m' },
        { t: 'Practice Numbers Part 13', d: '16m' }, { t: 'Practice Numbers Part 14', d: '' },
        { t: 'Practice Numbers Part 15', d: '' }, { t: 'Practice Numbers Part 16', d: '' },
      ]},
    ]
  },
  {
    id: '2', label: 'Ph 2', title: 'Arithmetic', weeks: 'Weeks 5–7',
    color: 'rgba(129,140,248,0.12)', tc: '#818CF8', bc: 'rgba(129,140,248,0.3)',
    sections: [
      { name: 'Profit & Loss', videos: [
        { t: 'Profit and Loss 1', d: '26m' }, { t: 'Profit and Loss 2', d: '24m' }, { t: 'Profit and Loss 3', d: '38m' },
        { t: 'Profit and Loss 4', d: '27m' }, { t: 'Profit and Loss 5', d: '24m' }, { t: 'Profit and Loss 6', d: '21m' },
      ]},
      { name: 'Averages', videos: [
        { t: 'Averages 1', d: '23m' }, { t: 'Averages 2', d: '30m' }, { t: 'Averages 3', d: '31m' }, { t: 'Averages 4', d: '26m' },
      ]},
      { name: 'Alligation & Mixture', videos: [
        { t: 'Alligation & Mixture 1', d: '31m' }, { t: 'Alligation & Mixture 2', d: '17m' },
        { t: 'Alligation & Mixture 3', d: '23m' }, { t: 'Alligation & Mixture 4', d: '26m' },
        { t: 'Alligation & Mixture 5', d: '26m' }, { t: 'Alligation & Mixture 6', d: '21m' },
      ]},
      { name: 'Ratio & Proportion', videos: [
        { t: 'Ratio 1', d: '23m' }, { t: 'Ratio 2', d: '22m' }, { t: 'Ratio 3', d: '20m' },
        { t: 'Ratio 4', d: '' }, { t: 'Ratio 5', d: '' }, { t: 'Ratio 6', d: '' },
        { t: 'Proportion Variation 1', d: '' }, { t: 'Proportion Variation 2', d: '' },
      ]},
      { name: 'Simple & Compound Interest', videos: [
        { t: 'SI & CI 1', d: '21m' }, { t: 'SI & CI 2', d: '26m' }, { t: 'SI & CI 3', d: '23m' },
        { t: 'SI & CI 4', d: '18m' }, { t: 'SI & CI 5', d: '16m' }, { t: 'SI & CI 6', d: '23m' },
      ]},
      { name: 'Time & Work', videos: [
        { t: 'Time and Work 1', d: '21m' }, { t: 'Time and Work 2', d: '24m' }, { t: 'Time and Work 3', d: '26m' },
      ]},
      { name: 'Time Speed & Distance — core', videos: [
        { t: 'TSD 1', d: '22m' }, { t: 'TSD 2', d: '23m' }, { t: 'TSD 3', d: '26m' }, { t: 'TSD 4', d: '31m' },
        { t: 'TSD 5', d: '25m' }, { t: 'TSD 6', d: '28m' },
        { t: 'TSD 7 — Escalators', d: '26m' }, { t: 'TSD 8 — Escalators contd', d: '24m' },
      ]},
      { name: 'TSD — special types', videos: [
        { t: 'TSD Boats & Streams 1', d: '29m' }, { t: 'TSD Boats & Streams 2', d: '22m' },
        { t: 'TSD Relative Speed 1', d: '27m' }, { t: 'TSD Relative Speed 2', d: '22m' },
        { t: 'TSD Relative Speed 3', d: '27m' }, { t: 'TSD Relative Speed 4', d: '21m' },
        { t: 'TSD Linear Tracks 1', d: '27m' }, { t: 'TSD Linear Tracks 2', d: '29m' }, { t: 'TSD Linear Tracks 3', d: '24m' },
        { t: 'TSD Linear Races 1', d: '22m' }, { t: 'TSD Linear Races 2', d: '26m' },
        { t: 'TSD Clocks', d: '22m' },
        { t: 'Circular Tracks 1', d: '22m' }, { t: 'Circular Tracks 2', d: '23m' }, { t: 'Circular Tracks 3', d: '19m' },
      ]},
    ]
  },
  {
    id: '3', label: 'Ph 3', title: 'Geometry & Mensuration', weeks: 'Weeks 8–10',
    color: 'rgba(196,181,253,0.12)', tc: '#C4B5FD', bc: 'rgba(196,181,253,0.3)',
    sections: [
      { name: 'Triangles', videos: [
        { t: 'Triangles 1', d: '32m' }, { t: 'Triangles 2', d: '23m' }, { t: 'Triangles 3', d: '22m' },
        { t: 'Triangles 4', d: '28m' }, { t: 'Triangles 5', d: '20m' }, { t: 'Triangles 6', d: '38m' },
        { t: 'Triangles 7', d: '22m' }, { t: 'Triangles 8', d: '27m' }, { t: 'Triangles 9', d: '27m' },
        { t: 'Triangles 10', d: '22m' }, { t: 'Triangles 11', d: '27m' }, { t: 'Triangles 12', d: '24m' },
        { t: 'Triangles 13', d: '24m' },
      ]},
      { name: 'Circles', videos: [
        { t: 'Circles 1', d: '25m' }, { t: 'Circles 2', d: '19m' }, { t: 'Circles 3', d: '24m' },
      ]},
      { name: 'Quadrilaterals', videos: [
        { t: 'Quadrilaterals 1', d: '38m' }, { t: 'Quadrilaterals 2', d: '22m' }, { t: 'Quadrilaterals 3', d: '13m' },
      ]},
      { name: 'Mensuration', videos: [
        { t: 'Mensuration 1', d: '24m' }, { t: 'Mensuration 2', d: '29m' }, { t: 'Mensuration 3', d: '21m' },
        { t: 'Mensuration 4', d: '23m' }, { t: 'Mensuration 5', d: '22m' },
      ]},
      { name: 'Geometry advanced practice', videos: [
        { t: 'Geometry High Level Practice 1', d: '' }, { t: 'Geometry High Level Practice 2', d: '' },
        { t: 'Geometry High Level Practice 3', d: '' }, { t: '10 Must Know Geometry Concepts', d: '' },
      ]},
    ]
  },
  {
    id: '4', label: 'Ph 4', title: 'Algebra', weeks: 'Weeks 11–14',
    color: 'rgba(251,191,36,0.12)', tc: '#FBB624', bc: 'rgba(251,191,36,0.3)',
    sections: [
      { name: 'Equations', videos: [
        { t: 'Simple Equations 1', d: '26m' }, { t: 'Simple Equations 2', d: '28m' }, { t: 'Simple Equations 3', d: '21m' },
        { t: 'Simple Equations 4', d: '22m' }, { t: 'Simple Equations 5', d: '25m' }, { t: 'Simple Equations 6', d: '22m' },
        { t: 'Quadratic Equations 1', d: '28m' }, { t: 'Quadratic Equations 2', d: '20m' },
        { t: 'Quadratic Equations 3', d: '20m' }, { t: 'Quadratic Equations 4', d: '25m' },
        { t: 'Cubic Equations 1', d: '18m' }, { t: 'Cubic Equations 2', d: '23m' },
      ]},
      { name: 'Inequalities', videos: [
        { t: 'Inequalities 1', d: '18m' }, { t: 'Inequalities 2', d: '29m' }, { t: 'Inequalities 3', d: '18m' },
        { t: 'Inequalities 4', d: '20m' }, { t: 'Inequalities 5', d: '22m' }, { t: 'Inequalities 6', d: '28m' },
        { t: 'Inequalities 7', d: '11m' }, { t: 'Inequalities 8', d: '7m' }, { t: 'Inequalities 9', d: '15m' },
      ]},
      { name: 'Indices, Surds & Logarithms', videos: [
        { t: 'Indices Surds 1', d: '20m' }, { t: 'Indices Surds 2', d: '24m' }, { t: 'Indices Surds 3', d: '21m' },
        { t: 'Indices Surds 4', d: '20m' }, { t: 'Indices & Surds 5', d: '11m' },
        { t: 'Logarithms 1', d: '30m' }, { t: 'Logarithms 2', d: '24m' },
      ]},
      { name: 'Graphs', videos: [
        { t: 'Graphs 1', d: '13m' }, { t: 'Graphs 2', d: '20m' }, { t: 'Graphs 3', d: '20m' }, { t: 'Graphs 4', d: '27m' },
      ]},
      { name: 'Advance Algebra', videos: [
        { t: 'Advance Algebra 1', d: '34m' }, { t: 'Advance Algebra 2', d: '28m' }, { t: 'Advance Algebra 3', d: '19m' },
        { t: 'Advance Algebra 4', d: '19m' }, { t: 'Advance Algebra 5', d: '14m' }, { t: 'Advance Algebra 6', d: '11m' },
      ]},
      { name: 'Sequences & Series (AP & GP)', videos: [
        { t: 'Sequence & Series 1', d: '25m' },
        { t: 'Arithmetic Progression 1', d: '22m' }, { t: 'Arithmetic Progression 2', d: '23m' },
        { t: 'Geometric Progression 1', d: '21m' }, { t: 'Geometric Progression 2', d: '16m' },
        { t: 'Geometric Progression 3', d: '13m' },
      ]},
      { name: 'Functions', videos: [
        { t: 'Functions 1', d: '21m' }, { t: 'Functions 2', d: '19m' }, { t: 'Functions 3', d: '19m' },
        { t: 'Functions 4', d: '16m' }, { t: 'Functions 5', d: '16m' }, { t: 'Functions 6', d: '13m' },
        { t: 'Functions 7', d: '17m' }, { t: 'Functions 8', d: '15m' }, { t: 'Functions 9', d: '9m' },
        { t: 'Functions 10', d: '13m' },
      ]},
      { name: 'Statistics', videos: [
        { t: 'Statistics 1', d: '16m' }, { t: 'Statistics 2', d: '17m' }, { t: 'Statistics 3', d: '14m' },
      ]},
    ]
  },
  {
    id: '5', label: 'Ph 5', title: 'P&C and Probability', weeks: 'Weeks 15–16',
    color: 'rgba(251,113,133,0.12)', tc: '#FB7185', bc: 'rgba(251,113,133,0.3)',
    sections: [
      { name: 'Permutations & Combinations (all 21)', videos: [
        { t: 'P&C 1', d: '26m' }, { t: 'P&C 2', d: '36m' }, { t: 'P&C 3', d: '34m' }, { t: 'P&C 4', d: '28m' },
        { t: 'P&C 5', d: '24m' }, { t: 'P&C 6', d: '25m' }, { t: 'P&C 7', d: '25m' }, { t: 'P&C 8', d: '17m' },
        { t: 'P&C 9 — Similar to Diff distribution', d: '27m' }, { t: 'P&C 10 — atleast/atmost', d: '25m' },
        { t: 'P&C 11 — Sum of digits integral solutions', d: '21m' }, { t: 'P&C 12 — Upper limit', d: '32m' },
        { t: 'P&C 13 — Gaps concept', d: '19m' }, { t: 'P&C 14 — Gaps + Ring fingers', d: '17m' },
        { t: 'P&C 15 — Diff to Similar distribution', d: '26m' }, { t: 'P&C 16 — Ordered/Unordered', d: '25m' },
        { t: 'P&C 17 — Sum of 3 natural numbers', d: '15m' }, { t: 'P&C 18 — Similar to Similar', d: '21m' },
        { t: 'P&C 19 — Diff to Diff distribution', d: '24m' }, { t: 'P&C 20 — Product of 3 numbers', d: '27m' },
        { t: 'P&C 21 — Circular permutations', d: '17m' },
      ]},
      { name: 'Probability', videos: [
        { t: 'Probability 1', d: '21m' }, { t: 'Probability 2', d: '21m' },
      ]},
    ]
  },
  {
    id: '6', label: 'Ph 6', title: 'Advanced Practice', weeks: 'Weeks 17–20',
    color: 'rgba(251,146,60,0.12)', tc: '#FB923C', bc: 'rgba(251,146,60,0.3)',
    sections: [
      { name: 'Arithmetic advanced level (60 videos)', videos: [
        ...Array.from({length: 59}, (_,i) => ({ t: `Arithmetic Adv Level ${i+1}`, d: '' })),
        { t: 'Arithmetic Adv Level — Top Concepts', d: '' },
      ]},
      { name: 'Algebra Practice Sessions (18 videos)', videos:
        Array.from({length: 18}, (_,i) => ({ t: `Algebra Practice Session ${i+1}`, d: '' }))
      },
      { name: 'Mixed Quant advanced practice (44 videos)', videos: [
        { t: 'Quant Adv Practice 1', d: '9m' }, { t: 'Quant Adv Practice 2', d: '12m' },
        { t: 'Quant Adv Practice 3', d: '11m' }, { t: 'Quant Adv Practice 4', d: '8m' },
        { t: 'Quant Adv Practice 5', d: '7m' }, { t: 'Quant Adv Practice 6', d: '8m' },
        { t: 'Quant Adv Practice 7', d: '9m' }, { t: 'Quant Adv Practice 8', d: '8m' },
        { t: 'Quant Adv Practice 9', d: '10m' }, { t: 'Quant Adv Practice 10', d: '10m' },
        { t: 'Quant Adv Practice 11', d: '9m' }, { t: 'Quant Adv Practice 12', d: '11m' },
        { t: 'Quant Adv Practice 13', d: '8m' }, { t: 'Quant Adv Practice 14', d: '10m' },
        { t: 'Quant Adv Practice 15', d: '8m' }, { t: 'Quant Adv Practice 16', d: '8m' },
        { t: 'Quant Adv Practice 17', d: '10m' }, { t: 'Quant Adv Practice 18', d: '8m' },
        { t: 'Quant Adv Practice 19', d: '11m' }, { t: 'Quant Adv Practice 20', d: '9m' },
        { t: 'Quant Adv Practice 21', d: '11m' }, { t: 'Quant Adv Practice 22', d: '7m' },
        { t: 'Quant Adv Practice 23', d: '8m' }, { t: 'Quant Adv Practice 24', d: '5m' },
        { t: 'Quant Adv Practice 25', d: '9m' }, { t: 'Quant Adv Practice 26', d: '6m' },
        { t: 'Quant Adv Practice 27', d: '12m' }, { t: 'Quant Adv Practice 28', d: '8m' },
        { t: 'Quant Adv Practice 29', d: '9m' }, { t: 'Quant Adv Practice 30', d: '6m' },
        { t: 'Quant Adv Practice 31', d: '10m' }, { t: 'Quant Adv Practice 32', d: '7m' },
        { t: 'Quant Adv Practice 33', d: '7m' }, { t: 'Quant Adv Practice 35', d: '8m' },
        { t: 'Quant Adv Practice 37', d: '16m' }, { t: 'Quant Adv Practice 38', d: '8m' },
        { t: 'Quant Adv Practice 39', d: '11m' }, { t: 'Quant Adv Practice 40', d: '3m' },
        { t: 'Quant Adv Practice 41', d: '9m' }, { t: 'Quant Adv Practice 42', d: '6m' },
        { t: 'Quant Adv Practice 43', d: '8m' }, { t: 'Quant Adv Practice 44', d: '5m' },
        { t: 'Revision Best Concepts 44', d: '6m' }, { t: 'Revision Best Concepts 45', d: '5m' },
      ]},
      { name: 'Advance Level Algebra Practice (22 videos)', videos: [
        { t: 'Adv Algebra Practice — Number System', d: '11m' },
        { t: 'Adv Algebra Practice — Quadratic', d: '7m' },
        { t: 'Adv Algebra Practice — Maxima Minima', d: '8m' },
        { t: 'Adv Algebra Practice — Advance Quadratic', d: '6m' },
        { t: 'Adv Algebra Practice — Inequality', d: '7m' },
        { t: 'Adv Algebra Practice — Symmetry', d: '9m' },
        { t: 'Adv Algebra Practice — Trigo Max Min', d: '8m' },
        { t: 'Adv Algebra Practice — Series Logarithm', d: '11m' },
        { t: 'Adv Algebra Practice — Cubic Equation', d: '8m' },
        { t: 'Adv Algebra Practice — Logarithms Tough 1', d: '12m' },
        { t: 'Adv Algebra Practice — Logarithms Tough 2', d: '7m' },
        { t: 'Adv Algebra Practice — Indices Surds', d: '10m' },
        { t: 'Adv Algebra Practice — Inequalities 2', d: '9m' },
        { t: 'Adv Algebra Practice — Mixed Algebra', d: '9m' },
        { t: 'Adv Algebra Practice — Functions Tough', d: '4m' },
        { t: 'Adv Algebra Practice — Functions + Inequalities', d: '9m' },
        { t: 'Adv Algebra Practice — Algebra + Trigo', d: '5m' },
        { t: 'Adv Algebra Practice — Cubic Tough Max Min', d: '22m' },
        { t: 'Adv Algebra Practice — Equations Difficult', d: '17m' },
        { t: 'Adv Algebra Practice — Series Tough', d: '4m' },
        { t: 'Adv Algebra Practice — Difficult GP', d: '5m' },
        { t: 'Adv Algebra Practice — Logarithms Tough 3', d: '11m' },
      ]},
    ]
  },
];
