import stylex from "@stylexjs/stylex";
import React, { ComponentPropsWithoutRef } from "react";

const styles = stylex.create({
  wrapper: {
    /* padding: "0.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "var(--border-radius)",
    backgroundColor: {
      default: "transparent",
    }, */
  },

  button: {
    padding: "0.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "var(--border-radius)",
    backgroundColor: {
      default: "transparent",
      ":hover": "var(--cds-gray-300)",
    },
    border: "unset",
    outline: "unset",
  },
});
interface I_CopyButtonProps extends ComponentPropsWithoutRef<"button"> {
  value: string;
}
export default function CopyButton({ value, ...rest }: I_CopyButtonProps) {
  //TODO add a toast alert
  return (
    <div {...stylex.props(styles.wrapper)}>
      <button
        {...stylex.props(styles.button)}
        onClick={() => navigator.clipboard.writeText(value)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="12"
          height="12"
          fill="#CCCCCC">
          <path d="M7 4V2H17V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z"></path>
        </svg>
      </button>
    </div>
  );
}