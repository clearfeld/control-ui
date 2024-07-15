import * as stylex from '@stylexjs/stylex';

import { Button, ButtonVariants } from "@controlkit/button";
import { Label } from '@controlkit/label';
import { H1, H2, H3, H4, H5, H6 } from '@controlkit/headings';
import { Divider } from "@controlkit/divider";

const styles = stylex.create({
    base: {
        padding: "1rem 2rem"
    },

    divider: {
        margin: "1rem 0 0.5rem 0",
    },

    group: {
        padding: "1rem 0",
    },

    row: {
        display: "grid",
        gap: "1rem",
        alignItems: "center",
        margin: "1rem 0"
    },

    btn_row: {
        gridTemplateColumns: "repeat(3, 5rem)",
    }
});

export default function Playground() {
    return (
        <div
            {...stylex.props(styles.base)}
        >
            <div
                {...stylex.props(styles.group)}
            >
                <H2>Headings</H2>

                <Divider
                    extend={styles.divider}
                />

                <div
                    {...stylex.props(styles.row)}
                >
                    <H1>h1 - title</H1>
                </div>


                <div
                    {...stylex.props(styles.row)}
                >
                    <H2>h2 - title</H2>
                </div>

                <div
                    {...stylex.props(styles.row)}
                >
                    <H3>h3 - title</H3>
                </div>

                <div
                    {...stylex.props(styles.row)}
                >
                    <H4>h4 - title</H4>
                </div>

                <div
                    {...stylex.props(styles.row)}
                >
                    <H5>h5 - title</H5>
                </div>

                <div
                    {...stylex.props(styles.row)}
                >
                    <H6>h6 - title</H6>
                </div>
            </div>

            <div
                {...stylex.props(styles.group)}
            >
                <H2>Button</H2>

                <Divider
                    extend={styles.divider}
                />

                <div
                    {...stylex.props(styles.row, styles.btn_row)}
                >
                    <Label htmlFor="">Create</Label>

                    <Button>
                        Create
                    </Button>

                    <Button
                        disabled
                    >
                        Create
                    </Button>
                </div>

                <div
                    {...stylex.props(styles.row, styles.btn_row)}
                >
                    <Label htmlFor="">Action</Label>

                    <Button
                        variant={ButtonVariants.ACTION}
                    >
                        Action
                    </Button>

                    <Button
                        variant={ButtonVariants.ACTION}
                        disabled
                    >
                        Action
                    </Button>
                </div>

                <div
                    {...stylex.props(styles.row, styles.btn_row)}
                >
                    <Label htmlFor="">Danger</Label>

                    <Button
                        variant={ButtonVariants.DANGER}
                    >
                        Danger
                    </Button>

                    <Button
                        variant={ButtonVariants.DANGER}
                        disabled
                    >
                        Danger
                    </Button>
                </div>

                <div
                    {...stylex.props(styles.row, styles.btn_row)}
                >
                    <Label htmlFor="">Ghost</Label>

                    <Button
                        variant={ButtonVariants.GHOST}
                    >
                        Ghost
                    </Button>

                    <Button
                        variant={ButtonVariants.GHOST}
                        disabled
                    >
                        Ghost
                    </Button>
                </div>
            </div>

            <div
                {...stylex.props(styles.group)}
            >
                <H2>Divider</H2>

                <Divider
                    extend={styles.divider}
                />

                <div
                    {...stylex.props(styles.row)}
                >
                    <Divider />
                </div>
            </div>

            <div
                {...stylex.props(styles.group)}
            >
                <H2>Labels</H2>

                <Divider
                    extend={styles.divider}
                />

                <div
                    {...stylex.props(styles.row)}
                >
                    <Label>Label</Label>
                </div>
            </div>
        </div>
    )
}


