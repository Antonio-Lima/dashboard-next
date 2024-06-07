"use client";

import Image from "next/image";
import { MoreVert } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Link,
  Typography,
  styled,
  ButtonProps,
} from "@mui/material";
import { Turn as Hamburger } from "hamburger-react";

import { THEME } from "@/constants/theme";
import { useState } from "react";
import DropDown from "../DropDown";

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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    </Box>
  );
}

const MenuButton = styled(IconButton)<ButtonProps>({
  color: THEME.colors.white,
  backgroundColor: "transparent",
});
