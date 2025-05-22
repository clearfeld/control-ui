import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@controlkit/tabs";

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
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@controlkit/command-menu";
import { useEffect, useState } from "react";

const page_styles = stylex.create({
	row: {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	},

	p_tag: {
		background: "var(--color-bg-compliment)",
		padding: "0.5rem",
		borderRadius: "0.25rem",
		width: "fit-content",
	},
});

export default function CommandMenuGroup() {
	return (
		<div {...stylex.props(styles.group)}>
			<H2>Command Menu</H2>

			<br />

			<Tabs defaultValue="static">
				<TabsList>
					<TabsTrigger value="static">Static</TabsTrigger>
					<TabsTrigger value="dialog">Dialog</TabsTrigger>
				</TabsList>
				<TabsContent value="static">
					<CommandMenuStatic />
				</TabsContent>
				<TabsContent value="dialog">
					<CommandDialogDemo />
				</TabsContent>
			</Tabs>
		</div>
	);
}

function CommandDialogDemo() {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<p {...stylex.props(page_styles.p_tag)}>
				Press{" "}
				<kbd>
					<span>⌘</span>J or <span>Ctrl</span> J
				</kbd>
			</p>

			<CommandDialog
				open={open}
				onOpenChange={setOpen}
				// TODO
				// style={{
				// 	width: "320px",
				// 	overflow: "hidden",
				// }}
			>
				<CommandMenuPortion />
			</CommandDialog>
		</>
	);
}

function CommandMenuStatic() {
	return (
		<Command>
			<CommandMenuPortion />
		</Command>
	);
}

function CommandMenuPortion() {
	return (
		<>
			<CommandInput placeholder="Type a command or search..." />

			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>

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
		</>
	);
}
