// SAMPLE DATA — stands in for Aspire's approved, uploaded loan-program library.
// Used as grounding context when Claude generates Borrower Education content.
export const LOAN_PROGRAMS = [
  {
    id: 'conventional',
    name: 'Conventional',
    summary: 'Standard financing for borrowers with strong credit and stable, documentable income.',
  },
  {
    id: 'fha',
    name: 'FHA',
    summary: 'Government-backed financing with a lower down payment minimum, popular with first-time buyers.',
  },
  {
    id: 'va',
    name: 'VA',
    summary: 'Financing for eligible veterans and service members, often with no down payment required.',
  },
  {
    id: 'jumbo',
    name: 'Jumbo',
    summary: 'Financing for loan amounts above standard conforming limits, typically for higher-value homes.',
  },
  {
    id: 'bank-statement',
    name: 'Bank-Statement',
    summary: 'Qualifies self-employed borrowers using bank deposit history instead of tax returns.',
  },
]
