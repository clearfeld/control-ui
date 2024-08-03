import { Button, ButtonVariants } from "@controlkit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@controlkit/card";
import { H6 } from "@controlkit/headings";
import { Switch } from "@controlkit/switch";
import stylex from "@stylexjs/stylex";
import { useState } from "react";

const styles = stylex.create({
  base: {
    display: "grid",
    height: "100%",
    width: "100%",
    position: "absolute",
    alignContent: "center",
    justifyContent: "center",
  },

  card: {
    width: "480px",
    borderRadius: "0.25rem",
  },

  cardHeader: {
    display: "flex",
    gap: "0.25rem",
    padding: "1rem",
  },

  descriptionSwitch: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
  },
});
export default function CookiesSettings() {
  const [strictlyNecessary, setStrictlyNecessary] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [performance, setPerformance] = useState(false);
  return (
    <div {...stylex.props(styles.base)}>
      <Card extend={styles.card}>
        <CardHeader extend={styles.cardHeader}>
          <CardTitle>Cookies Settings</CardTitle>
          <CardDescription>Manage your cookie settings here.</CardDescription>
        </CardHeader>

        <CardContent extend={styles.cardContent}>
          <div>
            <H6>Strictly Necessary</H6>
            <div {...stylex.props(styles.descriptionSwitch)}>
              <CardDescription>
                These cookies are essential in order to use the website and use
                its features.
              </CardDescription>
              <Switch
                checked={strictlyNecessary}
                onCheckedChange={setStrictlyNecessary}
              />
            </div>
          </div>

          <div>
            <H6>Functional Cookies</H6>
            <div {...stylex.props(styles.descriptionSwitch)}>
              <CardDescription>
                These cookies allow the website to provide personalized
                functionality.
              </CardDescription>
              <Switch checked={functional} onCheckedChange={setFunctional} />
            </div>
          </div>

          <div>
            <H6>Performance Cookies</H6>
            <div {...stylex.props(styles.descriptionSwitch)}>
              <CardDescription>
                These cookies help to improve the performance of the website.
              </CardDescription>
              <Switch checked={performance} onCheckedChange={setPerformance} />
            </div>
          </div>

          <Button variant={ButtonVariants.ACTION}>Save preferences</Button>
        </CardContent>
      </Card>
    </div>
  );
}
