import { useEffect, useState } from "react";

import stylex from "@stylexjs/stylex";

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
		display: "flex",
		flexDirection: "column",
		boxSizing: "border-box",
		minWidth: "20rem",
	},

	infoBlock: {
		position: "sticky",
		top: 0,
		//padding: "1rem",
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
		textWrap: "nowrap",
	},

	copyTextBlock: {
		backgroundColor: "var(--border-color)",
		padding: "0.5rem",
		borderRadius: "var(--border-radius)",
		display: "flex",
		flexDirection: "column",
		gap: "0.5rem",
	},

	textReset: {
		padding: 0,
		margin: 0,
	},

	labelValue: {
		display: "flex",
		flexDirection: "column",
		gap: "0.25rem",
	},

	optionsBar: {
		display: "flex",
		gap: "0.5rem",
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

		function Option({ option }: I_OptionProps) {
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
		return (
			<div {...stylex.props(componentInfoStyles.labelValue)}>
				<div {...stylex.props(componentInfoStyles.copyTextBlock)}>
					<div {...stylex.props(componentInfoStyles.optionsBar)}>
						<Option option="npm" />
						<Option option="pnpm" />
						<Option option="bun" />
						<Option option="yarn" />
					</div>
					<div {...stylex.props(componentInfoStyles.flexApart)}>
						<p {...stylex.props(componentInfoStyles.textReset)}>{installString}</p>
						<CopyButton value={installString} />
					</div>
				</div>
			</div>
		);
	}
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
