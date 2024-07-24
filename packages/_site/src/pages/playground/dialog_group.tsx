import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Label } from '@controlkit/label';
import { Button } from "@controlkit/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@controlkit/dialog";
import { Input } from "@controlkit/input";

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function DialogGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Dialog</H2>

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div>
                                <div>
                                    <Label htmlFor="name">
                                        Name
                                    </Label>
                                    <Input id="name" value="Pedro Duarte" />
                                </div>

                                <br />

                                <div>
                                    <Label htmlFor="username">
                                        Username
                                    </Label>

                                    <Input id="username" value="@peduarte" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

        </div>
    )
}

