/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { type DetailedHTMLProps, type HTMLAttributes, useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { createCssVariablesTheme, createHighlighterCore } from "shiki/core";
// import { loadWasm } from 'shiki/engine/oniguruma'
import { createOnigurumaEngine } from "shiki/engine/oniguruma";
// import getWasm from "shiki/wasm";
import "./index.css";

type ExtendProps = { extend?: stylex.StyleXStyles };

// TODO: highlight lines
// TODO: will likely need to render span lines explicitly to get good line number styling and selection
// TODO: line numbers shouldn't scroll away but be fixed to the left edge

const styles = stylex.create({
	base: {},
});

const cust_variables_theme = createCssVariablesTheme({
	name: "css-variables",
	variablePrefix: "--code-block-shiki-",
	variableDefaults: {},
	fontStyle: true,
});

const highlighter = await createHighlighterCore({
	langs: [],

	themes: [
		import("shiki/themes/github-dark.mjs"),
		import("shiki/themes/github-light.mjs"),
		// import("shiki/themes/css")
	],

	// loadWasm: getWasm,
	engine: createOnigurumaEngine(() => import("shiki/wasm")),
});

interface I_CodeBlockProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	languageModule: any;
	language: string; // TODO: should restrict this to valid shiki languages

	code: string;

	showLineNumber?: boolean;
	wrapText?: boolean;
	theme?: "light" | "dark";
}

const CodeBlock = ({
	extend,
	language,
	languageModule,
	code,
	wrapText = false,
	showLineNumber = false,
	theme = "dark",
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
	I_CodeBlockProps &
	ExtendProps) => {
	const [html, setHtml] = useState("");

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		GetCodeMarkup();
	}, [code, languageModule, language, theme]);

	async function GetCodeMarkup() {
		if (!highlighter.getLoadedLanguages().includes(language)) {
			await highlighter.loadLanguage(languageModule);
		}

		const highlightedCode = highlighter.codeToHtml(code, {
			lang: language,
			theme: cust_variables_theme,
			// theme === "dark" ? "github-dark" : "github-light",
			// https://shiki.style/guide/transformers#transformers
		});

		// console.log(highlightedCode);
		setHtml(highlightedCode);
	}

	return (
		<div
			ref={ref}
			{...stylex.props(styles.base, extend)}
			className={
				// biome-ignore lint/style/useTemplate: <explanation>
				"code_target " +
				(showLineNumber && " code_target_line_number ") +
				(wrapText && " code_target_text_wrap ")
			}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={{
				__html: html,
			}}
			{...props}
		/>
	);
};
CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
