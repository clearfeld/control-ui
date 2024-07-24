"use client";

import { HTMLAttributes, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";

// TODO(clearfeld): add close button trigger

type ExtendProps = {
  extend?: stylex.StyleXStyles;
};

type AlertVariantProps = {
  variant?: AlertVariants;
};

enum AlertVariants {
  DEFAULT = "default",
  WARNING = "warning",
  DANGER = "danger",
  SUCCESS = "success",
}

const styles = stylex.create({
  alert: {
    position: "relative",
    padding: "1rem",
    borderRadius: "0.5rem",
    borderWidth: "1px",
    width: "100%",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    boxSizing: "border-box",
    backgroundColor: "var(--alert-background, #212121)",

    display: "grid",
    gridTemplateAreas: `
            "icon title"
            "icon content"`,
    gridTemplateColumns: "minmax(0, 1.25rem) 1fr",
    columnGap: "1rem",
  },

  [AlertVariants.DEFAULT]: {
    color: "var(--alert-default-color, #0088CC)",
  },

  [AlertVariants.WARNING]: {
    color: "var(--alert-warning-color, #F1CB00)",
  },

  [AlertVariants.DANGER]: {
    color: "var(--alert-danger-color, #FF2E00)",
  },

  [AlertVariants.SUCCESS]: {
    color: "var(--alert-success-color, #30AB53)",
  },

  title: {
    margin: 0,
    padding: 0,
    marginBottom: "0.5rem",
    fontWeight: 500,
    fontSize: "1.25rem",
    letterSpacing: "-0.025em",
    lineHeight: 1,
    borderRadius: "0.25rem",
    gridArea: "title",
    // NOTE: uses alert variant color
  },

  description: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "var(--color-text, #FCFCFC)",
    gridArea: "content",
  },
});

const Alert = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & ExtendProps & AlertVariantProps
>(({ className, extend, variant = AlertVariants.DEFAULT, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={className}
    {...stylex.props(styles.alert, styles[variant], extend)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement> & ExtendProps
>(({ className, extend, ...props }, ref) => (
  <h5
    ref={ref}
    className={className}
    {...stylex.props(styles.title, extend)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement> & ExtendProps
>(({ className, extend, ...props }, ref) => (
  <div
    ref={ref}
    className={className}
    {...stylex.props(styles.description, extend)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

const AlertIconDefault = () => (
  <svg
    width={"1.25rem"}
    height={"1.25rem"}
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <title>Information</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 9.5C18 14.4705 13.9705 18.5 9 18.5C4.02943 18.5 0 14.4705 0 9.5C0 4.52943 4.02943 0.5 9 0.5C13.9705 0.5 18 4.52943 18 9.5ZM9 14.675C9.37278 14.675 9.675 14.3728 9.675 14V8.6C9.675 8.22722 9.37278 7.925 9 7.925C8.62722 7.925 8.325 8.22722 8.325 8.6V14C8.325 14.3728 8.62722 14.675 9 14.675ZM9 5C9.49707 5 9.9 5.40295 9.9 5.9C9.9 6.39705 9.49707 6.8 9 6.8C8.50293 6.8 8.1 6.39705 8.1 5.9C8.1 5.40295 8.50293 5 9 5Z"
      fill="var(--alert-default-color, #0088CC)"
    />
  </svg>
);

const AlertIconSuccess = () => (
  <svg
    width={"1.25rem"}
    height={"1.25rem"}
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <title>Success</title>
    <path
      d="M9 0.5C4.03748 0.5 0 4.53748 0 9.5C0 14.4629 4.03748 18.5 9 18.5C13.9629 18.5 18 14.4629 18 9.5C18 4.53748 13.9629 0.5 9 0.5ZM13.2367 6.19817L8.73235 12.8359L5.21178 9.56887C5.0533 9.42213 5.04391 9.17443 5.19104 9.01596C5.33778 8.85709 5.58587 8.84848 5.74396 8.99522L8.59657 11.642L12.589 5.75835C12.7107 5.57952 12.9541 5.53335 13.1326 5.65426C13.3118 5.77557 13.3583 6.01896 13.2367 6.19817Z"
      fill="var(--alert-success-color, #30AB53)"
    />
  </svg>
);

const AlertIconWarning = () => (
  <svg
    width={"1.25rem"}
    height={"1.25rem"}
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <title>Warning</title>
    <path
      d="M15.65 11.7251L9.50119 1.0467C9.34754 0.785089 9.12819 0.56817 8.86487 0.41745C8.60156 0.266729 8.30342 0.187439 8.00002 0.187439C7.69662 0.187439 7.39849 0.266729 7.13517 0.41745C6.87186 0.56817 6.6525 0.785089 6.49885 1.0467L0.350022 11.7251C0.20218 11.9781 0.124268 12.2659 0.124268 12.559C0.124268 12.852 0.20218 13.1398 0.350022 13.3929C0.501707 13.6561 0.720688 13.8742 0.984495 14.0248C1.2483 14.1754 1.54743 14.2531 1.85119 14.25H14.1489C14.4524 14.2529 14.7512 14.175 15.0148 14.0244C15.2783 13.8738 15.497 13.6559 15.6486 13.3929C15.7967 13.14 15.8748 12.8522 15.8751 12.5592C15.8753 12.2661 15.7977 11.9782 15.65 11.7251ZM7.43752 5.81249C7.43752 5.6633 7.49679 5.52023 7.60228 5.41474C7.70776 5.30925 7.85084 5.24999 8.00002 5.24999C8.14921 5.24999 8.29228 5.30925 8.39777 5.41474C8.50326 5.52023 8.56252 5.6633 8.56252 5.81249V8.62499C8.56252 8.77417 8.50326 8.91724 8.39777 9.02273C8.29228 9.12822 8.14921 9.18749 8.00002 9.18749C7.85084 9.18749 7.70776 9.12822 7.60228 9.02273C7.49679 8.91724 7.43752 8.77417 7.43752 8.62499V5.81249ZM8.00002 12C7.83314 12 7.67001 11.9505 7.53126 11.8578C7.39251 11.7651 7.28436 11.6333 7.2205 11.4791C7.15664 11.3249 7.13993 11.1553 7.17248 10.9916C7.20504 10.828 7.2854 10.6776 7.4034 10.5596C7.5214 10.4416 7.67174 10.3613 7.83541 10.3287C7.99909 10.2961 8.16874 10.3129 8.32291 10.3767C8.47709 10.4406 8.60886 10.5487 8.70158 10.6875C8.79429 10.8262 8.84377 10.9894 8.84377 11.1562C8.84377 11.38 8.75488 11.5946 8.59664 11.7529C8.43841 11.9111 8.2238 12 8.00002 12Z"
      fill="var(--alert-warning-color, #F1CB00)"
    />
  </svg>
);

const AlertIconDanger = () => (
  <svg
    width={"1.25rem"}
    height={"1.25rem"}
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <title>Danger</title>
    <path
      d="M8 0.1875C6.55373 0.1875 5.13993 0.616371 3.9374 1.41988C2.73486 2.22339 1.7976 3.36544 1.24413 4.70163C0.690668 6.03781 0.545857 7.50811 0.828011 8.9266C1.11017 10.3451 1.80661 11.648 2.82928 12.6707C3.85196 13.6934 5.15492 14.3898 6.57341 14.672C7.99189 14.9541 9.46219 14.8093 10.7984 14.2559C12.1346 13.7024 13.2766 12.7651 14.0801 11.5626C14.8836 10.3601 15.3125 8.94628 15.3125 7.5C15.3105 5.56123 14.5394 3.70246 13.1685 2.33154C11.7975 0.960627 9.93877 0.189547 8 0.1875ZM10.648 9.35203C10.7002 9.40429 10.7417 9.46634 10.77 9.53462C10.7983 9.6029 10.8128 9.67609 10.8128 9.75C10.8128 9.82391 10.7983 9.8971 10.77 9.96538C10.7417 10.0337 10.7002 10.0957 10.648 10.148C10.5957 10.2002 10.5337 10.2417 10.4654 10.27C10.3971 10.2983 10.3239 10.3128 10.25 10.3128C10.1761 10.3128 10.1029 10.2983 10.0346 10.27C9.96634 10.2417 9.9043 10.2002 9.85203 10.148L8 8.29523L6.14797 10.148C6.09571 10.2002 6.03367 10.2417 5.96538 10.27C5.8971 10.2983 5.82391 10.3128 5.75 10.3128C5.67609 10.3128 5.60291 10.2983 5.53462 10.27C5.46634 10.2417 5.4043 10.2002 5.35203 10.148C5.29977 10.0957 5.25832 10.0337 5.23003 9.96538C5.20175 9.8971 5.18719 9.82391 5.18719 9.75C5.18719 9.67609 5.20175 9.6029 5.23003 9.53462C5.25832 9.46634 5.29977 9.40429 5.35203 9.35203L7.20477 7.5L5.35203 5.64797C5.24649 5.54242 5.18719 5.39927 5.18719 5.25C5.18719 5.10073 5.24649 4.95758 5.35203 4.85203C5.45758 4.74648 5.60074 4.68719 5.75 4.68719C5.89927 4.68719 6.04242 4.74648 6.14797 4.85203L8 6.70477L9.85203 4.85203C9.9043 4.79977 9.96634 4.75831 10.0346 4.73003C10.1029 4.70174 10.1761 4.68719 10.25 4.68719C10.3239 4.68719 10.3971 4.70174 10.4654 4.73003C10.5337 4.75831 10.5957 4.79977 10.648 4.85203C10.7002 4.90429 10.7417 4.96634 10.77 5.03462C10.7983 5.1029 10.8128 5.17609 10.8128 5.25C10.8128 5.32391 10.7983 5.3971 10.77 5.46538C10.7417 5.53366 10.7002 5.59571 10.648 5.64797L8.79524 7.5L10.648 9.35203Z"
      fill="var(--alert-danger-color, #FF2E00)"
    />
  </svg>
);

export {
  AlertVariants,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIconDefault,
  AlertIconSuccess,
  AlertIconWarning,
  AlertIconDanger,
};
