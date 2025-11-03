import React, { HTMLProps } from "react";

export interface GradientButtonProps {
  hasIsRoute?: boolean;
  routePath?: string;
  children?: React.ReactNode;
  title?: string;
  titleSize?: string;
  iconSize?: number;
  classNames?: HTMLProps<HTMLElement>["className"];
  isWhite?: boolean;
  secondClassnames?: HTMLProps<HTMLElement>['className']
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}