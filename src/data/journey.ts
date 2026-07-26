export interface Stage {
  num: string;
  name: string;
  visible: string[];
  seam: string;
}

export const journey: Stage[] = [
  {
    num: '01',
    name: 'Discovery',
    visible: ['Onsite audit and workplace walkthrough', 'Stakeholder interviews', 'Baseline pulse survey'],
    seam: 'Findings synthesised against a curated evidence base, cross-checking where invisible differences are surfacing in this specific operating context rather than in general.',
  },
  {
    num: '02',
    name: 'Design',
    visible: ['Diagnostic report', 'Programme blueprint', 'Tier recommendation'],
    seam: 'Audit findings mapped to the CARE, ENGAGE and ENABLE tiers and to Think / Say / Do. Every evidence claim traced to its original source before it reaches a slide.',
  },
  {
    num: '03',
    name: 'Co-development',
    visible: ['Working sessions with stakeholders', 'Scenario and case review', 'Content sign-off'],
    seam: 'Scenario banks drafted and iterated between sessions at a pace a single practitioner could not sustain by hand — refined against real feedback rather than assumption.',
  },
  {
    num: '04',
    name: 'Delivery',
    visible: ['Workshops and clinics', 'Blended eLearning', 'Manager coaching'],
    seam: 'An internal support layer handles participant questions and clinic triage, holding facilitation quality consistent across every session and every cohort.',
  },
  {
    num: '05',
    name: 'Impact',
    visible: ['Post and follow-up pulse surveys', 'Impact Snapshot', 'Handover briefing'],
    seam: 'Results aggregate as they arrive, with an attribution discipline that refuses to claim causal return on investment from a short pilot.',
  },
];
