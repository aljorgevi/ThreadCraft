import "./blog.scss";

import { Container } from "../Container/Container";

interface BlogProps {
	children?: JSX.Element;
	image: string;
	title: string;
	description: string;
	blogStyles?: React.CSSProperties;
	markdown: string;
}

// TODO: add styles to each element
export function Blog({
	children,
	image,
	title,
	description,
	blogStyles = {
		height: "544px",
	},
	markdown,
}: BlogProps) {
	return (
		<article className="blog">
			<header className="header" style={blogStyles}>
				<div
					className="hero__image"
					style={{
						backgroundImage: `url(${image})`,
					}}
				/>
				<section className="hero">
					<div className="hero__content">
						<h3 className="hero__title">{title}</h3>
						<p className="hero__description">{description}</p>
					</div>
				</section>
				{children}
			</header>
			<Container markdown={markdown} />
		</article>
	);
}
