import { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: 'Is this financial advice?',
    answer:
      'No. InvestIQ is a research demo. Every report ends with a disclaimer, and any real decision should involve your own due diligence or a licensed advisor.',
  },
  {
    question: 'Where does the data come from right now?',
    answer:
      'This build uses dummy data so the interface and flow can be reviewed before the research agent is connected to live sources.',
  },
  {
    question: 'What do Invest, Watchlist, and Pass mean?',
    answer:
      'Invest signals a strong current setup, Watchlist means the business looks solid but needs more review, and Pass flags meaningful concerns.',
  },
  {
    question: 'How is the confidence score calculated?',
    answer:
      'The agent weighs how much evidence supports its view against how much uncertainty or missing information remains.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section className="faq-section">
      <p className="section-eyebrow">// FAQ</p>
      <h2 className="section-title">Common questions</h2>

      <div className="faq-list">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={item.question} className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
              <button type="button" className="faq-question" onClick={() => toggle(index)} aria-expanded={isOpen}>
                {item.question}
                <span className="faq-icon">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="faq-answer">{item.answer}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
