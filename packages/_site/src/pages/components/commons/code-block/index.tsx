/* eslint-disable react-hooks/exhaustive-deps */
import { CodeBlock } from "@controlkit/code-block";
import "@controlkit/code-block/dist/code-block.css";
import { useEffect, useState } from "react";
// import "./index.css";

interface I_CodeBlockProps {
	language: string;
	url?: string;
	code?: string;
}

export default function CodeBlockInternal({ language, url, code }: I_CodeBlockProps) {
	const [value, setValue] = useState<string>("");

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
	}, [])

	return (
		<CodeBlock
			language={language}
			languageModule={
				import("shiki/langs/tsx.mjs")
			}
			code={value}
		/>
	);
}
