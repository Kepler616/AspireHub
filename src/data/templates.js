// SAMPLE DATA — the 7 core MVP templates, each tied to one content structure and
// carrying its own field schema. The selected template controls what Claude
// generates (see ContentEditorScreen) — no generic content gets force-fit afterward.
// creativeFields controls which loan-officer fields the design shows beyond the
// individual NMLS, which every template always supports.
export const TEMPLATES = [
  {
    id: 'did-you-know',
    name: 'Did You Know',
    structureId: 'did-you-know',
    description: 'A bold, attention-grabbing fact or myth-buster hook with a supporting explanation.',
    formats: ['single-post'],
    platforms: ['linkedin', 'instagram', 'facebook'],
    creativeFields: { phone: true, email: true },
    fields: [
      { key: 'fact_headline', label: 'Fact headline', required: true, maxLength: 90 },
      { key: 'short_explanation', label: 'Short explanation', required: true, maxLength: 200 },
      { key: 'borrower_takeaway', label: 'Borrower takeaway', required: true, maxLength: 120 },
      { key: 'cta', label: 'CTA', required: true, maxLength: 24 },
    ],
  },
  {
    id: 'loan-product-features',
    name: 'Loan Product Features',
    structureId: 'loan-product-features',
    description: 'Highlights an approved loan program and who it fits, with 3-5 supporting features.',
    formats: ['single-post'],
    platforms: ['linkedin', 'instagram', 'facebook'],
    creativeFields: { phone: true, email: true },
    fields: [
      { key: 'program_name', label: 'Program name', required: true, maxLength: 40 },
      { key: 'headline', label: 'Headline', required: true, maxLength: 90 },
      { key: 'borrower_fit', label: 'Borrower fit', required: true, maxLength: 120 },
      { key: 'feature_1', label: 'Feature 1', required: true, maxLength: 70 },
      { key: 'feature_2', label: 'Feature 2', required: true, maxLength: 70 },
      { key: 'feature_3', label: 'Feature 3', required: true, maxLength: 70 },
      { key: 'feature_4', label: 'Feature 4', required: false, maxLength: 70 },
      { key: 'feature_5', label: 'Feature 5', required: false, maxLength: 70 },
      { key: 'cta', label: 'CTA', required: true, maxLength: 24 },
    ],
  },
  {
    id: 'loan-comparison',
    name: 'Loan Comparison',
    structureId: 'loan-comparison',
    description: 'Compares two loan options side by side against matching criteria.',
    formats: ['single-post'],
    platforms: ['linkedin', 'instagram', 'facebook'],
    creativeFields: { phone: false, email: false },
    fields: [
      { key: 'comparison_headline', label: 'Comparison headline', required: true, maxLength: 90 },
      { key: 'option_a_name', label: 'Option A name', required: true, maxLength: 30 },
      { key: 'option_b_name', label: 'Option B name', required: true, maxLength: 30 },
      { key: 'comparison_criterion_1', label: 'Criterion 1', required: true, maxLength: 30 },
      { key: 'option_a_value_1', label: 'Option A value 1', required: true, maxLength: 40 },
      { key: 'option_b_value_1', label: 'Option B value 1', required: true, maxLength: 40 },
      { key: 'comparison_criterion_2', label: 'Criterion 2', required: true, maxLength: 30 },
      { key: 'option_a_value_2', label: 'Option A value 2', required: true, maxLength: 40 },
      { key: 'option_b_value_2', label: 'Option B value 2', required: true, maxLength: 40 },
      { key: 'comparison_criterion_3', label: 'Criterion 3', required: false, maxLength: 30 },
      { key: 'option_a_value_3', label: 'Option A value 3', required: false, maxLength: 40 },
      { key: 'option_b_value_3', label: 'Option B value 3', required: false, maxLength: 40 },
      { key: 'borrower_takeaway', label: 'Borrower takeaway', required: true, maxLength: 110 },
      { key: 'cta', label: 'CTA', required: true, maxLength: 24 },
    ],
  },
  {
    id: 'tips-or-checklist',
    name: 'Tips or Checklist',
    structureId: 'tips-or-checklist',
    description: 'A short, scannable list of tips or steps with an introduction.',
    formats: ['single-post'],
    platforms: ['linkedin', 'instagram', 'facebook'],
    creativeFields: { phone: true, email: true },
    fields: [
      { key: 'headline', label: 'Headline', required: true, maxLength: 90 },
      { key: 'short_intro', label: 'Short intro', required: true, maxLength: 140 },
      { key: 'item_1', label: 'Item 1', required: true, maxLength: 70 },
      { key: 'item_2', label: 'Item 2', required: true, maxLength: 70 },
      { key: 'item_3', label: 'Item 3', required: true, maxLength: 70 },
      { key: 'item_4', label: 'Item 4', required: false, maxLength: 70 },
      { key: 'item_5', label: 'Item 5', required: false, maxLength: 70 },
      { key: 'item_6', label: 'Item 6', required: false, maxLength: 70 },
      { key: 'cta', label: 'CTA', required: true, maxLength: 24 },
    ],
  },
  {
    id: 'strategy-carousel',
    name: 'Strategy Carousel',
    structureId: 'strategy-carousel',
    description: 'A step-by-step, multi-slide breakdown — cover, two body slides, and a closing takeaway.',
    formats: ['carousel'],
    platforms: ['linkedin', 'instagram', 'facebook'],
    creativeFields: { phone: true, email: true },
    fields: [
      { key: 'cover_hook', label: 'Cover hook', required: true, maxLength: 90 },
      { key: 'cover_subheading', label: 'Cover subheading', required: true, maxLength: 110 },
      { key: 'slide_1_heading', label: 'Slide 1 heading', required: true, maxLength: 60 },
      { key: 'slide_1_body', label: 'Slide 1 body', required: true, maxLength: 160 },
      { key: 'slide_2_heading', label: 'Slide 2 heading', required: true, maxLength: 60 },
      { key: 'slide_2_body', label: 'Slide 2 body', required: true, maxLength: 160 },
      { key: 'final_takeaway', label: 'Final takeaway', required: true, maxLength: 110 },
      { key: 'final_cta', label: 'Final CTA', required: true, maxLength: 24 },
    ],
  },
  {
    id: 'client-review',
    name: 'Client Review',
    structureId: 'client-review',
    description: 'A testimonial card built from a real supplied review — never invented.',
    formats: ['single-post'],
    platforms: ['linkedin', 'instagram', 'facebook'],
    creativeFields: { phone: false, email: false },
    isFactual: true,
    fields: [
      { key: 'real_review_text', label: 'Review text', required: true, maxLength: 220, factual: true },
      { key: 'review_source', label: 'Review source', required: true, maxLength: 40, factual: true },
      { key: 'client_initials', label: 'Client initials', required: false, maxLength: 8, factual: true },
      { key: 'optional_context', label: 'Optional context', required: false, maxLength: 90, factual: true },
      { key: 'cta', label: 'CTA', required: true, maxLength: 24 },
    ],
  },
  {
    id: 'recently-funded',
    name: 'Recently Funded',
    structureId: 'recently-funded',
    description: 'Shares a real funded loan — location, program, and outcome — never invented.',
    formats: ['single-post'],
    platforms: ['linkedin', 'instagram', 'facebook'],
    creativeFields: { phone: true, email: true },
    isFactual: true,
    fields: [
      { key: 'general_location', label: 'General location', required: true, maxLength: 40, factual: true },
      { key: 'loan_type', label: 'Loan type', required: true, maxLength: 30, factual: true },
      { key: 'approved_loan_amount', label: 'Loan amount (if approved for public use)', required: false, maxLength: 20, factual: true },
      { key: 'challenge', label: 'Borrower challenge', required: true, maxLength: 110, factual: true },
      { key: 'financing_approach', label: 'Financing approach', required: true, maxLength: 110, factual: true },
      { key: 'outcome', label: 'Outcome', required: true, maxLength: 110, factual: true },
      { key: 'cta', label: 'CTA', required: true, maxLength: 24 },
    ],
  },
]

export function getTemplateById(id) {
  return TEMPLATES.find((template) => template.id === id)
}

export function getTemplatesForStructure(structureId, platformId, formatId) {
  return TEMPLATES.filter(
    (template) =>
      template.structureId === structureId &&
      template.platforms.includes(platformId) &&
      template.formats.includes(formatId),
  )
}
