// Dummy data only — no backend calls. Swap generateReport() for a real API call later.

const NAME_TEMPLATES = {
  apple: {
    decision: 'WATCHLIST',
    confidence: 81,
    overallScore: 78,
    businessSummary:
      'Apple shows durable brand loyalty, a tightly integrated hardware and services ecosystem, and consistent cash generation. The agent identifies it as a financially meaningful business but recommends further valuation review.',
    financialHealth:
      'Revenue quality appears stable across hardware and services, profitability signals are strong, and balance sheet risk is low based on the sample analysis.',
    positives: [
      'Deep ecosystem lock-in across devices and services',
      'Recognizable brand and loyal customer base',
      'Strong free cash flow generation',
      'Growing high-margin services revenue',
    ],
    risks: [
      'Valuation may already price in future growth',
      'Hardware upgrade cycles are lengthening',
      'Regulatory pressure on App Store economics',
      'AI output requires human verification',
    ],
    recentNews:
      'Recent coverage centers on services growth and regulatory scrutiny in key markets. The agent recommends checking live news and financial filings before making a final decision.',
    finalReasoning:
      'The agent gives a WATCHLIST rating because ecosystem strength and cash flow are compelling, but current valuation and regulatory risk warrant a closer look before investing.',
    tagline: 'Strong ecosystem and profitability, but valuation needs review.',
  },
  nvidia: {
    decision: 'INVEST',
    confidence: 88,
    overallScore: 84,
    businessSummary:
      'Nvidia sits at the center of AI infrastructure buildout, with a dominant position in data center accelerators and a fast-expanding software layer. The agent identifies strong secular demand tailwinds.',
    financialHealth:
      'Revenue growth is exceptional, margins remain elevated, and the balance sheet shows low leverage based on the sample analysis.',
    positives: [
      'Dominant share in AI accelerator hardware',
      'High-margin software and platform ecosystem',
      'Strong multi-year demand visibility',
      'Consistent execution on product roadmap',
    ],
    risks: [
      'High market expectations already reflected in price',
      'Customer concentration among large cloud providers',
      'Rising competition from custom silicon',
      'AI output requires human verification',
    ],
    recentNews:
      'Recent discussion highlights continued AI infrastructure spending alongside questions about the pace of future growth. The agent recommends checking live news and financial filings before making a final decision.',
    finalReasoning:
      'The agent gives an INVEST rating because demand strength and execution outweigh near-term valuation concerns, though expectations leave little room for error.',
    tagline: 'Strong AI growth momentum with high market expectations.',
  },
  tesla: {
    decision: 'WATCHLIST',
    confidence: 74,
    overallScore: 72,
    businessSummary:
      'Tesla combines a leading EV brand with ambitions in energy storage and autonomy, but faces intensifying competition and margin pressure. The agent identifies a business in transition.',
    financialHealth:
      'Revenue growth has slowed, margins are under pressure from pricing actions, and balance sheet risk is moderate based on the sample analysis.',
    positives: [
      'Recognized brand in electric vehicles',
      'Expanding energy storage business',
      'Vertical integration across manufacturing',
      'Optionality from autonomy and robotics bets',
    ],
    risks: [
      'Intensifying EV price competition',
      'Margin compression from recent price cuts',
      'Execution risk on new product timelines',
      'AI output requires human verification',
    ],
    recentNews:
      'Recent coverage is mixed, weighing delivery numbers against new competition and evolving autonomy timelines. The agent recommends checking live news and financial filings before making a final decision.',
    finalReasoning:
      'The agent gives a WATCHLIST rating because brand strength and optionality are notable, but margin trends and competition should be reviewed before investing.',
    tagline: 'Innovative business with volatility and execution risk.',
  },
}

const DECISION_POOL = ['INVEST', 'WATCHLIST', 'PASS']

// Small deterministic hash so the same company name always produces the same
// dummy result (instead of a random one on every click).
function hashString(value) {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0
  }
  return hash
}

function buildGenericReport(companyName, hash) {
  const decision = DECISION_POOL[hash % DECISION_POOL.length]
  const confidence = 60 + (hash % 31)
  const overallScore = 55 + ((hash >> 3) % 41)

  return {
    decision,
    confidence,
    overallScore,
    businessSummary: `${companyName} shows a recognizable market position and an operating model the agent could evaluate from available signals. The agent identifies it as a business worth a closer valuation review.`,
    financialHealth: `Revenue and profitability signals for ${companyName} appear within a normal range for its sector, with balance sheet risk assessed as moderate based on the sample analysis.`,
    positives: [
      'Identifiable competitive position in its sector',
      'Recognizable brand and existing customer base',
      'Potential for long-term growth',
      'Reasonably scalable operating model',
    ],
    risks: [
      'Valuation may already price in future growth',
      'Market volatility can affect short-term returns',
      'Sector competition remains high',
      'AI output requires human verification',
    ],
    recentNews: `Recent market discussion around ${companyName} appears mixed but generally constructive. The agent recommends checking live news and financial filings before making a final decision.`,
    finalReasoning: `The agent gives a ${decision} rating for ${companyName} based on the sample signals available, but risk and valuation should be reviewed before investing.`,
  }
}

// Returns a full dummy report for any typed company name.
export function generateReport(companyName) {
  const trimmedName = companyName.trim()
  const key = trimmedName.toLowerCase()
  const template = NAME_TEMPLATES[key]
  const base = template ?? buildGenericReport(trimmedName, hashString(key))

  return {
    company: trimmedName,
    disclaimer: 'This is an AI-generated research demo and not financial advice.',
    ...base,
  }
}

// Fixed example data shown in the "Example Runs" section.
export const EXAMPLE_RUNS = [
  { company: 'Apple', ...NAME_TEMPLATES.apple },
  { company: 'Nvidia', ...NAME_TEMPLATES.nvidia },
  { company: 'Tesla', ...NAME_TEMPLATES.tesla },
]
