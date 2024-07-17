import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
// import { Label } from '@controlkit/label';
import { Avatar, AvatarImage, AvatarFallback, AvatarSizes } from "@controlkit/avatar";

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

export default function AvatarGroup() {
    const profile_pic = "https://github.com/clearfeld.png";

    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Avatar</H2>

            <Divider
                extend={styles.divider}
            />

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Avatar size={AvatarSizes.SMALL}>
                        <AvatarImage src={profile_pic} />
                        <AvatarFallback>MR</AvatarFallback>
                    </Avatar>

                    <Avatar size={AvatarSizes.SMALL}>
                        <AvatarImage src="" />
                        <AvatarFallback>MR</AvatarFallback>
                    </Avatar>

                    <Avatar size={AvatarSizes.SMALL}>
                        <AvatarImage src="" />
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>

                    {/* TODO(clearfeld): do one with a svg profile icon
                    <Avatar size={AvatarSizes.SMALL}>
                        <AvatarImage src="" />
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                     */}
                </div>
            </div>

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Avatar>
                        <AvatarImage src={profile_pic} />
                        <AvatarFallback>MR</AvatarFallback>
                    </Avatar>

                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>MR</AvatarFallback>
                    </Avatar>

                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>

                    {/* TODO(clearfeld): do one with a svg profile icon
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                     */}
                </div>
            </div>

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Avatar size={AvatarSizes.LARGE}>
                        <AvatarImage src={profile_pic} />
                        <AvatarFallback>MR</AvatarFallback>
                    </Avatar>

                    <Avatar size={AvatarSizes.LARGE}>
                        <AvatarImage src="" />
                        <AvatarFallback>MR</AvatarFallback>
                    </Avatar>

                    <Avatar size={AvatarSizes.LARGE}>
                        <AvatarImage src="" />
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>

                    {/* TODO(clearfeld): do one with a svg profile icon
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                     */}
                </div>
            </div>

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Avatar size={AvatarSizes.XLARGE}>
                        <AvatarImage src={profile_pic} />
                        <AvatarFallback>MR</AvatarFallback>
                    </Avatar>

                    <Avatar size={AvatarSizes.XLARGE}>
                        <AvatarImage src="" />
                        <AvatarFallback>MR</AvatarFallback>
                    </Avatar>

                    <Avatar size={AvatarSizes.XLARGE}>
                        <AvatarImage src="" />
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>

                    {/* TODO(clearfeld): do one with a svg profile icon
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                     */}
                </div>
            </div>
        </div>
    )
}