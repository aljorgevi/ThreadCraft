import type { Meta, StoryObj } from "@storybook/react";

import { Blog } from "./Blog";

const meta = {
	title: "Blog",
	component: Blog,
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Blog Title",
		description: "Blog Description",
		image:
			"https://cdn.shopify.com/s/files/1/0293/3928/7612/t/8/assets/ad27cd772c54--AlexB-BlogHeader.jpg?v=1683272580",
	},
};
