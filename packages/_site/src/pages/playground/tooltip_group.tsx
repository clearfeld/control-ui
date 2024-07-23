import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@controlkit/tooltip";
import { Button } from '@controlkit/button';

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function TooltipGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Tooltip</H2>

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <TooltipProvider>
                        <Tooltip

                        >
                            <TooltipTrigger asChild
                                style={{
                                    width: "12rem",
                                }}
                            >
                                <Button>Hover</Button>
                            </TooltipTrigger>
                            <TooltipContent

                            >
                                <span>Tooltip text</span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

        </div>
    )
}