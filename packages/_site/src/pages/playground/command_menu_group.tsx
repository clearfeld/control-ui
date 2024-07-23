import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';

// import {
//     CalendarIcon,
//     EnvelopeClosedIcon,
//     FaceIcon,
//     GearIcon,
//     PersonIcon,
//     RocketIcon,
// } from "@radix-ui/react-icons";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@controlkit/command-menu";

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function CommandMenuGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Command Menu</H2>

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Command>
                        <CommandInput placeholder="Type a command or search..." />

                        <CommandList>
                            <CommandEmpty>
                                No results found.
                            </CommandEmpty>

                            <CommandGroup heading="Suggestions">
                                <CommandItem>
                                    {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                                    <span>Calendar</span>
                                </CommandItem>
                                <CommandItem>
                                    {/* <FaceIcon className="mr-2 h-4 w-4" /> */}
                                    <span>Search Emoji</span>
                                </CommandItem>
                                <CommandItem>
                                    {/* <RocketIcon className="mr-2 h-4 w-4" /> */}
                                    <span>Launch</span>
                                </CommandItem>
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup heading="Settings">
                                <CommandItem>
                                    {/* <PersonIcon className="mr-2 h-4 w-4" /> */}
                                    <span>Profile</span>
                                    <CommandShortcut>⌘P</CommandShortcut>
                                </CommandItem>
                                <CommandItem>
                                    {/* <EnvelopeClosedIcon className="mr-2 h-4 w-4" /> */}
                                    <span>Mail</span>
                                    <CommandShortcut>⌘B</CommandShortcut>
                                </CommandItem>
                                <CommandItem>
                                    {/* <GearIcon className="mr-2 h-4 w-4" /> */}
                                    <span>Settings</span>
                                    <CommandShortcut>⌘S</CommandShortcut>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </div>
            </div>

        </div>
    )
}
