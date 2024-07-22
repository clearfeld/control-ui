import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
// import { Label } from '@controlkit/label';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@controlkit/collapsible"
import { Button } from '@controlkit/button';

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function CollapsibleGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Collapsible</H2>

            <Divider
                extend={styles.divider}
            />

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Collapsible>
                        <CollapsibleTrigger asChild>
                            <Button>Toggle Content</Button>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            Content
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>

        </div>
    )
}