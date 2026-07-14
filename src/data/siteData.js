import {
  BookOpenCheck,
  BriefcaseBusiness,
  FilePenLine,
  Newspaper,
  ScanText,
  SearchCheck,
} from 'lucide-react';

export const services = [
  {
    icon: FilePenLine,
    title: 'Essays, Papers & Custom Writing',
    description:
      'Original writing support built around your brief, source material, audience, and formatting requirements.',
    items: ['Essays and research papers', 'Case studies and term papers', 'Personal statements and custom briefs'],
  },
  {
    icon: BookOpenCheck,
    title: 'Research & Academic Support',
    description:
      'Research guidance, source synthesis, structure, citation support, and editorial help for academic and research projects.',
    items: ['Literature reviews and research guidance', 'Proposals and structured reports', 'Referencing, formatting, and editing'],
  },
  {
    icon: Newspaper,
    title: 'Articles, Blogs & Web Content',
    description:
      'Useful, readable content shaped for the audience, platform, and purpose instead of generic filler written only to hit a word count.',
    items: ['Blog posts and feature articles', 'Website and landing-page copy', 'SEO-aware content writing'],
  },
  {
    icon: ScanText,
    title: 'Editing, Rewriting & Proofreading',
    description:
      'Existing drafts are tightened, reorganized, rewritten, and polished for stronger flow, grammar, consistency, and readability.',
    items: ['Developmental and line editing', 'Rewriting and clarity improvement', 'Final proofreading and cleanup'],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business & Professional Writing',
    description:
      'Professional documents written to communicate clearly, look credible, and make the right impression with clients, employers, or stakeholders.',
    items: ['Reports and proposals', 'Profiles, bios, and personal statements', 'Formal business communication'],
  },
  {
    icon: SearchCheck,
    title: 'STEM, Data & Technical Support',
    description:
      'Step-by-step tutoring, explanation, review, and technical writing support for quantitative and technical subjects.',
    items: ['Math and statistics tutoring', 'Data analysis and technical reports', 'Programming guidance and debugging support'],
  },
];

export const pricing = [
  {
    label: 'Writing & research',
    price: '$10',
    unit: '/ page',
    note: 'Starting rate',
    description: 'For essays, research papers, case studies, literature reviews, reports, and similar writing projects.',
    items: ['Brief review before work starts', 'Original writing or structured editorial support', 'Reasonable revisions within the agreed scope'],
    featured: true,
  },
  {
    label: 'Technical & STEM writing',
    price: '$15',
    unit: '/ page',
    note: 'Starting rate',
    description: 'For technical reports, data-analysis writeups, STEM explanations, calculation walkthroughs, and similar technical writing.',
    items: ['Step-by-step technical explanation', 'Data and calculation walkthroughs', 'Technical writing and debugging guidance'],
  },
  {
    label: 'Ongoing support',
    price: 'Custom',
    unit: ' quote',
    note: 'Weekly or monthly',
    description: 'For clients who need recurring writing, editing, tutoring, research, or content support over a longer period.',
    items: ['Defined scope and workload', 'Priority scheduling where agreed', 'One clear point of contact'],
  },
];

export const supportAreas = [
  'Essays & research papers',
  'Case studies',
  'Literature reviews',
  'Reports & proposals',
  'Discussion preparation',
  'Presentations & outlines',
  'Math & statistics tutoring',
  'Accounting concepts',
  'Biology & science support',
  'Data analysis',
  'Programming guidance',
  'Editing & proofreading',
];

export const trustPoints = [
  ['Original work', 'Writing is created for the specific brief rather than recycled from generic templates.'],
  ['Confidential handling', 'Project details, files, and communication are kept private.'],
  ['Clear pricing', 'Scope, timing, and price are confirmed before work begins, with no surprise charges.'],
  ['Revision support', 'Reasonable revisions are available when the delivered work needs to better match the original agreed brief.'],
  ['Direct communication', 'You communicate directly with MidnightScribe rather than being passed between multiple people.'],
  ['Deadline-aware delivery', 'Deadlines are confirmed before accepting a project, and urgent work is only taken when the timing is realistic.'],
  ['Flexible support', 'One-off projects and recurring writing, editing, research, or tutoring support can be arranged.'],
  ['No grade guarantees', 'Academic support focuses on learning, guidance, writing, and editing—not guaranteed grades or taking assessments for clients.'],
];

export const processSteps = [
  {
    number: '01',
    title: 'Send the job',
    text: 'Share the brief, instructions, deadline, word count, formatting requirements, and any source material that matters.',
  },
  {
    number: '02',
    title: 'Confirm scope & quote',
    text: 'I review what the job requires, clarify anything important, and confirm the scope, timeline, and price before work begins.',
  },
  {
    number: '03',
    title: 'Write, guide & quality-check',
    text: 'Depending on the service, I write, research, edit, tutor, or review the work and check that the result follows the agreed brief.',
  },
  {
    number: '04',
    title: 'Deliver & refine',
    text: 'You receive the completed deliverable or support session by the agreed deadline, with reasonable refinements where the original brief calls for them.',
  },
];

export const faqs = [
  {
    question: 'What kinds of writing and study support do you offer?',
    answer:
      'I take on essays, research papers, case studies, literature reviews, reports, professional documents, articles, editing, rewriting, proofreading, research guidance, tutoring, data analysis support, and programming guidance. Send the requirements and I will confirm whether the project is a good fit.',
  },
  {
    question: 'How much does the service cost?',
    answer:
      'Writing and research support starts from $10 per page, while technical and STEM writing starts from $15 per page. Final pricing depends on complexity, deadline, length, research requirements, and the exact scope of work.',
  },
  {
    question: 'How do I send a project?',
    answer:
      'Use the contact page or any “Send a writing job” button. Include the type of work, instructions, approximate length, deadline, and any files or sources I should review. The website opens a prefilled email so you can send everything directly.',
  },
  {
    question: 'Do you accept urgent deadlines?',
    answer:
      'Yes, when the workload and project complexity make the deadline realistic. Send urgent work as early as possible so I can confirm availability before you depend on the turnaround time.',
  },
  {
    question: 'Can you follow a specific brief or formatting style?',
    answer:
      'Yes. I can work from supplied instructions, templates, tone guides, citation styles, source materials, and formatting requirements. The clearer the brief, the more precisely the final work can match it.',
  },
  {
    question: 'Do you offer revisions?',
    answer:
      'Yes. Reasonable revisions are available when the delivered work needs to better match the original agreed brief. A major change in topic, scope, length, or instructions may require a new quote.',
  },
  {
    question: 'Can you take tests, exams, or graded quizzes for me?',
    answer:
      'No. I can help you prepare through tutoring, concept explanations, practice, study planning, editing, and feedback, but I do not impersonate students or take graded assessments on their behalf.',
  },
  {
    question: 'Is my project kept private?',
    answer:
      'Yes. Project details and files are treated as confidential and used only to understand and provide the agreed service.',
  },
];

export const strengths = [
  'Brief-driven work',
  'Original, human writing',
  'Deadline-focused delivery',
  'Direct communication',
];
