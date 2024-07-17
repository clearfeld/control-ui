import {
  createHighlighter
} from 'shiki/bundle/web'

import "./index.css";

const highlighter = await createHighlighter({
  langs: ['html', 'css', 'js', 'ts'],
  themes: ['github-dark', 'github-light'],
})

interface I_CodeBlockProps {
  language: "typescript" | "javascript" | "html" | "css";
  code: string;
}

export default function CodeBlock({ language, code }: I_CodeBlockProps) {
  function GetCodeMarkup() {
    const highlightedCode = highlighter.codeToHtml(code, {
      lang: language ?? 'typescript',
      theme: 'github-dark'
    });

    return highlightedCode;
  }

  return (
    <pre>
      <code
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: GetCodeMarkup()
        }}
      />
    </pre>
  );
}
