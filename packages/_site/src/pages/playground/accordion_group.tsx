import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@controlkit/tabs";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@controlkit/accordion";

export default function AccordionGroup() {
	return (
		<div {...stylex.props(styles.group)}>
			<H2>Accordion</H2>

			<br />

			<Tabs defaultValue="multiple">
				<TabsList>
					<TabsTrigger value="multiple">Single</TabsTrigger>
					<TabsTrigger value="single">Multiple</TabsTrigger>
				</TabsList>
				<TabsContent value="single">
					<AccordionExample multiple={true} />
				</TabsContent>
				<TabsContent value="multiple">
					<AccordionExample multiple={false} />
				</TabsContent>
			</Tabs>
		</div>
	);
}

function AccordionExample(props: {
	multiple: boolean;
	collapsible?: boolean;
}) {
	return (
		<Accordion {...props}>
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it styled?</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that matches the other components&apos;
					aesthetic.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. It's animated by default, but you can disable it if you prefer.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
