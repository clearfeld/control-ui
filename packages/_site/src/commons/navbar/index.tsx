import * as stylex from '@stylexjs/stylex';
import { Link } from "react-router-dom";
const styles = stylex.create({
    base: {
        height: "var(--navbar-size)",
        backgroundColor: "var(--navbar-color-bg)",
        position: "fixed",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        padding: "0 1rem",
        boxSizing: "border-box",
        zIndex: 1,
    },

    link: {
        textDecoration: "none",
        color: "var(--text-color)",
    }
});

export default function Navbar() {
    return (
        <div
            {...stylex.props(styles.base)}
        >
            <div>
                <Link
                    to={"/"}
                    {...stylex.props(styles.link)}
                >
                    Home
                </Link>
            </div>

            <div></div>

            <div
                style={{
                    justifySelf: "flex-end",
                }}
            >
                <Link
                    to={"/playground"}
                    {...stylex.props(styles.link)}
                >
                    Playground
                </Link>
            </div>
        </div>
    )
}
