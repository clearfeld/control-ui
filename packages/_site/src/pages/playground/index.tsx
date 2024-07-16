import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { Button, ButtonVariants } from "@controlkit/button";
import { Label } from '@controlkit/label';
import { H1, H2, H3, H4, H5, H6 } from '@controlkit/headings';
import { Divider } from "@controlkit/divider";
import { Badge, BadgeVariants } from "@controlkit/badge";
import { Textarea } from "@controlkit/textarea";

import SwitchGroup from './switch_group';
import AspectRatioGroup from './aspect_ratio_group';

const page_styles = stylex.create({
    base: {
        padding: "1rem 2rem",
    },
});

export default function Playground() {

    return (
        <div
            {...stylex.props(page_styles.base)}
        >
            <AspectRatioGroup />

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
                <H2>Badges</H2>

                <Divider
                    extend={styles.divider}
                />

                <div
                    {...stylex.props(styles.row, styles.btn_row)}
                >
                    <Label htmlFor="">Default</Label>

                    <Badge number={100} />

                    <Badge
                        number={100}
                        max={50}
                    />
                </div>

                <div
                    {...stylex.props(styles.row, styles.btn_row)}
                >
                    <Label htmlFor="">Primary</Label>

                    <Badge
                        number={100}
                        variant={BadgeVariants.PRIMARY}
                    />

                    <Badge
                        number={100}
                        max={50}
                        variant={BadgeVariants.PRIMARY}
                    />
                </div>

                <div
                    {...stylex.props(styles.row, styles.btn_row)}
                >
                    <Label htmlFor="">Important</Label>

                    <Badge
                        number={100}
                        variant={BadgeVariants.IMPORTANT}
                    />

                    <Badge
                        number={100}
                        max={50}
                        variant={BadgeVariants.IMPORTANT}
                    />
                </div>

                <div
                    {...stylex.props(styles.row, styles.btn_row)}
                >
                    <Label htmlFor="">Added</Label>

                    <Badge
                        number={100}
                        variant={BadgeVariants.ADDED}
                    />

                    <Badge
                        number={100}
                        max={50}
                        variant={BadgeVariants.ADDED}
                    />
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

            <SwitchGroup />

            <div
                {...stylex.props(styles.group)}
            >
                <H2>Textarea</H2>

                <Divider
                    extend={styles.divider}
                />

                <div
                    {...stylex.props(styles.row)}
                >
                    <Textarea placeholder="playground" />
                </div>
            </div>
        </div>
    )
}


