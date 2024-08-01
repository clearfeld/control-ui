import { CodeBlock } from "@controlkit/code-block";
import "@controlkit/code-block/dist/style.css";
// import "./index.css";

interface I_CodeBlockProps {
	language: string;
	code: string;
}

export default function CodeBlockInternal({ language, code }: I_CodeBlockProps) {
	return (
		<CodeBlock
			language={language}
			languageModule={
				import("shiki/langs/tsx.mjs")
			}
			// theme="light"
			code={code}
		/>
	);
}
