import { ReactNode } from "react";
import { Box } from "@mui/material";

import { THEME } from "@/constants/theme";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        gridTemplateColumns: "1fr 1fr minmax(0, 384px)",
        gridTemplateAreas: `"summary summary summary"
      "main main notifications"`,
        [`@media ${THEME.mediaQuery.medium}`]: {
          display: "grid",
        },
        [`@media ${THEME.mediaQuery.xlarge}`]: {
          gridTemplateAreas: `"summary summary notifications"
        "main main notifications"`,
        },
      }}
    >
      {children}
    </Box>
  );
}
