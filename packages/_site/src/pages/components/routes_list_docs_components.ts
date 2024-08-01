export const getting_started = [
  {
    title: "Introduction",
    route: "/docs",
  },

  {
    title: "Typography",
    route: "/components/typography",
  },
];

export interface I_ComponentsList {
  title: string;
  description: string;
  link: string;
}

export const componentsList: I_ComponentsList[] = [
	{
		title: "Accordian",
		description:
			"A vertically stacked set of interactive headings that each reveal a section of content.",
		link: "/components/accordian/examples",
	},

	{
		title: "Alert",
		description:
			"Alerts communicate messages that provide additional context, important information, or help to users.",
		link: "/components/alert/examples",
	},

	{
		title: "Alert Dialog",
		description:
			"Alerts communicate messages that provide additional context, important information, or help to users.",
		link: "/components/alert-dialog/examples",
	},

	{
		title: "Aspect Ratio",
		description: "Displays content within a desired ratio.",
		link: "/components/aspect-ratio/examples",
	},

  {
    title: "Avatar",
    description: "An avatar is a visual representation of a user or entity.",
    link: "/components/avatar/examples",
  },
  
  {
    title: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    link: "/components/badge/examples",
  },
  
  {
    title: "Button",
    description:
      "A button triggers an event or action. They let users know what will happen next.",
    link: "/components/button/examples",
  },

  {
    title: "Divider",
    description: "A divider separates sections or underlines key sections.",
    link: "/components/divider/examples",
  },

	{
		title: "Heading",
		description: "A heading is used as a title/subtitle element for pages.",
		link: "/components/heading/examples",
	},

	{
		title: "Hover Card",
		description: "Hover card. Mouse over to reveal the hover card's content.",
		link: "/components/hover_card/examples",
	},
 
  {
    title: "Heading",
    description: "A heading is used as a title/subtitle element for pages.",
    link: "/components/heading/examples",
  },
];
