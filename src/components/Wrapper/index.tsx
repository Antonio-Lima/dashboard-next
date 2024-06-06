"use client";

import { THEME } from "@/constants/theme";
import { Box, useMediaQuery } from "@mui/material";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  const large = useMediaQuery(THEME.mediaQuery.xlarge);

  return (
    <Box
      display="grid"
      sx={{
        gridTemplateColumns: "1fr 1fr minmax(0, 384px)",
        gridTemplateAreas: `"summary summary ${
          large ? "notifications" : "summary"
        }"
      "main main notifications"`,
      }}
    >
      {children}
    </Box>
  );
}
