import * as stylex from "@stylexjs/stylex";
import type { PropsWithChildren } from "react";

const styles = stylex.create({
	base: {
		padding: "var(--ds-space-300, 24px)",
		backgroundColor: "var(--ds-surface, #ffffff)",
		backgroundImage: `linear-gradient(
            45deg,
            var(--ds-surface-sunken, #f9f9fa) 25%,
            transparent 25%
          ),
          linear-gradient(
            135deg,
            var(--ds-surface-sunken, #f9f9fa) 25%,
            transparent 25%
          ),
          linear-gradient(
            45deg,
            transparent 75%,
            var(--ds-surface-sunken, #f9f9fa) 75%
          ),
          linear-gradient(
            135deg,
            transparent 75%,
            var(--ds-surface-sunken, #f9f9fa) 75%
          )`,
		backgroundSize: "20px 20px",
		backgroundPosition: "0px 0px, 10px 0px, 10px -10px, 0px 10px",
		// border-radius: var(--ds-border-radius, 3px) var(--ds-border-radius, 3px) 0 0;
		// border-bottom: var(--ds-border-width, 1px) solid var(--ds-border, #EBECF0);
	},
});

interface PreviewBlock {
	extend?: stylex.StyleXStyles;
}

function PreviewBlock({ children }: PropsWithChildren<PreviewBlock>) {
	return <div {...stylex.props(styles.base)}>{children}</div>;
}

export { PreviewBlock };
