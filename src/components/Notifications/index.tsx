import { THEME } from "@/constants/theme";
import { Box, Typography } from "@mui/material";

export default function Notifications() {
  return (
    <Box width="100%" maxWidth="384px" bgcolor={THEME.colors.white}>
      <Typography fontFamily="Public Sans">Notifications</Typography>
    </Box>
  );
}
