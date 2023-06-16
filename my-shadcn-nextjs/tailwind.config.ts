import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

import { shadcnPlugin } from "./lib/shadcn-plugin";

const Config = {

  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  plugins: [animatePlugin, shadcnPlugin],
};

export default Config;

