import AccordionDocument from "@/docs/Accordion/index.mdx";
import AlertDocument from "@/docs/Alert/index.mdx";
import AvatarDocument from "@/docs/Avatar/index.mdx";
import BadgeDocument from "@/docs/Badge/index.mdx";
import BreadcrumbsDocument from "@/docs/Breadcrumbs/index.mdx";
import ButtonDocument from "@/docs/Button/index.mdx";
import CardDocument from "@/docs/Card/index.mdx";
import CheckboxDocument from "@/docs/Checkbox/index.mdx";
import ChipDocument from "@/docs/Chip/index.mdx";
import DialogDocument from "@/docs/Dialog/index.mdx";
import DividerDocument from "@/docs/Divider/index.mdx";
import IconButtonDocument from "@/docs/IconButton/index.mdx";
import InputDocument from "@/docs/Input/index.mdx";
import LabelDocument from "@/docs/Label/index.mdx";
import LinkDocument from "@/docs/Link/index.mdx";
import ProgressDocument from "@/docs/Progress/index.mdx";
import RadioDocument from "@/docs/Radio/index.mdx";
import SelectDocument from "@/docs/Select/index.mdx";
import SkeletonDocument from "@/docs/Skeleton/index.mdx";
import SpinnerDocument from "@/docs/Spinner/index.mdx";
import SwitchDocument from "@/docs/Switch/index.mdx";
import TableDocument from "@/docs/Table/index.mdx";
import TabsDocument from "@/docs/Tabs/index.mdx";
import TextareaDocument from "@/docs/Textarea/index.mdx";
import TypographyDocument from "@/docs/Typography/index.mdx";
import { type  AstroComponentFactory } from "astro/runtime/server/index.js";

export interface NavigationItem {
  id?: string;
  title: string;
  description: string;
  href: string;
  document?: AstroComponentFactory;
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}

export const navigations: NavigationGroup[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        description: "RockSolid is a modern, accessible, and customizable component library built with SolidJS and Tailwind CSS.",
        href: "/introduction/",
      },
      {
        title: "Installation",
        description: "Learn how to install and configure RockSolid in your SolidJS application with simple, step-by-step instructions.",
        href: "/installation/",
      },
      {
        title: "Customization",
        description: "Customize components with classes, slotProps, reusable components, and themes for a flexible SolidJS application.",
        href: "/customization/",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        id: "accordion",
        title: "Accordion",
        description: "A vertically stacked set of interactive sections that can be expanded and collapsed.",
        href: "/components/accordion/",
        document: AccordionDocument,
      },
      {
        id: "alert",
        title: "Alert",
        description: "Alert component displays important information, status updates, warnings, or errors to users.",
        href: "/components/alert/",
        document: AlertDocument,
      },
      {
        id: "avatar",
        title: "Avatar",
        description: "Avatar component displays a user's profile image or entity with an image.",
        href: "/components/avatar/",
        document: AvatarDocument,
      },
      {
        id: "badge",
        title: "Badge",
        description: "Badge component displays a small label or indicator attached to another element.",
        href: "/components/badge/",
        document: BadgeDocument,
      },
      {
        id: "breadcrumbs",
        title: "Breadcrumbs",
        description: "Breadcrumbs displays a navigation hierarchy that helps users understand their current location within an application.",
        href: "/components/breadcrumbs/",
        document: BreadcrumbsDocument,
      },
      {
        id: "button",
        title: "Button",
        description: "Button component triggers an action or event with a customizable button.",
        href: "/components/button/",
        document: ButtonDocument,
      },
      {
        id: "card",
        title: "Card",
        description: "Card component displays related content and actions in a flexible, composable container.",
        href: "/components/card/",
        document: CardDocument,
      },
      {
        id: "checkbox",
        title: "Checkbox",
        description: "Checkbox component allows users to select or deselect an option.",
        href: "/components/checkbox/",
        document: CheckboxDocument,
      },
      {
        id: "chip",
        title: "Chip",
        description: "Chip component displays a compact label with optional avatars, icons, delete actions, and disabled state.",
        href: "/components/chip/",
        document: ChipDocument,
      },
      {
        id: "dialog",
        title: "Dialog",
        description: "Dialog component displays content in a modal dialog that requires the user's attention or interaction.",
        href: "/components/dialog/",
        document: DialogDocument,
      },
      {
        id: "divider",
        title: "Divider",
        description: "Divider component separates content into distinct sections with a horizontal or vertical line.",
        href: "/components/divider/",
        document: DividerDocument,
      },
      {
        id: "icon-button",
        title: "IconButton",
        description: "A compact button designed for actions represented by an icon.",
        href: "/components/icon-button/",
        document: IconButtonDocument,
      },
      {
        id: "input",
        title: "Input",
        description: "A text input component for collecting and editing user-entered values.",
        href: "/components/input/",
        document: InputDocument,
      },
      {
        id: "label",
        title: "Label",
        description: "A text label that identifies and describes a form control.",
        href: "/components/label/",
        document: LabelDocument,
      },
      {
        id: "link",
        title: "Link",
        description: "Link component displays a navigational link that can be styled with semantic colors, underlines, and truncation.",
        href: "/components/link/",
        document: LinkDocument,
      },
      {
        id: "progress",
        title: "Progress",
        description: "A visual indicator that shows the completion or progress of a task.",
        href: "/components/progress/",
        document: ProgressDocument,
      },
      {
        id: "radio",
        title: "Radio",
        description: "A selectable control for choosing one option from a set of mutually exclusive choices.",
        href: "/components/radio/",
        document: RadioDocument,
      },
      {
        id: "select",
        title: "Select",
        description: "Select component allows users to choose one option from a list of available values.",
        href: "/components/select/",
        document: SelectDocument,
      },
      {
        id: "skeleton",
        title: "Skeleton",
        description: "Skeleton component displays a placeholder shape while content is loading.",
        href: "/components/skeleton/",
        document: SkeletonDocument,
      },
      {
        id: "spinner",
        title: "Spinner",
        description: "Spinner component displays a loading indicator while content or an action is in progress.",
        href: "/components/spinner/",
        document: SpinnerDocument,
      },
      {
        id: "switch",
        title: "Switch",
        description: "A control that allows users to toggle an option between on and off states.",
        href: "/components/switch/",
        document: SwitchDocument,
      },
      {
        id: "table",
        title: "Table",
        description: "Table component displays structured data in rows and columns.",
        href: "/components/table/",
        document: TableDocument,
      },
      {
        id: "tabs",
        title: "Tabs",
        description: "Tabs component organizes related content into selectable tabs and panels.",
        href: "/components/tabs/",
        document: TabsDocument,
      },
      {
        id: "textarea",
        title: "Textarea",
        description: "Textarea component enables users to enter and edit multi-line text.",
        href: "/components/textarea/",
        document: TextareaDocument,
      },
      {
        id: "typography",
        title: "Typography",
        description: "Typography component displays text with consistent styles, colors, alignment, and semantic elements.",
        href: "/components/typography/",
        document: TypographyDocument,
      },
    ],
  },
  {
    title: "Customization",
    items: [
      {
        title: "ThemeProvider",
        description: "ThemeProvider component applies a custom theme configuration across your application.",
        href: "/customization/theme-provider/",
      },
      {
        title: "createTheme",
        description: "createTheme creates a validated theme configuration for your application.",
        href: "/customization/create-theme/",
      },
      {
        title: "Theme Tokens",
        description: "Theme tokens define the visual styles used throughout the component library.",
        href: "/customization/theme-tokens/",
      },
      {
        title: "Extending Theme Types",
        description: "Extend theme types to add custom tokens with TypeScript support.",
        href: "/customization/extending-theme-types/",
      },
    ],
  },
];