import "./blog.scss";

interface BlogProps {
	children?: JSX.Element;
	image: string;
	title: string;
	description: string;
}

export function Blog({ children, image, title, description }: BlogProps) {
	return (
		<article className="blog">
			<section className="hero">
				<div
					className="hero__image"
					style={{
						backgroundImage: `url(${image})`,
					}}
				/>
				<div className="hero__content">
					<h3 className="hero__title">{title}</h3>
					<p className="hero__description">{description}</p>
				</div>
			</section>
			{children}
		</article>
	);
}
