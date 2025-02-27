import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';
import { CodeBlock } from "@controlkit/code-block";
import "@controlkit/code-block/dist/code-block.css";

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",

        width: "100%",
		overflow: "auto",
		maxWidth: "100%",
    },
});

export default function CodeBlockGroup() {
    return (
        <div {...stylex.props(styles.group)}>
            <H2>Code Block (WIP)</H2>

            <div {...stylex.props(styles.row)}>
                <div {...stylex.props(page_styles.row)}>
                    <CodeBlock
                        language="c"
                        languageModule={import("shiki/langs/c.mjs")}
                        // theme="light"
                        code={`float Q_rsqrt(float number)
{
  long i;
  float x2, y;
  const float threehalfs = 1.5F;

  x2 = number * 0.5F;
  y  = number;
  i  = * ( long * ) &y;                       // evil floating point bit level hacking
  i  = 0x5f3759df - ( i >> 1 );               // what the fudge?
  y  = * ( float * ) &i;
  y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
  // y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

  return y;
}`}
                    />

<CodeBlock
                        language="c"
                        languageModule={import("shiki/langs/c.mjs")}
                        showLineNumber
                        wrapText
                        // theme="light"
                        code={`float Q_rsqrt(float number)
{
  long i;
  float x2, y;
  const float threehalfs = 1.5F;

  x2 = number * 0.5F;
  y  = number;
  i  = * ( long * ) &y;                       // evil floating point bit level hacking
  i  = 0x5f3759df - ( i >> 1 );               // what the fudge?
  y  = * ( float * ) &i;
  y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
  // y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

  return y;
}`}
                    />
                </div>
            </div>
        </div>
    );
}
