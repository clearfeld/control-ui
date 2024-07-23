import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';

// import { CalendarIcon } from "@radix-ui/react-icons"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@controlkit/avatar"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@controlkit/hover-card"

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function HoverCardGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Hover Card</H2>

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Avatar>
                                <AvatarImage src="https://github.com/vercel.png" />
                                <AvatarFallback>VC</AvatarFallback>
                            </Avatar>
                        </HoverCardTrigger>

                        <HoverCardContent>
                            <div>
                                <Avatar>
                                    <AvatarImage src="https://github.com/vercel.png" />
                                    <AvatarFallback>VC</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4>@nextjs</h4>
                                    <p>
                                        The React Framework – created and maintained by @vercel.
                                    </p>
                                    <div>
                                        {/* <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "} */}
                                        <span>
                                            Joined December 2021
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </div>

        </div>
    )
}
