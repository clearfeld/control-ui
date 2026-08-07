import avatar from "@controlkit/site/src/assets/avatar-preview.png";
import badge from "@controlkit/site/src/assets/badge-preview.png";
import breadcrumbs from "@controlkit/site/src/assets/breadcrumbs-preview.png";
import button from "@controlkit/site/src/assets/button-preview.png";
import checkbox from "@controlkit/site/src/assets/checkbox-preview.png";
import dialog from "@controlkit/site/src/assets/dialog-preview.png";
import dropdown from "@controlkit/site/src/assets/dropdown-preview.png";
import heading from "@controlkit/site/src/assets/heading-preview.png";
import loading from "@controlkit/site/src/assets/loading-preview.png";
import lozenge from "@controlkit/site/src/assets/lozenge-preview.png";
import progressBar from "@controlkit/site/src/assets/progress-bar-preview.png";
import radio from "@controlkit/site/src/assets/radio-preview.png";
import range from "@controlkit/site/src/assets/range-preview.png";
import select from "@controlkit/site/src/assets/select-preview.png";
import toggleSwitch from "@controlkit/site/src/assets/switch-preview.png";
import textarea from "@controlkit/site/src/assets/textarea-preview.png";
import textField from "@controlkit/site/src/assets/text-field-preview.png";
import tooltip from "@controlkit/site/src/assets/tooltip-preview.png";

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
  img: string;
}

export const componentsList: I_ComponentsList[] = [
  {
    title: "Accordian",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    link: "/components/accordian/examples",
    img: ""
  },

  {
    title: "Alert",
    description:
      "Alerts communicate messages that provide additional context, important information, or help to users.",
    link: "/components/alert/examples",
    img: avatar,
  },

  {
    title: "Alert Dialog",
    description:
      "Alerts communicate messages that provide additional context, important information, or help to users.",
    link: "/components/alert-dialog/examples",
    img: "",
  },

  {
    title: "Aspect Ratio",
    description: "Displays content within a desired ratio.",
    link: "/components/aspect-ratio/examples",
    img: "",
  },

  {
    title: "Avatar",
    description: "An avatar is a visual representation of a user or entity.",
    link: "/components/avatar/examples",
    img: avatar,
  },

  {
    title: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    link: "/components/badge/examples",
    img: badge,
  },

  {
    title: "Button",
    description:
      "A button triggers an event or action. They let users know what will happen next.",
    link: "/components/button/examples",
    img: button,
  },

  {
    title: "Breadcrumb",
    description:
      "",
    link: "/components/breadcrumb/examples",
    img: breadcrumbs,
  },

  {
    title: "Card",
    description:
      "A card is a block of content neatly divided into Title, Content, Footer.",
    link: "/components/card/examples",
    img: "",
  },

  {
    title: "Checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    link: "/components/checkbox/examples",
    img: checkbox,
  },

  {
    title: "Collapsible",
    description:
      "A collapsible is a container that can be expanded or collapsed.",
    link: "/components/collapsible/examples",
    img: "",
  },

  {
    title: "Dialog",
    description: "A dialog is a popup window that requires user interaction.",
    link: "/components/dialog/examples",
    img: dialog,
  },

  {
    title: "Divider",
    description: "A divider separates sections or underlines key sections.",
    link: "/components/divider/examples",
    img: "",
  },

  {
    title: "Dropdown Menu",
    description: "A dropdown menu displays a list of options when clicked.",
    link: "/components/dropdown-menu/examples",
    img: dropdown,
  },
  {
    title: "Heading",
    description: "A heading is used as a title/subtitle element for pages.",
    link: "/components/heading/examples",
    img: heading,
  },

  {
    title: "Hover Card",
    description: "Hover card. Mouse over to reveal the hover card's content.",
    link: "/components/hover_card/examples",
    img: "",
  },

  {
    title: "Input",
    description: "An input lets users enter text.",
    link: "/components/input/examples",
    img: textField,
  },

  {
    title: "Label",
    description: "Defines a label for different elements.",
    link: "/components/label/examples",
    img: "",
  },

  {
    title: "Link",
    description: "A stylized href component, allowing for navigation and anchor links.",
    link: "/components/link/examples",
    img: "",
  },

  {
    title: "Loading",
    description: "A spinning pre-loader to indicate that something is still rendering/loading.",
    link: "/components/loading/examples",
    img: loading,
  },

  {
    title: "Lozenge",
    description: "A lozenge is a visual indicator used to highlight an item's status for quick recognition.",
    link: "/components/lozenge/examples",
    img: lozenge,
  },

  {
    title: "Popover",
    description: "Displays rich content in a portal, triggered by a button.",
    link: "/components/popover/examples",
    img: "",
  },

  {
    title: "Progress Bar",
    description: "",
    link: "/components/progress-bar/examples",
    img: progressBar,
  },

  {
    title: "Radio",
    description: "A radio button allows the user to select one option from a set.",
    link: "/components/radio/examples",
    img: radio,
  },

  {
    title: "Range",
    description: "A range allows users to set a specific value on a slider.",
    link: "/components/range/examples",
    img: range,
  },

  {
    title: "Select",
    description: "Displays a list of options for the user to pick from, triggered by clicking a trigger element.",
    link: "/components/select/examples",
    img: select,
  },

  {
    title: "Sheet",
    description: "",
    link: "/components/sheet/examples",
    img: "",
  },

  {
    title: "Skeleton",
    description: "",
    link: "/components/skeleton/examples",
    img: "",
  },

  {
    title: "Switch",
    description: "A switch is a control used to toggle between enabled or disabled states.",
    link: "/components/switch/examples",
    img: toggleSwitch,
  },

  {
    title: "Tabs",
    description: "Tabs are used to organize content by grouping similar information on the same page.",
    link: "/components/tabs/examples",
    img: "",
  },

  {
    title: "Textarea",
    description:
      "A text area lets users enter long form text which spans over multiple lines.",
    link: "/components/textarea/examples",
    img: textarea,
  },

  {
    title: "Tooltip",
    description: "",
    link: "/components/tooltip/examples",
    img: tooltip,
  },

  // molecules TODO: move this to a separate list

  {
    title: "Color Picker",
    description: "",
    link: "/components/color-picker/examples",
    img: "",
  },
];
