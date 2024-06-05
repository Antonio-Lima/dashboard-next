import { THEME } from "@/constants/theme";
import { Box, Button, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export default function MoreCard() {
  return (
    <Button
      color="inherit"
      sx={{
        background: THEME.colors.black,
        width: "230px",
        height: "242px",
        "&:hover": {
          backgroundColor: THEME.colors.black,
          ">div": {
            marginLeft: "60px",
          },
        },
      }}
    >
      <Box
        display="flex"
        alignItems="flex-end"
        flexDirection="column"
        gap="10px"
        color={THEME.colors.white}
        sx={{
          transition: "all 0.5s ease",
        }}
      >
        <Typography
          fontFamily="Public Sans"
          textTransform="uppercase"
          fontSize="0.875rem"
          fontWeight="bold"
        >
          Ver todas
        </Typography>
        <EastIcon fontSize="small" />
      </Box>
    </Button>
  );
}
