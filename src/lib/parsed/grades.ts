import type { GradesWrapped } from '$lib/types/grades';

export default {
  year4_2025: [
    { class: 'COGS 401 - Seminar in Cognitive Systems', grade: 70 },
    {
      class: 'DSCI 310 - Reproducible and Trustworthy Workflows for Data Science',
      grade: 96
    },
    { class: 'PSYC 304 - Brain and Behaviour', grade: 55 },
    { class: 'PSYC 365 - Cognitive Neuroscience', grade: 66 }
  ],
  year5_2025: [
    { class: 'CPSC 322 - Introduction to Artificial Intelligence', grade: 68 },
    { class: 'DSCI 320 - Visualization for Data Science', grade: 88 },
    { class: 'EOSC 315 - The Ocean Ecosystem', grade: 79 },
    {
      class: 'PHIL 351 - Philosophical Perspectives on Cognitive Systems Research',
      grade: 72
    }
  ]
} as GradesWrapped;
