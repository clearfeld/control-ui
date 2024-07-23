import * as stylex from '@stylexjs/stylex';

// import styles from "./common_styles";

import { H1 } from '@controlkit/headings';

import SwitchGroup from './switch_group';
import AspectRatioGroup from './aspect_ratio_group';
import AvatarGroup from './avatar_group';
import InputGroup from './input_group';
import SkeletonGroup from './skeleton_group';
import ProgressBarGroup from './progress_bar_group';
import RangeGroup from './range_group';
import TabsGroup from './tabs_group';
import ColorPickerGroup from './color_picker_group';
import LoadingGroup from './loading_group';
import CheckboxGroup from './checkbox_group';
import LinkGroup from './link_group';
import PopoverGroup from './popover_group';
import DropdownMenuGroup from './dropdown_menu_group';
import TooltipGroup from './tooltip_group';
import SelectGroup from './select_group';
import CardGroup from './card_group';
import BreadcrumbsGroup from './breadcrumbs_group';
import AccordionGroup from './accordion_group';
import AlertGroup from './alert_group';
import DividerGroup from './divider_group';
import TextareaGroup from './textarea_group';
import LabelsGroup from './labels_group';
import ButtonGroup from './button_group';
import HeadingsGroup from './headings_group';
import BadgesGroup from './badge_group';
import HoverCardGroup from './hover_card_group';
import CollapsibleGroup from './collapsible_group';
import SheetGroup from './sheet_group';
import AlertDialogGroup from './alert_dialog_group';

const page_styles = stylex.create({
    base: {
        padding: "1rem 2rem",
        width: "100%",
    },
});

export default function Playground() {

    return (
        <div
            {...stylex.props(page_styles.base)}
        >
            <H1>Atoms</H1>

            <AccordionGroup />
            <AlertGroup />
            <AlertDialogGroup />
            <AspectRatioGroup />
            <AvatarGroup />

            <BadgesGroup />
            <BreadcrumbsGroup />
            <ButtonGroup />

            <CardGroup />
            <CheckboxGroup />
            <CollapsibleGroup />

            <DividerGroup />
            <DropdownMenuGroup />

            <HeadingsGroup />
            <HoverCardGroup />

            <InputGroup />

            <LabelsGroup />
            <LinkGroup />
            <LoadingGroup />

            <PopoverGroup />
            <ProgressBarGroup />

            <RangeGroup />

            <SelectGroup />
            <SheetGroup />
            <SkeletonGroup />
            <SwitchGroup />

            <TabsGroup />
            <TextareaGroup />
            <TooltipGroup />

            <H1>Molecules</H1>

            <ColorPickerGroup />
        </div>
    )
}


