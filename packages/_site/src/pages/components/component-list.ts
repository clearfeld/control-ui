export interface I_ComponentsList {
  title: string;
  description: string;
  link: string;
}
export const componentsList: I_ComponentsList[] = [
  {
    title: "Button",
    description: "A button triggers an event or action. They let users know what will happen next.",
    link: "/components/button/examples",
  },

  {
    title: "Divider",
    description: "A divider separates sections or underlines key sections.",
    link: "/components/divider/examples",
  },
];
