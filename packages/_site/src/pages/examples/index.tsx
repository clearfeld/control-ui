import * as stylex from "@stylexjs/stylex";

import { H2, H4 } from "@controlkit/headings";
import Dashboard04 from "./Dashboard04";

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
    }
});

export default function Examples() {
    return (
        <div
            {...stylex.props(styles.base)}
        >
            <H2>Checkout some examples</H2>

            <br />

            <H4>Dashboard 04 (WIP)</H4>
            <div
                {...stylex.props(styles.container)}
            >
                <Dashboard04 />
            </div>
        </div>
    );
}