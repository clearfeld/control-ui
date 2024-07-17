"use client";

import * as stylex from '@stylexjs/stylex';
import { HexAlphaColorPicker } from "react-colorful";
import { Input } from "@controlkit/input";

// NOTE: temp workaround until there's a native stylex solution for targeting child classes
import "./colorpicker.css";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
    base: {
        backgroundColor: "#0a0a0a",
        borderRadius: "0.25rem",
        width: "14rem",
    },

    title: {
        fontSize: "0.75rem",
        color: "var(--cds-text, #FCFCFC)",
        margin: 0,
        padding: "0.75rem",
    },

    input__wrapper: {
        marginLeft: "0.75rem",
        marginRight: "0.75rem",
    },

    input: {
        marginTop: "0.75rem",
        marginBottom: "0.75rem",
        width: "100%",
        backgroundColor: "var(--cds-background, #201f1e)",
        outline: "none",
        border: "0.125rem solid var(--cds-border, #383838)",
        borderRadius: "0.25rem",
        color: "var(--cds-text, #949493)",
        boxSizing: "border-box",
        height: "2rem",
        padding: "0.25rem",
    },
});

interface I_ColorPickerHexAlphaProps {
    color: string;
    setColor: (arg: string) => void;

    // saveCallback?: () => void;
    // cancelCallback?: () => void;
}

function ColorPickerHexAlpha(
    props: I_ColorPickerHexAlphaProps & ExtendProps
) {
    return (
        <div
            {...stylex.props(styles.base)}
        >
            <p
                {...stylex.props(styles.title)}
            >
                Color Picker
            </p>

            <HexAlphaColorPicker
                className="control-design-system__react__color-picker__custom-layout"
                color={props.color}
                onChange={props.setColor}
            />

            <div
                {...stylex.props(styles.input__wrapper)}
            >
                <Input
                    type="text"
                    value={props.color}
                    readOnly
                    extend={styles.input}
                />
            </div>

            {/*
            TODO(clearfeld): set and cancel button options instead of immediate mode

			<hr className="control-design-system__react__color-picker__hr" />

			<div className="control-design-system__react__color-picker__btn__wrapper">
				<button
					className="control-design-system__react__color-picker__btn control-design-system__react__color-picker__save-btn"
					onClick={props.saveCallback}
				>
					Save
				</button>
				<button
					className="control-design-system__react__color-picker__btn control-design-system__react__color-picker__cancel-btn"
					onClick={props.cancelCallback}
				>
					Cancel
				</button>
			</div>
			*/}
        </div>
    );
}
ColorPickerHexAlpha.displayName = "ColorPickerHexAlpha"

export { ColorPickerHexAlpha };