export interface ShowcaseItem {
  slug: string;
  title: string;
  kind: string;
  stage: string;
  summary: string;
  problem: string;
  demoNote: string;
}

export const showcase: ShowcaseItem[] = [
  {
    slug: 'job-audit',
    title: 'Task-Level Job Audit',
    kind: 'Diagnostic instrument',
    stage: 'Discovery',
    summary:
      'Breaks a role into its actual task demands, then scores each against the abilities it genuinely requires — separating the essential from the incidental.',
    problem:
      'Job descriptions describe roles as whole objects, so an adjustment conversation becomes all-or-nothing. Auditing at task level shows that most barriers sit in a small number of incidental demands that were never essential to the work.',
    demoNote:
      'Working demo. Adjust the demand levels and the fit assessment recalculates live.',
  },
  {
    slug: 'seam-map',
    title: 'The SEAM\u2122 Map',
    kind: 'Diagnostic framework',
    stage: 'Discovery',
    summary:
      'Traces an inclusive hiring process across everyone who touches it, and locates the handoffs where intent is lost between them.',
    problem:
      'Inclusive hiring rarely fails because someone opposed it. It fails at the seam — the handoff between recruiter and hiring manager, between offer and onboarding, between onboarding and the team — where nobody owns the transfer.',
    demoNote:
      'Working demo. Select a handoff to see the failure mode and the intervention that closes it.',
  },
  {
    slug: 'impact-snapshot',
    title: 'Impact Snapshot',
    kind: 'Measurement artefact',
    stage: 'Impact',
    summary:
      'The one-page before-and-after produced at the close of every engagement. Weighted toward what people did, not how they rated the session.',
    problem:
      'Training evaluation usually stops at whether participants enjoyed the session. The Impact Snapshot reports movement in observable behaviour at follow-up, and states plainly what cannot be attributed to the programme.',
    demoNote:
      'Illustrative sample with placeholder figures. Structure is real; the numbers are not from a client engagement.',
  },
  {
    slug: 'care-walkthrough',
    title: 'CARE\u2122 Scenario Walkthrough',
    kind: 'Learning artefact',
    stage: 'Delivery',
    summary:
      'A single workplace scenario worked through the Think / Say / Do method, showing how a CARE behaviour is actually taught.',
    problem:
      'Inclusion training tends to teach principles and hope behaviour follows. This shows the opposite order: a specific situation, the response options available, and what each one actually produces.',
    demoNote:
      'Working demo. Choose a response and see how it plays out.',
  },
];
