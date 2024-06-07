"use client";
import { useState, useEffect } from "react";
import { THEME } from "@/constants/theme";
import { Box, Collapse } from "@mui/material";
import { ReactNode } from "react";

interface DropDownProps {
  open: boolean;
  children: ReactNode;
}

export default function DropDown({ open, children }: DropDownProps) {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    if (open) {
      setShowBg(true);
    } else {
      setTimeout(() => {
        setShowBg(false);
      }, 450);
    }
  }, [open]);

  return (
    <Box
      sx={{ position: "absolute", left: 0, right: 0, top: "100%", zIndex: 999 }}
    >
      <Collapse in={open} timeout={500}>
        <Box
          width="100%"
          bgcolor={THEME.colors.white}
          display="flex"
          flexDirection="column"
        >
          {children}
        </Box>
      </Collapse>
      <Box
        height="100vh"
        flex={1}
        bgcolor="rgba(0, 0, 0, 0.6)"
        display={showBg ? "flex" : "none"}
        sx={{ transition: "all 0.5s ease-in-out", opacity: open ? 1 : 0 }}
      />
    </Box>
  );
}
