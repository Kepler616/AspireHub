// SAMPLE DATA — the approved topic pool per pillar. Claude picks and expands from this
// pool (see TopicRecommendationStep) rather than inventing subjects from nothing —
// this is the stand-in for "Aspire's approved topic-generation instructions."
export const TOPIC_POOLS = {
  'borrower-education': [
    'Preapproval',
    'Down payments',
    'Closing costs',
    'Credit',
    'Debt-to-income ratio',
    'Mortgage insurance',
    'Gift funds',
    'Seller concessions',
    'Builder incentives',
    'Buying before selling',
    'Self-employed qualification',
    'Income documentation',
    'Loan-program features',
    'Loan comparisons',
    'Preparation checklists',
    'Mortgage misconceptions',
    'Borrower scenarios',
    'Tools and next steps',
  ],
  // Pillar 2's "pool" is content types, not subjects — the topic choice here
  // doubles as the content-type choice (see FactsIntakeStep).
  'client-results': [
    'Client Review',
    'Recently Funded',
    'Complex Scenario',
    'First-Time Buyer Result',
    'Self-Employed Borrower Result',
    'Partner Testimonial',
  ],
  'market-news': [
    'Mortgage-rate context',
    'Housing inventory',
    'Home-price movement',
    'Buyer competition',
    'Housing affordability',
    'Mortgage application trends',
    'New construction',
    'Loan-limit changes',
    'Program guideline updates',
    'Housing policy changes',
    'Property-tax developments',
    'Seasonal market patterns',
    'Local housing news',
    'National mortgage news',
  ],
}

// Seed examples grounding the recommendation call for each pillar — not shown to the
// user directly, just given to Claude as a style/quality reference.
export const TOPIC_EXAMPLES = {
  'borrower-education': {
    recommended: 'How bank-statement loans evaluate self-employed income',
    alternatives: [
      'FHA vs. conventional: how the options differ',
      'What buyers should prepare before preapproval',
      'When seller concessions may help with closing costs',
    ],
  },
  'client-results': {
    recommended: 'Share a Recently Funded Loan',
    alternatives: [
      'Share a Client Review',
      'Share a Complex Borrower Scenario',
      'Share a Partner Testimonial',
    ],
  },
  'market-news': {
    recommended: 'What the latest inventory shift could mean for buyers in your market',
    alternatives: [
      'What current mortgage-rate movement means for buying power',
      'How buyer competition is changing locally',
      'A recent mortgage guideline update borrowers should understand',
    ],
  },
}
