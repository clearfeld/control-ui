import * as stylex from "@stylexjs/stylex";
import { forwardRef, useEffect, useState, useRef, type ForwardedRef } from "react";

const styles = stylex.create({
    base: {
        gridColumnEnd: 'sidebar',
        gridColumnStart: 'sidebar',
        gridRowEnd: 'sidebar',
        gridRowStart: 'sidebar',
        paddingRight: "1rem",
    },

    wrapper: {
        position: "sticky",
        marginTop: "2rem",
        top: "5.25rem",
    },

    title: {
        textDecoration: "none",
        fontWeight: "bold",
        marginTop: "1.125rem",
    },

    text: {
        textDecoration: "none",
        color: "inherit",
        display: "inline-block",
        fontSize: "0.95rem",
        lineHeight: "1.75rem",
    },

    active: {
        color: "#006699",
    },
});

interface IdObj {
    id: string;
    text: string;
    level: number;
}

const ContentsSidebar = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
    const [ids, setIds] = useState<IdObj[]>([]);
    const [active, setActive] = useState<string>("default");

    const visibleElementsMap = useRef<Map<string, boolean>>(new Map());

    useEffect(() => {
        if (!ref || typeof ref === "function" || !ref.current) return;

        const headers = ref.current.querySelectorAll("h2, h3, h4, h5, h6");
        const extracted: IdObj[] = Array.from(headers).map((header) => ({
            id: header.id,
            text: (header as HTMLElement).innerText,
            level: parseInt(header.tagName.replace("H", ""), 10),
        }));

        setIds(extracted);
    }, [ref]);

    useEffect(() => {
        if (!ref || typeof ref === "function" || !ref.current || ids.length === 0) return;

        const headers = ref.current.querySelectorAll("h2, h3, h4, h5, h6");
        visibleElementsMap.current.clear();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    visibleElementsMap.current.set(entry.target.id, entry.isIntersecting);
                });

                const firstVisible = ids.find((item) => visibleElementsMap.current.get(item.id));

                if (firstVisible) {
                    setActive(firstVisible.id);
                }
            },
            {
                // Strict tracking frame around your sticky header
                rootMargin: "-88px 0px -75% 0px",
                threshold: 0,
            }
        );

        Array.from(headers).forEach((header) => observer.observe(header));

        return () => {
            observer.disconnect();
            visibleElementsMap.current.clear();
        };
    }, [ref, ids]);

    return (
        <div {...stylex.props(styles.base)}>
            <div {...stylex.props(styles.wrapper)}>
                <div>
                    <p {...stylex.props(styles.title)}>
                        Contents
                    </p>
                </div>

                {ids.map((xid: IdObj) => {
                    const indentation = `${(xid.level - 2) * 0.75}rem`;

                    return (
                        <div
                            key={xid.id}
                            style={{ paddingLeft: indentation }}
                        >
                            <p style={{ margin: "0.25rem 0" }}>
                                <a
                                    href={`#${xid.id}`}
                                    {...stylex.props(
                                        styles.text,
                                        active === xid.id && styles.active
                                    )}
                                >
                                    {xid.text}
                                </a>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default ContentsSidebar;
