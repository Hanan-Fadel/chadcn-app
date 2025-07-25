import type { Meta, StoryObj } from '@storybook/react'
import { FilterDialog } from '@/components/ui/filter-dialog'
import { useState } from 'react'

const meta: Meta<typeof FilterDialog> = {
  title: 'Components/FilterDialog',
  component: FilterDialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable filter dialog component for filtering daily cash position views with country, currency, and company selections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the dialog is open or closed',
    },
    title: {
      control: 'text',
      description: 'The title displayed in the dialog header',
    },
    description: {
      control: 'text',
      description: 'The description text below the title',
    },
    showValidationErrors: {
      control: 'boolean',
      description: 'Whether to show validation error messages',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample data for the stories
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
