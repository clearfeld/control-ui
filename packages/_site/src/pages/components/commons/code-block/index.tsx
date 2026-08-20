/* eslint-disable react-hooks/exhaustive-deps */
import { CodeBlock } from "@controlkit/code-block";
import "@controlkit/code-block/dist/code-block.css";
import { useEffect, useMemo, useState } from "react";

import * as stylex from "@stylexjs/stylex";

import "./index.css";

const styles = stylex.create({
	base: {
		scrollbarColor: "#9f9f9f transparent",
		scrollbarWidth: "thin",
		maxWidth: "846px",
		width: "100%",
	}
});

interface I_CodeBlockProps {
	language: string;
	url?: string;
	code?: string;
}

export default function CodeBlockInternal({ language, url, code }: I_CodeBlockProps) {
	const [value, setValue] = useState<string>("");
	const tsxModule = useMemo(() => import("shiki/langs/tsx.mjs"), []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (code) {
			setValue(code);
		}

		if (url) {
			fetch(url)
				.then((res) => {
					// console.log(res);
					res.text().then((res) => {
						// console.log(res);
						setValue(res);
					})
				}).catch((err) => {
					console.error(err);
				})
		}
	}, []);

	return (
		<CodeBlock
			language={language}
			languageModule={tsxModule}
			code={value}
			{...stylex.props(styles.base)}
		/>
	);
}
