/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
import * as stylex from "@stylexjs/stylex";

import { H2 } from "@controlkit/headings";
import { useEffect, useState } from "react";

const colors_array = [
    {
        name: "White",
        variable: "--cds-white"
    },

    {
        name: "Black",
        variable: "--cds-black"
    },

    {
        name: "Red",
        variable: "--cds-red"
    },

    {
        name: "Blue",
        variable: "--cds-blue"
    },

    {
        name: "Green",
        variable: "--cds-green"
    },

    {
        name: "Purple",
        variable: "--cds-purple"
    },

    {
        name: "Gray",
        variable: "--cds-gray"
    },

    {
        name: "Yellow",
        variable: "--cds-yellow"
    },
];

const comp_array = [
    {
        name: "Button",
        variable: "--btn"
    },

    {
        name: "Divider",
        variable: "--divider"
    },

    // {
    //     name: "Label",
    //     variable: "--label"
    // },
];

type ColorObj = {
    name: string;
    color: string;
};

const styles = stylex.create({
    base: {
        width: "1366px",
        margin: "0 auto",
        marginTop: "2rem",
        padding: "0 1rem",
    },

    container: {
        marginTop: "1rem",
        border: "0.0625rem solid #666666",
        borderRadius: "0.25rem",
        overflow: "hidden",
        minHeight: "800px",
        position: "relative",
    },
});

export default function Colors() {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const [vars, setVars] = useState<any>(null);

    useEffect(() => {
        // could pass in an array of specific stylesheets for optimization
        function getAllCSSVariableNames(styleSheets = document.styleSheets) {
            const cssVars = [];
            // loop each stylesheet
            for (let i = 0; i < styleSheets.length; i++) {
                // loop stylesheet's cssRules
                try { // try/catch used because 'hasOwnProperty' doesn't work
                    for (let j = 0; j < styleSheets[i].cssRules.length; j++) {
                        try {
                            // loop stylesheet's cssRules' style (property names)
                            // @ts-expect-error ignore
                            for (let k = 0; k < styleSheets[i].cssRules[j].style.length; k++) {
                                // @ts-expect-error ignore
                                const name = styleSheets[i].cssRules[j].style[k];
                                // test name for css variable signiture and uniqueness
                                if (name.startsWith('--') && cssVars.indexOf(name) === -1) {
                                    cssVars.push(name);
                                }
                            }
                        } catch (error) { }
                    }
                } catch (error) { }
            }
            return cssVars;
        }

        // biome-ignore lint/style/useDefaultParameterLast: <explanation>
        function getElementCSSVariables(allCSSVars: string | any[], element = document.body, pseudo: string | null | undefined) {
            const elStyles = window.getComputedStyle(element, pseudo);
            const cssVars = {};
            for (let i = 0; i < allCSSVars.length; i++) {
                const key = allCSSVars[i];
                const value = elStyles.getPropertyValue(key)
                // @ts-expect-error ignore
                if (value) { cssVars[key] = value; }
            }
            return cssVars;
        }

        const cssVars = getAllCSSVariableNames();
        const cv = getElementCSSVariables(cssVars, document.documentElement, null);
        // console.log(':root variables', cv, cssVars);
        setVars(cv);
    }, []);

    function FilterCSSVars(predicate: string): ColorObj[] {
        if (vars === null) return [];

        const result: ColorObj[] = [];

        for (const key in vars) {
            if (key.includes(predicate)) {
                result.push({
                    name: key,
                    color: vars[key],
                });
            }
        }

        return result;
    }

    return (
        <div {...stylex.props(styles.base)}>
            <H2>Colors</H2>

            {vars && (
                <>
                    {colors_array.map((color) => (
                        <ColorsRow
                            key={color.variable}
                            name={color.name}
                            colors={FilterCSSVars(color.variable)}
                        />
                    ))}
                </>
            )}

            <br />

            <H2>Component Colors</H2>

            {vars && (
                <>
                    {comp_array.map((color) => (
                        <ColorsRow
                            key={color.variable}
                            name={color.name}
                            colors={FilterCSSVars(color.variable)}
                        />
                    ))}
                </>
            )}
        </div>
    );
}


// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function ColorsRow(props: any) {
    return (
        <div>
            <h2>{props.name}</h2>

            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    // width: "min-content",
                }}
            >
                {props.colors.map((color: ColorObj) => {
                    return (
                        <div
                            key={color.name}
                        >
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignSelf: "center",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "3rem",
                                                height: "3rem",
                                                borderRadius: "0.25rem",
                                                backgroundColor: color.color,
                                            }}
                                        />
                                    </div>
                                    {/* <span style={{ textWrap: "nowrap" }}>{color.name}</span> */}
                                    <span>{color.color}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}