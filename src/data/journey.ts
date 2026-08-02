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
    seam: 'Roles are decomposed into physical, cognitive, and sensory demands — not surveyed for sentiment, but profiled for mismatches. The audit surfaces barriers the organisation has lived with for years but never named as inclusion issues, because nobody had asked what the task actually demands.',
  },
  {
    num: '02',
    name: 'Design',
    visible: ['Diagnostic report', 'Programme blueprint', 'Tier recommendation'],
    seam: 'Findings mapped to CARE\u2122, ENGAGE\u2122, and ENABLE\u2122 — not as separate programmes, but as one behavioural spine at three depths. The manager who sets the meeting pace needs different preparation from the colleague who responds in the moment. Every claim traced to its source before it reaches a slide.',
  },
  {
    num: '03',
    name: 'Co-development',
    visible: ['Working sessions with stakeholders', 'Scenario and case review', 'Content sign-off'],
    seam: 'Scenarios are built from real moments observed during Discovery — the handover that moved too fast, the instruction that assumed too much. Each iteration tested against stakeholder feedback, not assumptions. Infrastructure handles the drafting; the practitioner handles the judgement.',
  },
  {
    num: '04',
    name: 'Delivery',
    visible: ['Workshops and clinics', 'Blended eLearning', 'Manager coaching'],
    seam: 'Between sessions, participant questions are answered and scenarios refined — so the workshop is not the only moment support is available. The support architecture — champion, deputy, co-worker — is activated during delivery, not after it.',
  },
  {
    num: '05',
    name: 'Impact',
    visible: ['Post and follow-up pulse surveys', 'Impact Snapshot', 'Handover briefing'],
    seam: 'Results measured against the specific mismatches identified at Discovery — not against a general benchmark. Where a result could have other causes, the attribution discipline says so. The handover transfers the architecture to the organisation\u2019s own people. The system stays.',
  },
];