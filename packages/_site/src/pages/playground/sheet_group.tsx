import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';

import {
    SheetVariants,
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@controlkit/sheet";
import { Button } from '@controlkit/button';
import { Label } from '@controlkit/label';
import { Input } from '@controlkit/input';

const SHEET_SIDES = [
    SheetVariants.TOP,
    SheetVariants.RIGHT,
    SheetVariants.BOTTOM,
    SheetVariants.LEFT
] as const

// type SheetSide = (typeof SHEET_SIDES)[number];

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function SheetGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Sheet</H2>

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    {SHEET_SIDES.map((side) => (
                        <Sheet key={side}>
                            <SheetTrigger asChild>
                                <Button>{side}</Button>
                            </SheetTrigger>

                            <SheetContent side={side}>
                                <SheetHeader>
                                    <SheetTitle>Edit profile</SheetTitle>
                                    <SheetDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </SheetDescription>
                                </SheetHeader>

                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name">
                                            Name
                                        </Label>
                                        <Input id="name" value="Pedro Duarte" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username">
                                            Username
                                        </Label>
                                        <Input id="username" value="@peduarte" />
                                    </div>
                                </div>

                                <br />

                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button type="submit">Save changes</Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    ))}
                </div>
            </div>

        </div>
    )
}
