"use client";
import { Box, Typography } from "@mui/material";

import MessageIcon from "@mui/icons-material/Message";

import { NotificationType } from "@/@types";
import { THEME } from "@/constants/theme";
import { groupNotificationsByDate, isToday } from "@/utils";
import ArrowButton from "../Button/Arrow";

interface NotificationProps {
  notifications: NotificationType[];
  gridArea: string;
}

export default function Notifications({
  notifications,
  gridArea,
}: NotificationProps) {
  const newNotifications = notifications.filter((item) => !item.read).length;
  const groupedNotifications = groupNotificationsByDate(notifications);

  return (
    <Box
      width="100%"
      maxWidth="384px"
      bgcolor={THEME.colors.white}
      display="none"
      maxHeight="min-content"
      flex={1}
      flexDirection="column"
      gridArea={gridArea}
      overflow="hidden"
      sx={{
        "@media (min-width: 1010px)": {
          display: "flex",
        },
      }}
    >
      <Header newNotifications={newNotifications} />
      <Box
        px="17px"
        py="30px"
        display="flex"
        flexDirection="column"
        flex={1}
        overflow="hidden"
      >
        {Object.keys(groupedNotifications).map((key, index) => (
          <Box key={index}>
            <Typography
              fontFamily="Public Sans"
              fontSize="0.875rem"
              fontWeight="regular"
              color={THEME.colors["gray-300"]}
            >
              {isToday(key) ? "Hoje" : key}
            </Typography>
            {groupedNotifications[key].map((item) => (
              <TimelineCard key={item.id} item={item} />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

interface TimelineCardProps {
  item: NotificationType;
}

function TimelineCard({ item }: TimelineCardProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="12px"
      px="12px"
      py="22px"
      border="1px solid"
      borderColor={THEME.colors["gray-200"]}
      borderRadius="4px"
      mt="16px"
      position="relative"
      sx={{
        "&:before": {
          position: "absolute",
          top: "-17px",
          left: "36px",
          content: "''",
          width: "1px",
          height: "16px",
          backgroundColor: THEME.colors["gray-100"],
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
          >
            <MessageIcon fontSize="small" sx={{ marginRight: "6px" }} />
            {item.comments} NOVOS COMENTÁRIOS
          </Typography>
        )}
        {!item.read && (
          <Box
            width="10px"
            height="10px"
            bgcolor={THEME.colors.primary}
            borderRadius={999}
            mt="-8px"
          />
        )}
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
        <ArrowButton />
      </Box>
    </Box>
  );
}

interface HeaderProps {
  newNotifications: number;
}

function Header({ newNotifications }: HeaderProps) {
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
