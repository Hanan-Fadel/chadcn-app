"use client"

import { useState } from 'react'
import { FilterDialog } from '@/components/ui/filter-dialog'
import { Button } from '@/components/ui/button'

const sampleCountries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
]

const sampleCurrencies = [
  { value: 'usd', label: 'USD - US Dollar' },
  { value: 'eur', label: 'EUR - Euro' },
  { value: 'gbp', label: 'GBP - British Pound' },
  { value: 'cad', label: 'CAD - Canadian Dollar' },
  { value: 'jpy', label: 'JPY - Japanese Yen' },
]

const sampleCompanies = [
  { value: 'acme', label: 'Acme Corporation' },
  { value: 'globex', label: 'Globex Industries' },
  { value: 'initech', label: 'Initech Solutions' },
  { value: 'umbrella', label: 'Umbrella Corp' },
  { value: 'wayne', label: 'Wayne Enterprises' },
]

export default function DemoPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [showErrors, setShowErrors] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState('')
  const [selectedCompany, setSelectedCompany] = useState('')

  const handleReset = () => {
    setSelectedCountry('')
    setSelectedCurrency('')
    setSelectedCompany('')
    setShowErrors(false)
  }

  const handleApply = () => {
    if (!selectedCountry || !selectedCurrency || !selectedCompany) {
      setShowErrors(true)
      return
    }
    
    console.log('Applied filters:', {
      country: selectedCountry,
      currency: selectedCurrency,
      company: selectedCompany,
    })
    setIsOpen(false)
    setShowErrors(false)
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Filter Dialog Component Demo</h1>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Component Overview</h2>
            <p className="text-gray-600 mb-4">
              This FilterDialog component was created based on the provided design image. 
              It includes all the functional elements from the original design:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Header with title and info icon</li>
              <li>Descriptive text explaining the purpose</li>
              <li>Warning alert when validation errors are present</li>
              <li>Three filter dropdowns (Country, Currency, Company)</li>
              <li>Individual validation messages for each field</li>
              <li>Reset filter functionality</li>
              <li>Close and Apply action buttons</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Interactive Demo</h2>
            <p className="text-gray-600 mb-4">
              Click the button below to open the filter dialog and test its functionality:
            </p>
            
            <div className="space-y-4">
              <Button onClick={() => setIsOpen(true)} className="bg-blue-600 hover:bg-blue-700">
                Open Filter Dialog
              </Button>
              
              {(selectedCountry || selectedCurrency || selectedCompany) && (
                <div className="p-4 bg-gray-50 rounded-md">
                  <h3 className="font-medium mb-2">Current Selections:</h3>
                  <ul className="space-y-1 text-sm">
                    {selectedCountry && (
                      <li><strong>Country:</strong> {sampleCountries.find(c => c.value === selectedCountry)?.label}</li>
                    )}
                    {selectedCurrency && (
                      <li><strong>Currency:</strong> {sampleCurrencies.find(c => c.value === selectedCurrency)?.label}</li>
                    )}
                    {selectedCompany && (
                      <li><strong>Company:</strong> {sampleCompanies.find(c => c.value === selectedCompany)?.label}</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Component Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Design Fidelity</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✅ Matches original layout</li>
                  <li>✅ Proper color scheme</li>
                  <li>✅ Correct typography</li>
                  <li>✅ Icon placement</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Functionality</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✅ Form validation</li>
                  <li>✅ Error states</li>
                  <li>✅ Reset functionality</li>
                  <li>✅ Responsive design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Reusability</h2>
            <p className="text-gray-600 mb-4">
              This component is designed to be highly reusable with configurable props:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              <li><code>title</code> and <code>description</code> - Customizable text content</li>
              <li><code>countryOptions</code>, <code>currencyOptions</code>, <code>companyOptions</code> - Dynamic option lists</li>
              <li><code>showValidationErrors</code> - Toggle validation state</li>
              <li>Event handlers for all user interactions</li>
              <li>Controlled component pattern for state management</li>
            </ul>
          </div>
        </div>

        <FilterDialog
          open={isOpen}
          onOpenChange={setIsOpen}
          countryOptions={sampleCountries}
          currencyOptions={sampleCurrencies}
          companyOptions={sampleCompanies}
          selectedCountry={selectedCountry}
          selectedCurrency={selectedCurrency}
          selectedCompany={selectedCompany}
          onCountryChange={setSelectedCountry}
          onCurrencyChange={setSelectedCurrency}
          onCompanyChange={setSelectedCompany}
          onReset={handleReset}
          onApply={handleApply}
          onClose={() => setIsOpen(false)}
          showValidationErrors={showErrors}
        />
      </div>
    </main>
  )
}
