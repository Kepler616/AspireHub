// SAMPLE DATA — content structures the app can recommend, tagged by which pillars and
// post format (single-post vs. carousel) they fit. Recommendation logic lives in
// StructureRecommendationStep; this is just the compatibility map it filters against.
export const CONTENT_STRUCTURES = [
  {
    id: 'did-you-know',
    label: 'Did You Know',
    description: 'A bold fact or myth-buster with a supporting explanation.',
    format: 'single-post',
    pillars: ['borrower-education', 'client-results', 'market-news'],
  },
  {
    id: 'loan-product-features',
    label: 'Loan Product Features',
    description: 'Introduces an approved loan program and who it fits.',
    format: 'single-post',
    pillars: ['borrower-education'],
  },
  {
    id: 'loan-comparison',
    label: 'Loan Comparison',
    description: 'Compares two loan options side by side.',
    format: 'single-post',
    pillars: ['borrower-education', 'market-news'],
  },
  {
    id: 'tips-or-checklist',
    label: 'Tips or Checklist',
    description: 'A short, scannable list of tips or steps.',
    format: 'single-post',
    pillars: ['borrower-education', 'market-news'],
  },
  {
    id: 'strategy-carousel',
    label: 'Strategy Carousel',
    description: 'A multi-slide, step-by-step breakdown.',
    format: 'carousel',
    pillars: ['borrower-education', 'client-results', 'market-news'],
  },
  {
    id: 'client-review',
    label: 'Client Review',
    description: 'A testimonial card built from a real supplied review.',
    format: 'single-post',
    pillars: ['client-results'],
  },
  {
    id: 'recently-funded',
    label: 'Recently Funded',
    description: 'Shares a real funded loan — location, program, and outcome.',
    format: 'single-post',
    pillars: ['client-results'],
  },
  {
    id: 'market-update',
    label: 'Market Update',
    description: 'A timely read on current mortgage or housing news.',
    format: 'single-post',
    pillars: ['market-news'],
  },
]

// Pillar 2's topic choice doubles as a content-type choice, so it deterministically
// picks the structure (and which facts to collect) rather than being recommended freely.
export const CLIENT_RESULTS_TOPIC_MAP = {
  'Client Review': { structureId: 'client-review', factsSet: 'review' },
  'Partner Testimonial': { structureId: 'client-review', factsSet: 'review' },
  'Recently Funded': { structureId: 'recently-funded', factsSet: 'funded' },
  'First-Time Buyer Result': { structureId: 'recently-funded', factsSet: 'funded' },
  'Self-Employed Borrower Result': { structureId: 'recently-funded', factsSet: 'funded' },
  'Complex Scenario': { structureId: 'strategy-carousel', factsSet: 'scenario' },
}

export function recommendStructureId(pillarId, topicTitle) {
  if (pillarId === 'client-results') {
    return CLIENT_RESULTS_TOPIC_MAP[topicTitle]?.structureId ?? 'client-review'
  }
  if (pillarId === 'market-news') return 'market-update'
  return 'did-you-know'
}
