"use client";

import { useState } from "react";
import Image from "next/image";
import { MoreVert } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Link,
  Typography,
  styled,
  ButtonProps,
  Button,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import { Turn as Hamburger } from "hamburger-react";

import { THEME } from "@/constants/theme";
import DropDown from "../DropDown";
import { NotificationType } from "@/@types";
import NotificationsHeader from "../Notifications/Header";
import { groupNotificationsByDate, isToday } from "@/utils";
import TimelineCard from "../TimelineCard";

const navItems = [
  {
    label: "Pesquisas",
    href: "/pesquisas",
  },
  {
    label: "Créditos",
    href: "/creditos",
  },
  {
    label: "Campanhas",
    href: "/campanhas",
  },
  {
    label: "Equipe",
    href: "/equipe",
  },
  {
    label: "Configurações",
    href: "/configuracoes",
  },
];

const user = {
  name: "Antônio Lima",
  email: "antonio.lima@acmecorp.com",
};

interface HeaderProps {
  notifications: NotificationType[];
}

export default function Header({ notifications }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
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
      position="fixed"
      zIndex={99}
      bgcolor={THEME.colors.black}
      px="26px"
      py="8px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width={"100%"}
      borderBottom="1px solid"
      borderColor={THEME.colors["gray-300"]}
    >
      <Box
        display="flex"
        gap="16px"
        alignItems="center"
        sx={{
          [`@media ${THEME.mediaQuery.large}`]: {
            gap: "32px",
          },
        }}
      >
        <Image
          src="/assets/images/logo.svg"
          alt="Company"
          width={36}
          height={36}
          style={{ cursor: "pointer" }}
        />

        <Box
          sx={{
            [`@media ${THEME.mediaQuery.medium}`]: {
              display: "none",
            },
          }}
        >
          <Hamburger
            color={THEME.colors.white}
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
          />
        </Box>
        {navItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            underline="none"
            color={THEME.colors["gray-300"]}
            textTransform="uppercase"
            fontSize="0.75rem"
            display="none"
            sx={{
              "&:hover": {
                color: THEME.colors.white,
              },
              transitionDuration: "0.3s",
              [`@media ${THEME.mediaQuery.medium}`]: {
                display: "block",
              },
            }}
          >
            {item.label}
          </Link>
        ))}
      </Box>
      <Box
        sx={{
          [`@media ${THEME.mediaQuery.medium}`]: {
            display: "none",
          },
        }}
      >
        <Button
          onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          color="inherit"
          sx={{
            position: "relative",
            minWidth: "0",
            width: "44px",
            height: "44px",
            borderRadius: 999,
            background: THEME.colors["gray-500"],
            color: THEME.colors.white,
            "&:hover": {
              background: THEME.colors["gray-500"],
            },
          }}
        >
          {isNotificationsOpen ? (
            <CloseIcon />
          ) : (
            <>
              <NotificationsIcon sx={{ zIndex: 9 }} />
              <Box
                position="absolute"
                top="18%"
                right="22%"
                zIndex={10}
                width="12px"
                height="12px"
                borderRadius={999}
                bgcolor={THEME.colors.primary}
                border="2px solid"
                borderColor={THEME.colors["gray-500"]}
                sx={{ opacity: newNotifications > 0 ? 1 : 0 }}
              />
            </>
          )}
        </Button>
      </Box>
      <Box
        alignItems="center"
        gap="16px"
        display="none"
        sx={{
          [`@media ${THEME.mediaQuery.large}`]: {
            gap: "24px",
          },

          [`@media ${THEME.mediaQuery.medium}`]: {
            display: "flex",
          },
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap="0.625rem"
          border="1px solid"
          borderRadius="4px"
          borderColor={THEME.colors["gray-500"]}
          px="0.75rem"
          py="0.375rem"
        >
          <Image
            src="/assets/images/logo-alt.svg"
            alt="Company"
            width={34}
            height={34}
          />
          <Typography
            color={THEME.colors.white}
            fontWeight="medium"
            fontSize="0.875rem"
            fontFamily="Public Sans"
          >
            ACME Corporation
          </Typography>
        </Box>
        <Box>
          <Typography
            color={THEME.colors.white}
            fontWeight="medium"
            fontSize="0.875rem"
            lineHeight="1rem"
            fontFamily="Public Sans"
          >
            {user.name}
          </Typography>
          <Typography
            color={THEME.colors["gray-300"]}
            fontSize="0.875rem"
            lineHeight="1rem"
            fontFamily="Public Sans"
          >
            {user.email}
          </Typography>
        </Box>
        <MenuButton>
          <MoreVert />
        </MenuButton>
      </Box>

      <DropDown open={isMenuOpen}>
        <Box
          px="12px"
          py="22px"
          bgcolor={THEME.colors["gray-100"]}
          display="flex"
          alignItems="center"
          gap="12px"
          borderBottom="1px solid"
          borderColor={THEME.colors["gray-200"]}
        >
          <Image
            src="/assets/images/logo-alt.svg"
            alt="Company"
            width={34}
            height={34}
          />
          <Typography
            fontWeight="medium"
            fontSize="1rem"
            fontFamily="Public Sans"
          >
            ACME Corporation
          </Typography>
        </Box>

        {navItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            underline="none"
            color={THEME.colors["gray-300"]}
            textTransform="uppercase"
            fontSize="0.875rem"
            width="100%"
            textAlign="center"
            py="17px"
            borderBottom="1px solid"
            borderColor={THEME.colors["gray-200"]}
            sx={{
              "&:hover": {
                color: THEME.colors.white,
                backgroundColor: THEME.colors.black,
              },
              transitionDuration: "0.5s",
            }}
          >
            {item.label}
          </Link>
        ))}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt="32px"
          pb="28px"
        >
          <Typography
            fontWeight="bold"
            fontSize="1rem"
            lineHeight="1rem"
            fontFamily="Public Sans"
          >
            {user.name}
          </Typography>
          <Typography
            color={THEME.colors["gray-300"]}
            fontWeight="regular"
            fontSize="0.875rem"
            lineHeight="1rem"
            fontFamily="Public Sans"
            mt="5px"
          >
            {user.email}
          </Typography>
        </Box>
        <Link
          href="#"
          underline="none"
          color={THEME.colors.black}
          fontSize="1rem"
          fontWeight="regular"
          width="50%"
          mx="auto"
          mb="20px"
          textAlign="center"
          py="17px"
          borderTop="1px solid"
          borderColor={THEME.colors["gray-200"]}
          sx={{
            "&:hover": {
              color: THEME.colors.white,
              backgroundColor: THEME.colors.black,
            },
            transitionDuration: "0.5s",
          }}
        >
          Logout
        </Link>
      </DropDown>
      <DropDown open={isNotificationsOpen}>
        <NotificationsHeader newNotifications={newNotifications} />
        <Box
          px="17px"
          py="30px"
          display="flex"
          flexDirection="column"
          flex={1}
          maxHeight="calc(100vh - 174px)"
          overflow="scroll"
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
      </DropDown>
    </Box>
  );
}

const MenuButton = styled(IconButton)<ButtonProps>({
  color: THEME.colors.white,
  backgroundColor: "transparent",
});
