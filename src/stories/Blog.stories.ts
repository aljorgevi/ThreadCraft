import type { Meta, StoryObj } from "@storybook/react";

import { Blog } from "../components/Blog/Blog";
import { markdown } from "../constans/markdown";

const meta = {
	title: "Blog",
	component: Blog,
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		markdown,
		blogStyles: {
			height: "544px",
		},
		title: "Blog Title",
		description: "Blog Description",
		image:
			"https://cdn.shopify.com/s/files/1/0293/3928/7612/t/8/assets/ad27cd772c54--AlexB-BlogHeader.jpg?v=1683272580",
	},
};
