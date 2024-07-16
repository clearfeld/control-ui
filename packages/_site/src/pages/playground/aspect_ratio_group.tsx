import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
// import { Label } from '@controlkit/label';
import { AspectRatio } from "@controlkit/aspect-ratio";

const page_styles = stylex.create({
    row: {
        display: "flex",
        gap: "1rem",
    },

    box: {
        width: "300px",
    },

    img: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: "0.5rem",
    }
});

export default function AspectRatioGroup() {
    const img_src = "https://images.unsplash.com/photo-1486312699619-be057cfc0342?w=2000";

    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Aspect Ratio</H2>

            <Divider
                extend={styles.divider}
            />

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <div
                        {...stylex.props(page_styles.box)}
                    >
                        <AspectRatio ratio={16 / 9}>
                            <img
                                {...stylex.props(page_styles.img)}
                                src={img_src}
                                alt=""
                            />
                        </AspectRatio>
                    </div>

                    <div
                        {...stylex.props(page_styles.box)}
                    >
                        <AspectRatio ratio={4 / 3}>
                            <img
                                {...stylex.props(page_styles.img)}
                                src={img_src}
                                alt=""
                            />
                        </AspectRatio>
                    </div>

                    <div
                        {...stylex.props(page_styles.box)}
                    >
                        <AspectRatio ratio={1 / 1}>
                            <img
                                {...stylex.props(page_styles.img)}
                                src={img_src}
                                alt=""
                            />
                        </AspectRatio>
                    </div>


                    <div
                        {...stylex.props(page_styles.box)}
                    >
                        <AspectRatio ratio={2 / 3}>
                            <img
                                {...stylex.props(page_styles.img)}
                                src={img_src}
                                alt=""
                            />
                        </AspectRatio>
                    </div>

                </div>
            </div>
        </div>
    )
}