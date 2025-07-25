import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    a11y: {
      element: "#root",
      config: {},
      options: {
        rules: {
          // WCAG compliance rules
          "color-contrast": { enabled: true },
        },
      },
    },
  },
  args: {
    children: "Click Me",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
