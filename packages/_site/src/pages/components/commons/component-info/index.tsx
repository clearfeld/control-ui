import { useEffect, useState } from "react";

import * as stylex from "@stylexjs/stylex";

// import { Link } from "@controlkit/link";
import CopyButton from "../copy-button";

//TODO add a copy button
interface I_ComponentInfoProps {
	install: string;
	npmjs: string;
	npmTitle: string;
	source: string;
}

interface I_InstallBlockProps {
	text: string;
}

interface I_OptionProps {
	option: "npm" | "pnpm" | "bun" | "yarn";
}

const componentInfoStyles = stylex.create({
	wrapper: {
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		minWidth: "20rem",
	},

	infoBlock: {
		gap: "1rem",
		//padding: "1rem",
		display: "flex",
		flexDirection: "column",
		position: "sticky",
		textWrap: "nowrap",
		top: 0,
	},

	copyTextBlock: {
		padding: "0.5rem",
		borderRadius: "var(--border-radius)",
		gap: "0.5rem",
		backgroundColor: "var(--border-color)",
		display: "flex",
		flexDirection: "column",
	},

	textReset: {
		margin: 0,
		padding: 0,
	},

	labelValue: {
		gap: "0.25rem",
		display: "flex",
		flexDirection: "column",
	},

	optionsBar: {
		gap: "0.5rem",
		display: "flex",
	},

	option: {
		cursor: "pointer",
		opacity: "0.7",
	},

	activeOption: {
		opacity: "1",
	},

	flexApart: {
		display: "flex",
		justifyContent: "space-between",
	},
});

export default function ComponentInfo({
	// install,
	// npmjs,
	// source,
	npmTitle,
}: I_ComponentInfoProps) {
	return (
		<div {...stylex.props(componentInfoStyles.wrapper)}>
			<div {...stylex.props(componentInfoStyles.infoBlock)}>
				<InstallBlock text={npmTitle} />

				{/* <div {...stylex.props(componentInfoStyles.labelValue)}>
          <H5>Npmjs</H5>
          <Link href={npmjs}>{npmTitle}</Link>
        </div>

        <div {...stylex.props(componentInfoStyles.labelValue)}>
          <H5>Source</H5>
          <Link href={source}>Github</Link>
        </div> */}
			</div>
		</div>
	);
}

function InstallBlock({ text }: I_InstallBlockProps) {
	const [activeOption, setActiveOption] = useState<"npm" | "pnpm" | "bun" | "yarn">("npm");
	const [installString, setInstallString] = useState("");

	useEffect(() => {
		switch (activeOption) {
			case "npm":
				setInstallString(`npm install ${text}`);
				break;
			case "pnpm":
				setInstallString(`pnpm add ${text}`);
				break;
			case "bun":
				setInstallString(`bun add ${text}`);
				break;
			case "yarn":
				setInstallString(`yarn add ${text}`);
				break;
		}
	}, [activeOption, text]);

	return (
		<div {...stylex.props(componentInfoStyles.labelValue)}>
			<div {...stylex.props(componentInfoStyles.copyTextBlock)}>
				<div {...stylex.props(componentInfoStyles.optionsBar)}>
					<Option option="npm" activeOption={activeOption} setActiveOption={setActiveOption} />
					<Option option="pnpm" activeOption={activeOption} setActiveOption={setActiveOption} />
					<Option option="bun" activeOption={activeOption} setActiveOption={setActiveOption} />
					<Option option="yarn" activeOption={activeOption} setActiveOption={setActiveOption} />
				</div>

				<div {...stylex.props(componentInfoStyles.flexApart)}>
					<p {...stylex.props(componentInfoStyles.textReset)}>{installString}</p>
					<CopyButton value={installString} />
				</div>
			</div>
		</div>
	);
}


function Option({
	option,
	activeOption,
	setActiveOption,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: I_OptionProps & { activeOption: any, setActiveOption: any }) {
	return (
		<p
			{...stylex.props(
				componentInfoStyles.textReset,
				componentInfoStyles.option,
				activeOption === option && componentInfoStyles.activeOption,
			)}
			onClick={() => setActiveOption(option)}
		>
			{option}
		</p>
	);
}