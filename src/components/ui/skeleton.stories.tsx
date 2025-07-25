import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    a11y: {
      element: "#root",
    },
  },
  args: {
    className: "w-40 h-6",
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};
