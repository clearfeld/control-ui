import AvatarImg from "@assets/avatar-preview.png";
import BadgeImg from "@assets/badge-preview.png";
import BreadcrumbsImg from "@assets/breadcrumbs-preview.png";
import ButtonImg from "@assets/button-preview.png";
import CheckboxImg from "@assets/checkbox-preview.png";
import DialogImg from "@assets/dialog-preview.png";
import DropdownImg from "@assets/dropdown-preview.png";
import HeadingImg from "@assets/heading-preview.png";
import LoadingImg from "@assets/loading-preview.png";
import LozengeImg from "@assets/lozenge-preview.png";
import ProgressBarImg from "@assets/progress-bar-preview.png";
import RadioImg from "@assets/radio-preview.png";
import RangeImg from "@assets/range-preview.png";
import SelectImg from "@assets/select-preview.png";
import ToggleSwitchImg from "@assets/switch-preview.png";
import TextareaImg from "@assets/textarea-preview.png";
import TextFieldImg from "@assets/text-field-preview.png";
import TooltipImg from "@assets/tooltip-preview.png";

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

export const foundations = [
  {
    title: "Tokens",
    route: "/tokens",
  }
]

export interface I_ComponentsList {
  title: string;
  description: string;
  link: string;
  img: string | null;
}

export const componentsList: I_ComponentsList[] = [
  {
    title: "Accordian",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    link: "/components/accordian/examples",
    img: null,
  },

  {
    title: "Alert",
    description:
      "Alerts communicate messages that provide additional context, important information, or help to users.",
    link: "/components/alert/examples",
    img: null,
  },

  {
    title: "Alert Dialog",
    description:
      "Alerts communicate messages that provide additional context, important information, or help to users.",
    link: "/components/alert-dialog/examples",
    img: null,
  },

  {
    title: "Aspect Ratio",
    description: "Displays content within a desired ratio.",
    link: "/components/aspect-ratio/examples",
    img: null,
  },

  {
    title: "Avatar",
    description: "An avatar is a visual representation of a user or entity.",
    link: "/components/avatar/examples",
    img: AvatarImg,
  },

  {
    title: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    link: "/components/badge/examples",
    img: BadgeImg,
  },

  {
    title: "Button",
    description:
      "A button triggers an event or action. They let users know what will happen next.",
    link: "/components/button/examples",
    img: ButtonImg,
  },

  {
    title: "Breadcrumb",
    description: "Breadcrumbs are a navigation system used to show a user's location in a site or app.",
    link: "/components/breadcrumb/examples",
    img: BreadcrumbsImg,
  },

  {
    title: "Card",
    description:
      "A card is a block of content neatly divided into Title, Content, Footer.",
    link: "/components/card/examples",
    img: null,
  },

  {
    title: "Checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    link: "/components/checkbox/examples",
    img: CheckboxImg,
  },

  {
    title: "Collapsible",
    description:
      "A collapsible is a container that can be expanded or collapsed.",
    link: "/components/collapsible/examples",
    img: null,
  },

  {
    title: "Dialog",
    description: "A dialog is a popup window that requires user interaction.",
    link: "/components/dialog/examples",
    img: DialogImg,
  },

  {
    title: "Divider",
    description: "A divider separates sections or underlines key sections.",
    link: "/components/divider/examples",
    img: null,
  },

  {
    title: "Dropdown Menu",
    description: "A dropdown menu displays a list of options when clicked.",
    link: "/components/dropdown-menu/examples",
    img: DropdownImg,
  },
  {
    title: "Heading",
    description: "A heading is used as a title/subtitle element for pages.",
    link: "/components/heading/examples",
    img: HeadingImg,
  },

  {
    title: "Hover Card",
    description: "Hover card. Mouse over to reveal the hover card's content.",
    link: "/components/hover_card/examples",
    img: null,
  },

  {
    title: "Input",
    description: "An input lets users enter text.",
    link: "/components/input/examples",
    img: TextFieldImg,
  },

  {
    title: "Label",
    description: "Defines a label for different elements.",
    link: "/components/label/examples",
    img: null,
  },

  {
    title: "Link",
    description: "A stylized href component, allowing for navigation and anchor links.",
    link: "/components/link/examples",
    img: null,
  },

  {
    title: "Loading",
    description: "A spinning pre-loader to indicate that something is still rendering/loading.",
    link: "/components/loading/examples",
    img: LoadingImg,
  },

  {
    title: "Lozenge",
    description: "A lozenge is a visual indicator used to highlight an item's status for quick recognition.",
    link: "/components/lozenge/examples",
    img: LozengeImg,
  },

  {
    title: "Popover",
    description: "Displays rich content in a portal, triggered by a button.",
    link: "/components/popover/examples",
    img: null,
  },

  {
    title: "Progress Bar",
    description: "A progress bar communicates the status of a system process.",
    link: "/components/progress-bar/examples",
    img: ProgressBarImg,
  },

  {
    title: "Radio",
    description: "A radio button allows the user to select one option from a set.",
    link: "/components/radio/examples",
    img: RadioImg,
  },

  {
    title: "Range",
    description: "A range allows users to set a specific value on a slider.",
    link: "/components/range/examples",
    img: RangeImg,
  },

  {
    title: "Select",
    description: "Displays a list of options for the user to pick from, triggered by clicking a trigger element.",
    link: "/components/select/examples",
    img: SelectImg,
  },

  {
    title: "Sheet",
    description: "",
    link: "/components/sheet/examples",
    img: null,
  },

  {
    title: "Skeleton",
    description: "A skeleton acts as a placeholder for content, usually while the content loads.",
    link: "/components/skeleton/examples",
    img: null,
  },

  {
    title: "Switch",
    description: "A switch is a control used to toggle between enabled or disabled states.",
    link: "/components/switch/examples",
    img: ToggleSwitchImg,
  },

  {
    title: "Tabs",
    description: "Tabs are used to organize content by grouping similar information on the same page.",
    link: "/components/tabs/examples",
    img: null,
  },

  {
    title: "Textarea",
    description:
      "A text area lets users enter long form text which spans over multiple lines.",
    link: "/components/textarea/examples",
    img: TextareaImg,
  },

  {
    title: "Tooltip",
    description: "A tooltip is a floating, non-actionable label used to explain a user interface element or feature.",
    link: "/components/tooltip/examples",
    img: TooltipImg,
  },

  // molecules TODO: move this to a separate list

  {
    title: "Color Picker",
    description: "",
    link: "/components/color-picker/examples",
    img: null,
  },
];
