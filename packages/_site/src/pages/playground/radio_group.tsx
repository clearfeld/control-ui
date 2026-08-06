import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';
import { RadioGroup, RadioGroupItem } from "@controlkit/radio";
import { Label } from "@controlkit/label";

// const page_styles = stylex.create({
//     row: {
//         // display: "flex",
//         // flexDirection: "column",
//         // gap: "1rem",
//     },
// });

export default function RadioCompGroup() {
    return (
        <div {...stylex.props(styles.group)}>
            <H2>Radio</H2>

            <div {...stylex.props(styles.row)}>

                <RadioGroup defaultValue="option-one">
                    <div
                        style={{
                            display: "flex",
                            gap: "0.5rem",
                        }}
                    >
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "0.5rem",
                        }}
                    >
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                    </div>
                </RadioGroup>

            </div>
        </div>
    );
}
