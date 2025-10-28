'use client'

import { useState } from 'react'
import StructuredData from './structured-data'
import { getFAQSchema } from '@/lib/schema'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
  className?: string
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions', className = '' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  // Create FAQ schema
  const schemaData = getFAQSchema(faqs)

  return (
    <>
      <StructuredData data={schemaData} id="faq-schema" />
      <section className={`py-16 px-4 ${className}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">{title}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  aria-expanded={openIndex === index ? 'true' : 'false'}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-gray-500 text-xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

