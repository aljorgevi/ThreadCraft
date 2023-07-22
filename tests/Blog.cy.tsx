import { Blog } from "../src/components/Blog/Blog";

describe("<MyComponent />", () => {
	it("renders", () => {
		cy.mount(
			<Blog
				image="https://cdn.shopify.com/s/files/1/0293/3928/7612/t/8/assets/ad27cd772c54--AlexB-BlogHeader.jpg?v=1683272580"
				title="My title"
				description="My description"
			>
				<div>My component</div>
			</Blog>
		);

		cy.findByText(/My component/i);
	});
});
