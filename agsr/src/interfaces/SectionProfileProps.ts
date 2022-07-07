import React from "react";

export interface SectionProfileProps {
  img?: string;
  title: string;
  onClick?: () => void;
  exit?: string;
  active?: boolean;
  children?: React.ReactNode;
}
