import { sidebarStyles } from "./styles";
import * as stylex from "@stylexjs/stylex";

export default function Sidebar() {
	return (
		<div {...stylex.props(sidebarStyles.wrapper)}>
			<h1>This is sidebar</h1>
		</div>
	);
}
