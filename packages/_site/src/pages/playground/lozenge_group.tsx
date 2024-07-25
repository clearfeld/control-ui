import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';
import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function LozengeGroup() {
    return (
        <div {...stylex.props(styles.group)}>
            <H2>Lozenge</H2>

            <div {...stylex.props(styles.row)}>
                <div {...stylex.props(page_styles.row)}>
                    <Lozenge
                        variant={LozengeVariants.DEFAULT}
                    >
                        Default
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.DEFAULT}
                        isBold
                    >
                        Default Bold
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.SUCCESS}
                    >
                        Success
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.SUCCESS}
                        isBold
                    >
                        Success Bold
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.REMOVED}
                    >
                        Removed
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.REMOVED}
                        isBold
                    >
                        Removed Bold
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.IN_PROGRESS}
                    >
                        In Progress
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.IN_PROGRESS}
                        isBold
                    >
                        In Progress Bold
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.NEW}
                    >
                        New
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.NEW}
                        isBold
                    >
                        New Bold
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.MOVED}
                    >
                        Moved
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.MOVED}
                        isBold
                    >
                        Moved Bold
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.DEFAULT}
                    >
                        Default max width overflowing
                    </Lozenge>

                    <Lozenge
                        variant={LozengeVariants.DEFAULT}
                        maxWidth={100}
                    >
                        Default max width overflowing
                    </Lozenge>
                </div>
            </div>
        </div>
    );
}
