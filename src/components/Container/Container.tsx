import { FC } from "react";
import ReactMarkdown from "react-markdown";

interface containerProps {
	markdown: string;
}

export const Container: FC<containerProps> = ({ markdown }) => (
	<ReactMarkdown children={markdown} />
);
