"use client";

import { THEME } from "@/constants/theme";
import { Box, useMediaQuery } from "@mui/material";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  const xlarge = useMediaQuery(THEME.mediaQuery.xlarge);
  const medium = useMediaQuery(THEME.mediaQuery.medium);

  return (
    <Box
      display={medium ? "grid" : "flex"}
      flexDirection="column"
      sx={{
        gridTemplateColumns: "1fr 1fr minmax(0, 384px)",
        gridTemplateAreas: `"summary summary ${
          xlarge ? "notifications" : "summary"
        }"
      "main main notifications"`,
      }}
    >
      {children}
    </Box>
  );
}
