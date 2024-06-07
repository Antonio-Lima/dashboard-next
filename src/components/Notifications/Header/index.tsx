import { Box, Typography } from "@mui/material";

import { THEME } from "@/constants/theme";

interface HeaderProps {
  newNotifications: number;
}

export default function NotificationsHeader({ newNotifications }: HeaderProps) {
  return (
    <Box
      pt="16px"
      px="24px"
      bgcolor={THEME.colors.white}
      sx={{ filter: THEME.shadow.main }}
    >
      <Box display="flex" gap="6px" alignItems="center ">
        <Typography
          fontFamily="Public Sans"
          fontSize="1.125rem"
          fontWeight="bold"
        >
          Atualizações
        </Typography>
        <Typography
          width="28px"
          height="18px"
          borderRadius={9}
          fontFamily="Public Sans"
          fontSize="0.75rem"
          fontWeight="bold"
          textAlign="center"
          color={THEME.colors.white}
          bgcolor={THEME.colors.primary}
        >
          {newNotifications}
        </Typography>
      </Box>
      <Typography
        fontFamily="Public Sans"
        fontSize="0.75rem"
        fontWeight="bold"
        mt="44px"
        color={THEME.colors.primary}
        borderBottom="4px solid"
        borderColor={THEME.colors.primary}
        width="fit-content"
      >
        TODAS
      </Typography>
    </Box>
  );
}
