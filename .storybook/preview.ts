import type { Preview } from "@storybook/react";
import "../src/app/globals.css"; // Tailwind styles

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
    a11y: {
      // Optional: configure accessibility addon parameters
      element: "#storybook-root",
      config: {},
      options: {},
      manual: true,
    },
  },
};

export default preview;
