import * as stylex from '@stylexjs/stylex';

import { Button, ButtonVariants } from "@controlkit/button";
import { Label } from '@controlkit/label';

const styles = stylex.create({
    base: {
    },

    row: {
        // display: "flex",
        display: "grid",
        gap: "1rem",
        alignItems: "center",
        gridTemplateColumns: "repeat(3, 5rem)",
        margin: "1rem 0"
    }
});

export default function Playground() {
    return (
        <>
            <div>
                <h1>Button</h1>

                <hr />

                <div
                    {...stylex.props(styles.row)}
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
                    {...stylex.props(styles.row)}
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
                    {...stylex.props(styles.row)}
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
                    {...stylex.props(styles.row)}
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
        </>
    )
}


