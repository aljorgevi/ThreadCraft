import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "../components/Container/Container";
import { markdown } from "../constans/markdown";

const meta = {
	title: "Container",
	component: Container,
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		markdown,
	},
};
