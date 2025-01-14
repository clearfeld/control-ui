"use client";

import type React from "react";
import { forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

type ExtendProps = { extend?: stylex.StyleXStyles };
export interface NumberProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string,
	description?: string,
	error?: string

}

const styles = stylex.create({
	base: {
		borderRadius: "0.25rem",
		border: "0.0625rem solid var(--input-border-color, var(--border-color, #333333))",

		":hover": {
			border: "0.0625rem solid var(--input-hover-color, #B3B3B3)",
		},

		boxSizing: "border-box",
		transitionProperty:
			"color, background-color, border-color, text-decoration-color, fill, stroke",
		transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
		transitionDuration: "var(--transition-speed, 0.2s)",
		boxShadow: "0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.05)",
		backgroundColor: "var(--background-color)",
	},
	textInput: {
		display: "inline",

		paddingTop: "0.25rem",
		paddingBottom: "0.25rem",
		paddingLeft: "0.75rem",

		outline: "none",
		width: "calc(100% - 4.4rem - 0.125rem)",

		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		color: "var(--input-text, var(--text-color, #FCFCFC))",
		"::placeholder": {
			color: "var(--input-text-placeholder, #666666)",
		},
		backgroundColor: "transparent",
		border: "none",
	},

	// TODO(clearfeld): add variants
	success: {
		border: "0.0625rem solid var(--input-success-color, #44cb69)",
	},

	error: {
		border: "0.0625rem solid var(--input-error-color, #ff2e00)",
	},

	disabled: {
		opacity: "0.75",
		pointerEvents: "none",
	},
	buttons: {
		display: "inline"
	},
	button: {
		display: "inline",
		":hover": {
			color: "0.0625rem solid var(--input-hover-color, #B3B3B3)",
			backgroundColor: "var(--color-bg-compliment)",
			border: "0.0625rem solid var(--color-bg-compliment)"
		},
		":focus": {
			outline: "none",
			boxShadow: "none",
		},
		paddingTop: "0.25rem",
		paddingBottom: "0.25rem",
		width: "1.75rem",
		height: "1.75rem",
		border: "none",
		backgroundColor: "var(--color-bg)",
		color: "var(--text-color)",
	},
	plusButton: {
		marginRight: "0.125rem"
	},
	minusButton: {
		borderTopRightRadius: "0.25rem",
		borderBottomRightRadius: "0.25rem"
	},
	divider: {
		backgroundColor: "var(--border-color, #333333)",
		width: "0.0625rem",
		display: "inline",
	},
	focus: {
		border: "0.0625rem solid var(--input-error-color, #00AAFF)",
	},
	errorWrapper: {
		margin: "auto",
		display: "inline",
		height: "2rem",
		lineHeight: "2rem",
	},
	errorMsg: {
		paddingLeft: "0.5rem",
		paddingTop: "0.0625rem",
		fontSize: "0.875rem",
		display: "inline",
	},
});

const NumberInput = forwardRef<HTMLInputElement, NumberProps & ExtendProps>(
	({ extend, ...props }, ref) => {
		const [numVal, setNumVal] = useState(0);
		const [focus, setFocus] = useState(false);
		const [focusPlus, setFocusPlus] = useState(false);
		const [focusMinus, setFocusMinus] = useState(false);

		if (!props.error) {
			props.error = "";
		}

		return (
			<div>
				<div {...stylex.props(
						styles.base, 
						(focus && !props.error) && styles.focus, 
						props.error!=="" && styles.error
					)}>
					<input
						readOnly={props.readOnly}
						ref={ref}
						{...stylex.props(styles.textInput, props.disabled && styles.disabled, extend)}
						{...props}
						value={numVal}
						onChange={(e) => {
							const reg = /^\d+$/
							if (e.target.value.match(reg)) {
								setNumVal(Number.parseInt(e.target.value));
							}
							else if (e.target.value === "") {
								setNumVal(0);
							}
						}}
						onFocus={() => {
							setFocus(true)
						}}
						onBlur={() => {
							setFocus(false)
						}}
					/>
					<button {...stylex.props(styles.button, styles.plusButton, (focusPlus && props.error==="") && styles.focus, (focusPlus && props.error!=="") && styles.error, props.disabled && styles.disabled,)} 
						onClick={() => !props.disabled ? setNumVal(numVal + 1) : 0}
						onFocus={() => setFocusPlus(true)}
						onBlur={() => setFocusPlus(false)}
					>+</button>
					<button {...stylex.props(styles.button, styles.minusButton, (focusMinus && props.error==="") && styles.focus, (focusMinus && props.error!=="") && styles.error, props.disabled && styles.disabled,)} 
						onClick={() => !props.disabled ? setNumVal(numVal - 1) : 0}
						onFocus={() => setFocusMinus(true)}
						onBlur={() => setFocusMinus(false)}
					>-</button>
				</div>
				{props.error !== "" &&
				<div {...stylex.props(styles.errorWrapper)}>
					<svg
						width={"0.875rem"}
						height={"0.875rem"}
						viewBox="0 0 16 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Danger</title>
						<path
							d="M8 0.1875C6.55373 0.1875 5.13993 0.616371 3.9374 1.41988C2.73486 2.22339 1.7976 3.36544 1.24413 4.70163C0.690668 6.03781 0.545857 7.50811 0.828011 8.9266C1.11017 10.3451 1.80661 11.648 2.82928 12.6707C3.85196 13.6934 5.15492 14.3898 6.57341 14.672C7.99189 14.9541 9.46219 14.8093 10.7984 14.2559C12.1346 13.7024 13.2766 12.7651 14.0801 11.5626C14.8836 10.3601 15.3125 8.94628 15.3125 7.5C15.3105 5.56123 14.5394 3.70246 13.1685 2.33154C11.7975 0.960627 9.93877 0.189547 8 0.1875ZM10.648 9.35203C10.7002 9.40429 10.7417 9.46634 10.77 9.53462C10.7983 9.6029 10.8128 9.67609 10.8128 9.75C10.8128 9.82391 10.7983 9.8971 10.77 9.96538C10.7417 10.0337 10.7002 10.0957 10.648 10.148C10.5957 10.2002 10.5337 10.2417 10.4654 10.27C10.3971 10.2983 10.3239 10.3128 10.25 10.3128C10.1761 10.3128 10.1029 10.2983 10.0346 10.27C9.96634 10.2417 9.9043 10.2002 9.85203 10.148L8 8.29523L6.14797 10.148C6.09571 10.2002 6.03367 10.2417 5.96538 10.27C5.8971 10.2983 5.82391 10.3128 5.75 10.3128C5.67609 10.3128 5.60291 10.2983 5.53462 10.27C5.46634 10.2417 5.4043 10.2002 5.35203 10.148C5.29977 10.0957 5.25832 10.0337 5.23003 9.96538C5.20175 9.8971 5.18719 9.82391 5.18719 9.75C5.18719 9.67609 5.20175 9.6029 5.23003 9.53462C5.25832 9.46634 5.29977 9.40429 5.35203 9.35203L7.20477 7.5L5.35203 5.64797C5.24649 5.54242 5.18719 5.39927 5.18719 5.25C5.18719 5.10073 5.24649 4.95758 5.35203 4.85203C5.45758 4.74648 5.60074 4.68719 5.75 4.68719C5.89927 4.68719 6.04242 4.74648 6.14797 4.85203L8 6.70477L9.85203 4.85203C9.9043 4.79977 9.96634 4.75831 10.0346 4.73003C10.1029 4.70174 10.1761 4.68719 10.25 4.68719C10.3239 4.68719 10.3971 4.70174 10.4654 4.73003C10.5337 4.75831 10.5957 4.79977 10.648 4.85203C10.7002 4.90429 10.7417 4.96634 10.77 5.03462C10.7983 5.1029 10.8128 5.17609 10.8128 5.25C10.8128 5.32391 10.7983 5.3971 10.77 5.46538C10.7417 5.53366 10.7002 5.59571 10.648 5.64797L8.79524 7.5L10.648 9.35203Z"
							fill="var(--alert-danger-color, #FF2E00)"
						/>
					</svg>
					<div {...stylex.props(styles.errorMsg)}>
						{props.error}
					</div>
				</div>}
			</div>
		);
	},
);
NumberInput.displayName = "Number";

export { NumberInput };
