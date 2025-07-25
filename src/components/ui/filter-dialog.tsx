"use client"

import * as React from "react"
import { Info, AlertTriangle, RotateCcw } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FilterOption {
  value: string
  label: string
}

interface FilterDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  countryOptions?: FilterOption[]
  currencyOptions?: FilterOption[]
  companyOptions?: FilterOption[]
  selectedCountry?: string
  selectedCurrency?: string
  selectedCompany?: string
  onCountryChange?: (value: string) => void
  onCurrencyChange?: (value: string) => void
  onCompanyChange?: (value: string) => void
  onReset?: () => void
  onApply?: () => void
  onClose?: () => void
  showValidationErrors?: boolean
}

export function FilterDialog({
  open,
  onOpenChange,
  title = "Filter your daily cash position view",
  description = "Customize your view of accounts and balances. Be sure to select at least one option from each filter.",
  countryOptions = [],
  currencyOptions = [],
  companyOptions = [],
  selectedCountry,
  selectedCurrency,
  selectedCompany,
  onCountryChange,
  onCurrencyChange,
  onCompanyChange,
  onReset,
  onApply,
  onClose,
  showValidationErrors = false,
}: FilterDialogProps) {
  const hasCountryError = showValidationErrors && !selectedCountry
  const hasCurrencyError = showValidationErrors && !selectedCurrency
  const hasCompanyError = showValidationErrors && !selectedCompany
  const hasAnyError = hasCountryError || hasCurrencyError || hasCompanyError

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-6">
        <DialogHeader className="space-y-3">
          <DialogTitle className="flex items-center gap-2 text-xl font-semibold">
            {title}
            <Info className="h-5 w-5 text-muted-foreground" />
          </DialogTitle>
          <DialogDescription className="text-base text-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {hasAnyError && (
            <Alert variant="destructive" className="bg-red-50 border-red-200">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Select at least one option from each filter to apply to your daily cash position view.
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-4">
            <FilterSelect
              label="Account country of domicile"
              placeholder="Select country"
              options={countryOptions}
              value={selectedCountry}
              onValueChange={onCountryChange}
              hasError={hasCountryError}
            />

            <FilterSelect
              label="Account currency"
              placeholder="Select currency"
              options={currencyOptions}
              value={selectedCurrency}
              onValueChange={onCurrencyChange}
              hasError={hasCurrencyError}
            />

            <FilterSelect
              label="Company"
              placeholder="Select company"
              options={companyOptions}
              value={selectedCompany}
              onValueChange={onCompanyChange}
              hasError={hasCompanyError}
            />
          </div>

          <div className="flex justify-center">
            <Button
              variant="ghost"
              onClick={onReset}
              className="text-blue-500 hover:text-blue-600 hover:bg-blue-50"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset filter
            </Button>
          </div>
        </div>

        <DialogFooter className="flex gap-3 sm:gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Close
          </Button>
          <Button
            onClick={onApply}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white"
          >
            Apply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

interface FilterSelectProps {
  label: string
  placeholder: string
  options: FilterOption[]
  value?: string
  onValueChange?: (value: string) => void
  hasError?: boolean
}

function FilterSelect({
  label,
  placeholder,
  options,
  value,
  onValueChange,
  hasError = false,
}: FilterSelectProps) {
  return (
    <div className="space-y-2">
      <label className={cn(
        "text-sm font-medium",
        hasError ? "text-red-600" : "text-foreground"
      )}>
        {label}
      </label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className={cn(
          "w-full",
          hasError && "border-red-300 focus:border-red-500 focus:ring-red-500"
        )}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {hasError && (
        <div className="flex items-center gap-1 text-sm text-red-600">
          <AlertTriangle className="h-3 w-3" />
          Select at least one option
        </div>
      )}
    </div>
  )
}
