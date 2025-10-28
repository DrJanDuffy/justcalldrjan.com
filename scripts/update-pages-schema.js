// Helper script to update remaining pages with Article schema
// This is just a reference - actual updates will be done via search_replace

const pagesToUpdate = {
  'sub-neighborhoods': [
    { path: 'app/neighborhoods/summerlin/the-foothills/page.tsx', name: 'The Foothills', date: '2024-05-05' },
    { path: 'app/neighborhoods/summerlin/sun-city/page.tsx', name: 'Sun City', date: '2024-05-10' },
    { path: 'app/neighborhoods/henderson/green-valley/page.tsx', name: 'Green Valley', date: '2024-05-15' },
    { path: 'app/neighborhoods/henderson/lake-las-vegas/page.tsx', name: 'Lake Las Vegas', date: '2024-05-20' },
    { path: 'app/neighborhoods/henderson/macdonald-ranch/page.tsx', name: 'MacDonald Ranch', date: '2024-05-25' },
    { path: 'app/neighborhoods/north-las-vegas/skye-canyon/page.tsx', name: 'Skye Canyon', date: '2024-05-30' },
    { path: 'app/neighborhoods/downtown-las-vegas/fremont/page.tsx', name: 'Fremont', date: '2024-06-01' },
  ],
  'berkshire': [
    { path: 'app/berkshire-hathaway/marketing-power/page.tsx', name: 'Institutional Marketing Power', date: '2024-06-05' },
    { path: 'app/berkshire-hathaway/pricing-mastery/page.tsx', name: 'Pricing Mastery', date: '2024-06-10' },
    { path: 'app/berkshire-hathaway/communication/page.tsx', name: 'Proactive Communication', date: '2024-06-15' },
    { path: 'app/berkshire-hathaway/turnaround-plan/page.tsx', name: 'Turnaround Plan', date: '2024-06-20' },
    { path: 'app/berkshire-hathaway/comparison/page.tsx', name: 'Brokerage Comparison', date: '2024-06-25' },
  ]
}

console.log('Pages to update:', JSON.stringify(pagesToUpdate, null, 2))

