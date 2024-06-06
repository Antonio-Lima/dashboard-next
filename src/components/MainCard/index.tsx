import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

import { THEME } from "@/constants/theme";

interface CardProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
}

export default function MainCard({ children, icon, title }: CardProps) {
  return (
    <Box
      display="flex"
      flex={1}
      flexDirection="column"
      alignItems="center"
      borderRadius="4px"
      bgcolor={THEME.colors.white}
      border="1px solid"
      borderColor={THEME.colors["gray-200"]}
    >
      {title && (
        <Box
          width="100%"
          px="16px"
          py="14px"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          borderBottom="1px solid"
          borderColor={THEME.colors["gray-200"]}
          gap="4px"
        >
          {icon}
          <Typography
            fontSize="0.75rem"
            fontWeight="regular"
            fontFamily="Public Sans"
            textTransform="uppercase"
          >
            {title}
          </Typography>
        </Box>
      )}
      <Box
        px="20px"
        py="16px"
        width="100%"
        display="flex"
        flex={1}
        flexDirection="column"
        justifyContent="center"
      >
        {children}
      </Box>
    </Box>
  );
}
