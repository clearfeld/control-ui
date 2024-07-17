import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
// import { Label } from '@controlkit/label';
import { Switch, SwitchSizes } from "@controlkit/switch";
import { useState } from "react";

const page_styles = stylex.create({
    row: {
        display: "flex",
        gap: "1rem",
    },
});

export default function SwitchGroup() {
    const [switchChecked, setSwitchChecked] = useState<boolean>(false);

    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Switch</H2>

            <Divider
                extend={styles.divider}
            />

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Switch
                        checked={switchChecked}
                        onCheckedChange={(e) => {
                            setSwitchChecked(e);
                        }}
                    />

                    <Switch
                        checked={false}
                        disabled
                    />

                    <Switch
                        checked={true}
                        disabled
                    />
                </div>

                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Switch
                        checked={switchChecked}
                        size={SwitchSizes.MEDIUM}
                        onCheckedChange={(e) => {
                            setSwitchChecked(e);
                        }}
                    />

                    <Switch
                        checked={false}
                        size={SwitchSizes.MEDIUM}
                        disabled
                    />

                    <Switch
                        checked={true}
                        size={SwitchSizes.MEDIUM}
                        disabled
                    />
                </div>

                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Switch
                        checked={switchChecked}
                        size={SwitchSizes.LARGE}
                        onCheckedChange={(e) => {
                            setSwitchChecked(e);
                        }}
                    />

                    <Switch
                        checked={false}
                        size={SwitchSizes.LARGE}
                        disabled
                    />

                    <Switch
                        checked={true}
                        size={SwitchSizes.LARGE}
                        disabled
                    />
                </div>
            </div>
        </div>
    )
}