import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
// import { Label } from '@controlkit/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@controlkit/tabs";

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function TabsGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Tabs</H2>

            <Divider
                extend={styles.divider}
            />

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Tabs defaultValue="tab-1">
                        <TabsList
                            // style={{
                            //     width: "auto"
                            // }}
                        >
                            <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
                            <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
                        </TabsList>
                        <TabsContent value="tab-1">Tab 1 Content</TabsContent>
                        <TabsContent value="tab-2">Tab 2 Content</TabsContent>
                    </Tabs>
                </div>
            </div>

        </div>
    )
}