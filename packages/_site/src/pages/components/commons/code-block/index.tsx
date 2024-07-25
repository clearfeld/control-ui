import { createHighlighterCore } from "shiki/core";
import getWasm from "shiki/wasm";

import "./index.css";

const highlighter = await createHighlighterCore({
	langs: [
		import("shiki/langs/tsx.mjs"),
		import("shiki/langs/jsx.mjs"),
		import("shiki/langs/javascript.mjs"),
		import("shiki/langs/typescript.mjs"),
		import("shiki/langs/html.mjs"),
		import("shiki/langs/css.mjs"),
	],

	themes: [import("shiki/themes/github-dark.mjs"), import("shiki/themes/github-light.mjs")],

	loadWasm: getWasm,
});

interface I_CodeBlockProps {
	language: "tsx" | "jsx" | "typescript" | "javascript" | "html" | "css";
	code: string;
}

export default function CodeBlock({ language, code }: I_CodeBlockProps) {
	function GetCodeMarkup() {
		const highlightedCode = highlighter.codeToHtml(code, {
			lang: language ?? "tsx",
			theme: "github-dark",
		});

		return highlightedCode;
	}

	return (
		<pre className="pre_unstyle">
			<code
				className="code_target"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{
					__html: GetCodeMarkup(),
				}}
			/>
		</pre>
	);
}
