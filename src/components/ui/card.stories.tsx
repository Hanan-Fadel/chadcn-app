import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    a11y: {
      element: "#root",
      config: {},
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Example: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Team Profile</CardTitle>
        <CardDescription>Manage user access and roles</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is where your card content goes.</p>
      </CardContent>
      <CardFooter>
        <button className="text-sm underline">Edit</button>
      </CardFooter>
    </Card>
  ),
};
