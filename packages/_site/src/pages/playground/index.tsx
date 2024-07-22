import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { Label } from '@controlkit/label';
import { H1, H2, H3, H4, H5, H6 } from '@controlkit/headings';
import { Divider } from "@controlkit/divider";
import { Badge, BadgeVariants } from "@controlkit/badge";

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

const page_styles = stylex.create({
    base: {
        padding: "1rem 2rem",
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

            <AspectRatioGroup />

            <AvatarGroup />

            <div
                {...stylex.props(styles.group)}
            >
                <H2>Headings</H2>

                <Divider
                    extend={styles.divider}
                />

                <div
                    {...stylex.props(styles.row)}
                >
                    <H1>h1 - title</H1>
                </div>


                <div
                    {...stylex.props(styles.row)}
                >
                    <H2>h2 - title</H2>
                </div>

                <div
                    {...stylex.props(styles.row)}
                >
                    <H3>h3 - title</H3>
                </div>

                <div
                    {...stylex.props(styles.row)}
                >
                    <H4>h4 - title</H4>
                </div>

                <div
                    {...stylex.props(styles.row)}
                >
                    <H5>h5 - title</H5>
                </div>

                <div
                    {...stylex.props(styles.row)}
                >
                    <H6>h6 - title</H6>
                </div>
            </div>

            <div
                {...stylex.props(styles.group)}
            >
                <H2>Badges</H2>

                <Divider
                    extend={styles.divider}
                />

                <div
                    {...stylex.props(styles.row, styles.btn_row)}
                >
                    <Label htmlFor="">Default</Label>

                    <Badge number={100} />

                    <Badge
                        number={100}
                        max={50}
                    />
                </div>

                <div
                    {...stylex.props(styles.row, styles.btn_row)}
                >
                    <Label htmlFor="">Primary</Label>

                    <Badge
                        number={100}
                        variant={BadgeVariants.PRIMARY}
                    />

                    <Badge
                        number={100}
                        max={50}
                        variant={BadgeVariants.PRIMARY}
                    />
                </div>

                <div
                    {...stylex.props(styles.row, styles.btn_row)}
                >
                    <Label htmlFor="">Important</Label>

                    <Badge
                        number={100}
                        variant={BadgeVariants.IMPORTANT}
                    />

                    <Badge
                        number={100}
                        max={50}
                        variant={BadgeVariants.IMPORTANT}
                    />
                </div>

                <div
                    {...stylex.props(styles.row, styles.btn_row)}
                >
                    <Label htmlFor="">Added</Label>

                    <Badge
                        number={100}
                        variant={BadgeVariants.ADDED}
                    />

                    <Badge
                        number={100}
                        max={50}
                        variant={BadgeVariants.ADDED}
                    />
                </div>
            </div>

            <BreadcrumbsGroup />

            <ButtonGroup />

            <CardGroup />

            <CheckboxGroup />

            <DividerGroup />

            <DropdownMenuGroup />

            <InputGroup />

            <LabelsGroup />

            <LinkGroup />

            <LoadingGroup />

            <PopoverGroup />

            <ProgressBarGroup />

            <RangeGroup />

            <SelectGroup />

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


