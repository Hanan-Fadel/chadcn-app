````markdown
# FilterDialog Component Documentation

The `FilterDialog` component provides a customizable modal for applying filters based on country, currency, and company. It is built using Shadcn UI components and includes validation for ensuring all filter options are selected.

## Installation

This component is part of the existing project structure. Ensure you have the necessary Shadcn UI dependencies installed as per the project's `package.json`.

## Usage

To use the `FilterDialog` component, import it and render it within your React component. You need to manage its open state and provide the necessary filter options and handlers.

```typescript
import React, { useState } from "react";
import { FilterDialog } from "@/components/ui/filter-dialog";

const MyFilteringComponent = () => {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    undefined
  );
  const [selectedCurrency, setSelectedCurrency] = useState<string | undefined>(
    undefined
  );
  const [selectedCompany, setSelectedCompany] = useState<string | undefined>(
    undefined
  );
  const [showValidationErrors, setShowValidationErrors] = useState(false);

  const countryOptions = [
    { value: "USA", label: "United States" },
    { value: "CAN", label: "Canada" },
  ];

  const currencyOptions = [
    { value: "USD", label: "US Dollar" },
    { value: "CAD", label: "Canadian Dollar" },
  ];

  const companyOptions = [
    { value: "CompanyA", label: "Company A" },
    { value: "CompanyB", label: "Company B" },
  ];

  const handleApplyFilters = () => {
    if (!selectedCountry || !selectedCurrency || !selectedCompany) {
      setShowValidationErrors(true);
      return;
    }
    // Apply filter logic here
    console.log("Applying filters:", {
      selectedCountry,
      selectedCurrency,
      selectedCompany,
    });
    setIsFilterDialogOpen(false);
    setShowValidationErrors(false);
  };

  const handleResetFilters = () => {
    setSelectedCountry(undefined);
    setSelectedCurrency(undefined);
    setSelectedCompany(undefined);
    setShowValidationErrors(false);
  };

  return (
    <>
      <button onClick={() => setIsFilterDialogOpen(true)}>Open Filter</button>
      <FilterDialog
        open={isFilterDialogOpen}
        onOpenChange={setIsFilterDialogOpen}
        countryOptions={countryOptions}
        currencyOptions={currencyOptions}
        companyOptions={companyOptions}
        selectedCountry={selectedCountry}
        selectedCurrency={selectedCurrency}
        selectedCompany={selectedCompany}
        onCountryChange={setSelectedCountry}
        onCurrencyChange={setSelectedCurrency}
        onCompanyChange={setSelectedCompany}
        onReset={handleResetFilters}
        onApply={handleApplyFilters}
        onClose={() => {
          setIsFilterDialogOpen(false);
          setShowValidationErrors(false);
        }}
        showValidationErrors={showValidationErrors}
      />
    </>
  );
};

export default MyFilteringComponent;
```
````

## Props

The `FilterDialog` component accepts the following props:

| Prop Name              | Type                      | Default Value                                                                                             | Description                                                                                                                   | Required |
| :--------------------- | :------------------------ | :-------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| `open`                 | `boolean`                 | `false`                                                                                                   | Controls the visibility of the dialog.                                                                                        | Yes      |
| `onOpenChange`         | `(open: boolean) => void` | `() => {}`                                                                                                | Callback function triggered when the dialog's open state changes (e.g., when clicking outside or pressing Escape).            | Yes      |
| `title`                | `string`                  | `"Filter your daily cash position view"`                                                                  | The title displayed in the dialog header.                                                                                     | No       |
| `description`          | `string`                  | `"Customize your view of accounts and balances. Be sure to select at least one option from each filter."` | The description displayed below the title.                                                                                    | No       |
| `countryOptions`       | `FilterOption[]`          | `[]`                                                                                                      | An array of objects, each with `value` and `label` for country filter options.                                                | No       |
| `currencyOptions`      | `FilterOption[]`          | `[]`                                                                                                      | An array of objects, each with `value` and `label` for currency filter options.                                               | No       |
| `companyOptions`       | `FilterOption[]`          | `[]`                                                                                                      | An array of objects, each with `value` and `label` for company filter options.                                                | No       |
| `selectedCountry`      | `string \| undefined`     | `undefined`                                                                                               | The currently selected country value.                                                                                         | No       |
| `selectedCurrency`     | `string \| undefined`     | `undefined`                                                                                               | The currently selected currency value.                                                                                        | No       |
| `selectedCompany`      | `string \| undefined`     | `undefined`                                                                                               | The currently selected company value.                                                                                         | No       |
| `onCountryChange`      | `(value: string) => void` | `() => {}`                                                                                                | Callback function triggered when the country selection changes. Receives the new selected value.                              | No       |
| `onCurrencyChange`     | `(value: string) => void` | `() => {}`                                                                                                | Callback function triggered when the currency selection changes. Receives the new selected value.                             | No       |
| `onCompanyChange`      | `(value: string) => void` | `() => {}`                                                                                                | Callback function triggered when the company selection changes. Receives the new selected value.                              | No       |
| `onReset`              | `() => void`              | `() => {}`                                                                                                | Callback function triggered when the "Reset filter" button is clicked.                                                        | No       |
| `onApply`              | `() => void`              | `() => {}`                                                                                                | Callback function triggered when the "Apply" button is clicked. This is where you'd typically implement your filtering logic. | No       |
| `onClose`              | `() => void`              | `() => {}`                                                                                                | Callback function triggered when the "Close" button is clicked.                                                               | No       |
| `showValidationErrors` | `boolean`                 | `false`                                                                                                   | If `true`, displays validation errors if any filter is not selected when `onApply` is triggered.                              | No       |

## `FilterOption` Interface

```typescript
interface FilterOption {
  value: string;
  label: string;
}
```

This interface defines the structure for the options provided to the `countryOptions`, `currencyOptions`, and `companyOptions` props.

## Internal Components

The `FilterDialog` component utilizes an internal helper component called `FilterSelect`.

### `FilterSelect` Props

| Prop Name       | Type                      | Default Value | Description                                                                         | Required |
| :-------------- | :------------------------ | :------------ | :---------------------------------------------------------------------------------- | :------- |
| `label`         | `string`                  | `""`          | The label displayed above the select input.                                         | Yes      |
| `placeholder`   | `string`                  | `""`          | The placeholder text for the select input.                                          | Yes      |
| `options`       | `FilterOption[]`          | `[]`          | An array of objects, each with `value` and `label` for select options.              | Yes      |
| `value`         | `string \| undefined`     | `undefined`   | The currently selected value of the select input.                                   | No       |
| `onValueChange` | `(value: string) => void` | `() => {}`    | Callback function triggered when the select input's value changes.                  | No       |
| `hasError`      | `boolean`                 | `false`       | If `true`, applies error styling to the select input and displays an error message. | No       |

## Styling

The component uses Tailwind CSS for styling. You can customize its appearance by overriding Tailwind classes or by modifying the component's internal styles if necessary.

## Validation

The `FilterDialog` includes built-in validation. If `showValidationErrors` is `true` and any of the country, currency, or company filters are not selected when the "Apply" button is clicked, an alert message will be displayed, and the `onApply` function will not be triggered.

## Contributing

If you need to modify or extend this component, ensure you understand its current implementation and adhere to the project's coding standards.

```

```
