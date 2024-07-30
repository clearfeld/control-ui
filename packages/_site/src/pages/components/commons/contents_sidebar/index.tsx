import * as stylex from "@stylexjs/stylex";

import { forwardRef, useEffect, useState, type ForwardedRef } from "react";

const styles = stylex.create({
    base: {
        gridArea: "sidebar",
        paddingRight: "1rem",
    },

    wrapper: {
        marginTop: "2rem",
        position: "sticky",
        top: "5.25rem",
    },

    title: {
        fontWeight: "bold",
        marginTop: "1.125rem",
        textDecoration: "none",
    },

    text: {
        color: "inherit",
        textDecoration: "none",
    },

    active: {
        color: "#006699",
    },
});

interface IdObj {
    id: string;
    text: string;
}

const ContentsSidebar = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
    const [ids, setIds] = useState<IdObj[] | null>(null);
    const [active, setActive] = useState<string>("default");

    // TODO(clearfeld): catch all h2 to h6 headings and do a nested indent list render

    useEffect(() => {
        // console.log(ref);
        if (ref === undefined || ref === null) return;

        // @ts-expect-error current will exist
        const headers = ref.current.getElementsByTagName("h2");
        // console.log(headers);

        const x = [];
        for (let i = 0; i < headers.length; ++i) {
            x.push({
                id: headers[i].id,
                text: headers[i].innerText,
            });
        }

        // console.log(x);
        setIds(x);
    }, [ref]);

    useEffect(() => {
        if (ref === undefined || ref === null) return;

        // @ts-expect-error current will exist
        const z = ref.current.getElementsByTagName("h2");
        const p = document.getElementsByTagName("html")[0];

        window.onscroll = () => {
            for (let i = 0; i < z.length; ++i) {
                const wtop = p?.scrollTop;

                if (wtop <= z[i].offsetTop) {
                    // console.log(z[i].id);
                    setActive(z[i].id.toString());
                    return;
                }
            }
        };
    }, [ref]);

    return (
        <div {...stylex.props(styles.base)}>
            <div {...stylex.props(styles.wrapper)}>
                <div>
                    <p {...stylex.props(styles.title)}>
                        Contents
                    </p>
                </div>

                {ids && (
                    <>
                        {ids.map((xid: IdObj) => {
                            let active_id = false;
                            if (active === xid.id) {
                                active_id = true;
                            }

                            return (
                                <div key={xid.id}>
                                    <p>
                                        <a
                                            href={`#${xid.id}`}
                                            {...stylex.props(
                                                styles.text,
                                                active_id && styles.active
                                            )}
                                        >
                                            {xid.text}
                                        </a>
                                    </p>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
});

export default ContentsSidebar;