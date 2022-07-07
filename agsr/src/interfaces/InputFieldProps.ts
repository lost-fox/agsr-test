import React from "react";

export interface InputFieldProps {
  labelClassName: string;
  inputClassName: string;
  imgClassName?: string;
  id: string;
  title: string;
  type: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  value?: string;
  children?: React.ReactNode;
}
