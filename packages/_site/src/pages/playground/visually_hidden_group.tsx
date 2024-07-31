/* eslint-disable @typescript-eslint/no-explicit-any */
import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';
import { Checkbox } from "@controlkit/checkbox";
import { VisuallyHidden } from "@controlkit/visually-hidden";
import { useState } from "react";

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function VisuallyHiddenGroup() {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const [isVisible, setIsVisible] = useState<any>(false);
    const hiddenContent = "Hidden unseen text";

    return (
        <div {...stylex.props(styles.group)}>
            <H2>Visually Hidden</H2>

            <div {...stylex.props(styles.row)}>
                <div {...stylex.props(page_styles.row)}>
                    <Checkbox
                        checked={isVisible}
                        onCheckedChange={(checked) => {
                            //
                            setIsVisible(checked);
                        }}
                    />

                    <span>
                        There is text hidden between these brackets: [
                         {isVisible ? hiddenContent : <VisuallyHidden>{hiddenContent}</VisuallyHidden>}
                        ]
                    </span>
                </div>
            </div>
        </div >
    );
}
