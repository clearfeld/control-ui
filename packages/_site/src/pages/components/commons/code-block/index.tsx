import React from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import dart from "highlight.js/lib/languages/dart";
import bash from "highlight.js/lib/languages/bash";
import "highlight.js/styles/vs2015.css";

interface I_CodeBlockProps {
  language: "typescript" | "dart" | "bash";
  code: string;
}
export default function CodeBlock({ language, code }: I_CodeBlockProps) {
  hljs.registerLanguage("typescript", typescript);
  hljs.registerLanguage("dart", dart);
  hljs.registerLanguage("bash", bash);

  function GetCodeMarkup() {
    const highlightedCode = hljs.highlight(code, {
      language: language ?? "typescript",
    }).value;

    return highlightedCode;
  }
  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: GetCodeMarkup() }} />
    </pre>
  );
}
