export interface Tier {
  id: string;
  name: string;
  trademark: boolean;
  tierLabel: string;
  audience: string;
  expansion?: string;
  summary: string;
  why: string;
  what: string;
  who: string[];
  how: { label: string; detail: string }[];
  outcomes: string[];
  status: 'available' | 'in-build';
  statusNote?: string;
}

export const tiers: Tier[] = [
  {
    id: 'care',
    name: 'CARE',
    trademark: true,
    tierLabel: 'Tier 1 — Organisation-wide',
    audience: 'All employees, regardless of role or seniority',
    expansion: 'Consider · Acknowledge · Respect · Empathy',
    summary:
      'The cultural foundation. A shared behavioural language that every person in the organisation holds in common — so inclusion stops being a specialist function and starts being everyday conduct.',
    why: 'Most organisations already intend to be inclusive. What breaks down is the ordinary interaction: the ambiguous instruction, the meeting that moves too fast, the assumption made about a colleague nobody thought to ask. Awareness training tells people what to know. CARE trains what to do. Without a common baseline, managers are left improvising and inclusion collapses into whoever happens to be good at it.',
    what: 'A behaviour-first workshop built on four observable conduct standards — Consider, Acknowledge, Respect, Empathy — taught through invisible differences, with neurodivergence as the deep teaching case. Participants leave with practised responses, not definitions. The programme moves past awareness to observable conduct, and treats professional standards and team performance as part of the same conversation rather than a competing one.',
    who: [
      'All employees, at any level of seniority',
      'New hires, as part of onboarding',
      'Operational, administrative and frontline teams',
      'Departments strengthening psychological safety and collaboration',
    ],
    how: [
      {
        label: 'CARE Essentials',
        detail:
          'Approximately four hours, blended. Self-paced eLearning establishes the framework and vocabulary; a facilitated workshop builds the behaviour through scenario practice.',
      },
      {
        label: 'CARE Practitioner',
        detail:
          'A full day, with an optional follow-up clinic. For roles with higher proximity to inclusion decisions — team leads, HR partners, onboarding buddies — who need to hold the behaviours under pressure and model them for others.',
      },
      {
        label: 'Assessment',
        detail:
          'A knowledge check plus a personal commitment submission. Completion means demonstrated engagement, not attendance.',
      },
    ],
    outcomes: [
      'Explain the principles of neurodiversity and inclusive workplace conduct in plain terms',
      'Identify everyday situations where invisible differences surface',
      'Demonstrate the four CARE behaviours in daily interactions',
      'Apply communication techniques that reduce misunderstanding and friction',
      'Respond professionally to a request for support or adjustment',
    ],
    status: 'available',
  },
  {
    id: 'engage',
    name: 'ENGAGE',
    trademark: true,
    tierLabel: 'Tier 2 — People managers',
    audience: 'Managers, supervisors and team leads',
    summary:
      'Where CARE behaviours become management decisions. The tier that determines whether a shared culture survives contact with performance pressure, resourcing constraints and a difficult conversation on a Tuesday afternoon.',
    why: 'A manager who has never rehearsed the response defaults to silence, over-formality, or an anxious over-correction — none of which count as inclusive conduct, however well-intentioned. Managers hold the decisions that matter most: how work is allocated, how performance is judged, how an adjustment request is received. An organisation-wide baseline without a manager tier leaves the highest-leverage population unequipped.',
    what: 'Scripted, scenario-based capability for the conversations managers actually have. ENGAGE takes the Think / Say / Do method into the management context: what to notice before reacting, what to say in the moment a need surfaces, and what to change in how the work is designed. Emphasis sits on the "Say" layer — because the burden of translation has sat with the neurodivergent employee for too long.',
    who: [
      'First-line managers and supervisors',
      'Team leads with performance conversation responsibility',
      'HR business partners supporting manager populations',
      'Anyone who allocates work, judges performance, or receives adjustment requests',
    ],
    how: [
      {
        label: 'Format',
        detail:
          'Facilitated workshop with a scenario bank drawn from the client\'s own operating context, developed during the co-development stage rather than delivered off the shelf.',
      },
      {
        label: 'Reinforcement',
        detail:
          'A follow-up clinic for live cases — managers bring the situation they are actually facing, not a hypothetical one.',
      },
      {
        label: 'Sequencing',
        detail:
          'Designed to follow CARE. The shared vocabulary established at Tier 1 is what makes the manager conversation efficient rather than remedial.',
      },
    ],
    outcomes: [
      'Recognise the decision points where inclusive conduct is actually determined',
      'Hold an adjustment conversation without deferring, over-promising, or singling anyone out',
      'Design task allocation and instruction-giving that reduces avoidable friction',
      'Balance flexibility with performance standards, explicitly rather than intuitively',
    ],
    status: 'in-build',
    statusNote:
      'Framework and architecture confirmed. Full curriculum in active development — we would rather state that plainly than present indicative content as finished depth.',
  },
  {
    id: 'enable',
    name: 'ENABLE',
    trademark: true,
    tierLabel: 'Tier 3 — Senior leadership',
    audience: 'Senior leaders, function heads and executive teams',
    summary:
      'The conditions leaders set. Policy, resourcing, and permission — the factors that decide whether the behaviours built at Tier 1 and Tier 2 can survive real business pressure, or quietly get overruled by it.',
    why: 'Behaviour that costs a manager their delivery target will not hold. Leaders determine whether inclusive conduct is something the organisation resources or something it merely endorses. This is also the tier where regulatory readiness sits: Singapore\'s Workplace Fairness Act and the Enabling Masterplan 2030 both shift the question from voluntary goodwill to organisational obligation.',
    what: 'A leadership-level session on inclusion as an engineering standard rather than a values statement — the fit between task demands and human abilities, addressed at the level of role design, policy and resourcing. Includes the governance view: where accountability sits, what gets measured, and what a defensible position looks like as Singapore\'s regulatory environment tightens.',
    who: [
      'Senior leadership and executive teams',
      'Function and business unit heads',
      'HR and organisational development leadership',
      'Anyone accountable for policy, resourcing or workforce strategy',
    ],
    how: [
      {
        label: 'Format',
        detail:
          'Executive session, deliberately short and high-density. Structured around decisions leaders can actually make rather than awareness they are assumed to lack.',
      },
      {
        label: 'Diagnostic input',
        detail:
          'Informed by findings from the discovery stage, so the conversation is about this organisation\'s specific seams — not inclusion in the abstract.',
      },
      {
        label: 'Governance view',
        detail:
          'Where accountability sits, what to measure, and how the Singapore policy environment is shifting.',
      },
    ],
    outcomes: [
      'Frame inclusion as a task-design and capability question, not an attitude question',
      'Identify where organisational policy currently undercuts stated intent',
      'Set measurement that tracks behaviour and outcomes, not sentiment',
      'Understand the direction of Singapore\'s regulatory environment and what readiness requires',
    ],
    status: 'in-build',
    statusNote:
      'Framework and architecture confirmed. Full curriculum in active development.',
  },
];
