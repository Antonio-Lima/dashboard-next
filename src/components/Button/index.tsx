"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as ButtonMui } from "@mui/material";

import { THEME } from "@/constants/theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  label: string;
  icon?: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  color = "primary",
  label,
  icon,
  fullWidth = true,
}: ButtonProps) {
  return (
    <ButtonMui
      fullWidth={fullWidth}
      endIcon={icon}
      sx={{
        backgroundColor:
          color === "primary" ? THEME.colors.black : THEME.colors.white,
        color: color === "primary" ? THEME.colors.white : THEME.colors.black,
        fontWeight: "bold",
        fontSize: "0.875rem",
        "&:hover": {
          backgroundColor:
            color === "primary" ? THEME.colors.white : THEME.colors.black,
          color: color === "primary" ? THEME.colors.black : THEME.colors.white,
        },
      }}
    >
      {label}
    </ButtonMui>
  );
}
