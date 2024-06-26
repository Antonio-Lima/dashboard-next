"use client";
import { ButtonHTMLAttributes } from "react";
import { Button as ButtonMui } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import { THEME } from "@/constants/theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "brand";
  onClick?: () => void;
}

export default function ArrowButton({
  color = "primary",
  onClick = () => console.log("click"),
}: ButtonProps) {
  return (
    <ButtonMui
      sx={{
        minWidth: "46px",
        width: "46px",
        height: "46px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        backgroundColor:
          color === "primary"
            ? THEME.colors.white
            : color === "brand"
            ? THEME.colors.primary
            : THEME.colors.black,
        color: color === "primary" ? THEME.colors.black : THEME.colors.white,
        fontWeight: "bold",
        fontSize: "0.875rem",
        border: "1px solid",
        borderColor:
          color === "primary"
            ? THEME.colors["gray-200"]
            : color === "brand"
            ? THEME.colors.primary
            : THEME.colors.black,
        "&:hover": {
          backgroundColor:
            color === "primary" ? THEME.colors.black : THEME.colors.white,
          color:
            color === "primary"
              ? THEME.colors.white
              : color === "brand"
              ? THEME.colors.primary
              : THEME.colors.black,
        },
      }}
      onClick={onClick}
    >
      <EastIcon fontSize="small" />
    </ButtonMui>
  );
}
