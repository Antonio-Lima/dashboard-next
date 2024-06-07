import { useState } from "react";
import { Box, Typography } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";

import { NotificationType } from "@/@types";

import { THEME } from "@/constants/theme";
import ArrowButton from "../Button/Arrow";

interface TimelineCardProps {
  item: NotificationType;
  onClick: () => void;
}

export default function TimelineCard({ item, onClick }: TimelineCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="12px"
      px="12px"
      py="22px"
      border="1px solid"
      borderColor={THEME.colors["gray-200"]}
      borderRadius="4px"
      mt="17px"
      position="relative"
      sx={{
        "&:before": {
          position: "absolute",
          top: "-18px",
          left: "36px",
          content: "''",
          width: "1px",
          height: "17px",
          backgroundColor: THEME.colors["gray-100"],
        },

        transition: "all 0.3s ease-in-out",

        "&:hover": {
          borderColor: THEME.colors.primary,
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        width="100%"
      >
        {item.comments > 0 && (
          <Typography
            fontFamily="Public Sans"
            fontSize="0.75rem"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            color={hover ? THEME.colors.primary : THEME.colors.black}
            sx={{
              transition: "all 0.3s ease-in-out",
            }}
          >
            <MessageIcon fontSize="small" sx={{ marginRight: "6px" }} />
            {item.comments} NOVOS COMENTÁRIOS
          </Typography>
        )}
        <Box
          width="10px"
          height="10px"
          bgcolor={THEME.colors.primary}
          borderRadius={999}
          mt="-8px"
          sx={{
            opacity: item.read ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      </Box>
      <Box display="flex" alignItems="center" gap="20px">
        <Typography
          fontFamily="Public Sans"
          fontSize="0.875rem"
          fontWeight="regular"
          lineHeight="1.125rem"
          color={THEME.colors["gray-200"]}
          component="div"
          dangerouslySetInnerHTML={{ __html: item.mensage }}
          sx={{
            ">b": {
              color: THEME.colors.black,
            },
          }}
        />
        <ArrowButton color={hover ? "brand" : "primary"} onClick={onClick} />
      </Box>
    </Box>
  );
}
