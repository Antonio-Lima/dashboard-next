"use client";

import { THEME } from "@/constants/theme";
import { MoreVert } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Link,
  Typography,
  styled,
  ButtonProps,
} from "@mui/material";
import Image from "next/image";

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

export default function Header() {
  return (
    <Box
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
      <Box display="flex" gap="2rem" alignItems="center">
        <Image
          src="/assets/images/logo.svg"
          alt="Company"
          width={36}
          height={36}
          style={{ cursor: "pointer" }}
        />
        {navItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            underline="none"
            color={THEME.colors["gray-300"]}
            textTransform="uppercase"
            fontSize="0.75rem"
            sx={{
              "&:hover": {
                color: THEME.colors.white,
              },
              transitionDuration: "0.3s",
            }}
          >
            {item.label}
          </Link>
        ))}
      </Box>
      <Box display="flex" alignItems="center" gap="1.5rem">
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
          >
            Antônio Lima
          </Typography>
          <Typography
            color={THEME.colors["gray-300"]}
            fontSize="0.875rem"
            lineHeight="1rem"
          >
            antonio.lima@acmecorp.com
          </Typography>
        </Box>
        <MenuButton>
          <MoreVert />
        </MenuButton>
      </Box>
    </Box>
  );
}

const MenuButton = styled(IconButton)<ButtonProps>({
  color: THEME.colors.white,
  backgroundColor: "transparent",
});
