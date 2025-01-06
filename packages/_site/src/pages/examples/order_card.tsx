import { Button, ButtonVariants } from "@controlkit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@controlkit/card";
import { Divider } from "@controlkit/divider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@controlkit/dropdown-menu";
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
    width: "28rem",
    borderRadius: "0.25rem",
  },

  cardHeader: {
    display: "flex",
    gap: "0.25rem",
    padding: "1rem",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardHeaderLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },

  cardHeaderRight: {
    display: "flex",
    gap: "0.5rem",
  },

  cardFooter: {
    display: "flex",
    gap: "0.25rem",
    padding: "1rem",
    alignItems: "center",
  },
  spaceApart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  flexColumn: {
    display: "flex",
    flexDirection: "column",
    //gap: "0.5rem",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "1rem",
  },

  shippingSection: {
    /* display: "flex",
    //justifyContent: "space-between",
    alignItems: "center", */
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem",
    height: "fit-content",
    minWidth: 0,
  },

  menuContent: {
    minWidth: "6rem",
  },
});
export default function OrderCard() {
  return (
    <div {...stylex.props(styles.base)}>
      <Card extend={styles.card}>
        <CardHeader extend={styles.cardHeader}>
          <div {...stylex.props(styles.cardHeaderLeft)}>
            <CardTitle>Order 52zr3057</CardTitle>
            <CardDescription>Date: August 8, 2024</CardDescription>
          </div>
          <div {...stylex.props(styles.cardHeaderRight)}>
            <Button extend={styles.button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor">
                <path d="M8.96456 18C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456ZM15 7H3V15.0505C3.63526 14.4022 4.52066 14 5.5 14C6.8962 14 8.10145 14.8175 8.66318 16H14.3368C14.5045 15.647 14.7296 15.3264 15 15.0505V7ZM17 13H21V12.715L18.9917 10H17V13ZM17.5 19C18.1531 19 18.7087 18.5826 18.9146 18C18.9699 17.8436 19 17.6753 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 17.6753 16.0301 17.8436 16.0854 18C16.2913 18.5826 16.8469 19 17.5 19ZM7 17.5C7 16.6716 6.32843 16 5.5 16C4.67157 16 4 16.6716 4 17.5C4 17.6753 4.03008 17.8436 4.08535 18C4.29127 18.5826 4.84689 19 5.5 19C6.15311 19 6.70873 18.5826 6.91465 18C6.96992 17.8436 7 17.6753 7 17.5Z"></path>
              </svg>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button extend={styles.button}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor">
                    <path d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path>
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent extend={styles.menuContent}>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>

        <CardContent extend={styles.cardContent}>
          <div>
            <h4>Order Details</h4>
            <div {...stylex.props(styles.spaceApart)}>
              <CardDescription>RTX 4090 x1</CardDescription>
              <p>$3,000.00</p>
            </div>
            <div {...stylex.props(styles.spaceApart)}>
              <CardDescription>AMD Ryzen 7 7800X3D x1</CardDescription>
              <p>$500.00</p>
            </div>
          </div>
          <Divider />
          <div>
            <div {...stylex.props(styles.spaceApart)}>
              <CardDescription>Subtotal</CardDescription>
              <p>$3,500.00</p>
            </div>
            <div {...stylex.props(styles.spaceApart)}>
              <CardDescription>Shipping</CardDescription>
              <p>$5.00</p>
            </div>
            <div {...stylex.props(styles.spaceApart)}>
              <CardDescription>Tax</CardDescription>
              <p>$25.00</p>
            </div>
            <div {...stylex.props(styles.spaceApart)}>
              <CardDescription>Total</CardDescription>
              <h4>$3,530.00</h4>
            </div>
          </div>

          <Divider />
          <div {...stylex.props(styles.shippingSection)}>
            <div {...stylex.props(styles.flexColumn)}>
              <h4>Shipping Information</h4>
              <CardDescription>John Doe</CardDescription>
              <CardDescription>1332 Hillcrest Circle.</CardDescription>
              <CardDescription>K1R 5N9</CardDescription>
            </div>
            <div {...stylex.props(styles.flexColumn)}>
              <h4>Billing Information</h4>
              <CardDescription>Same as shipping information</CardDescription>
            </div>
          </div>
          <Divider />

          <div>
            <h4>Customer Information</h4>
            <div {...stylex.props(styles.spaceApart)}>
              <CardDescription>Customer Name</CardDescription>
              <p>John Doe</p>
            </div>
            <div {...stylex.props(styles.spaceApart)}>
              <CardDescription>Email</CardDescription>
              <p>jonhdoe@me.com</p>
            </div>

            <div {...stylex.props(styles.spaceApart)}>
              <CardDescription>Phone</CardDescription>
              <p>1+ (123) 456-7890</p>
            </div>
          </div>

          <Divider />

          <div>
            <h4>Payment Information</h4>
            <div {...stylex.props(styles.spaceApart)}>
              <CardDescription>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  fill="currentColor">
                  <path d="M3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM20.0049 10.9998H4.00488V18.9998H20.0049V10.9998ZM20.0049 8.99979V4.99979H4.00488V8.99979H20.0049ZM14.0049 14.9998H18.0049V16.9998H14.0049V14.9998Z"></path>
                </svg>{" "}
                Visa
              </CardDescription>
              <p>**** **** **** 3095</p>
            </div>
          </div>
        </CardContent>
        <CardFooter extend={styles.cardFooter}>
          <CardDescription>Updated August 8, 2024</CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
