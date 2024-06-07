"use client";
import { Box, Typography } from "@mui/material";

import { NotificationType } from "@/@types";
import { THEME } from "@/constants/theme";
import { groupNotificationsByDate, isToday } from "@/utils";
import ArrowButton from "../Button/Arrow";
import { useState } from "react";
import TimelineCard from "../TimelineCard";
import NotificationsHeader from "./Header";

interface NotificationProps {
  notifications: NotificationType[];
  gridArea: string;
}

export default function Notifications({
  notifications,
  gridArea,
}: NotificationProps) {
  const [list, setList] = useState(notifications);
  const newNotifications = list.filter((item) => !item.read).length;
  const groupedNotifications = groupNotificationsByDate(list);

  function handleNotificationClick(id: string) {
    const newList = list.reduce(
      (acc: NotificationType[], obj: NotificationType) => {
        if (obj.id === id) acc.push({ ...obj, read: true });
        else acc.push(obj);

        return acc;
      },
      []
    );
    setList(newList);
  }

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
      <NotificationsHeader newNotifications={newNotifications} />
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
              <TimelineCard
                key={item.id}
                item={item}
                onClick={() => handleNotificationClick(item.id)}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
