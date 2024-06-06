import { Box, Typography } from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";

import { AudienceType } from "@/@types";

import { THEME } from "@/constants/theme";

import MainCard from "../MainCard";
import Button from "../Button";

interface SendedProps {
  audience: AudienceType;
}

export default function Sended({ audience }: SendedProps) {
  return (
    <MainCard title="disparos" icon={<MailIcon fontSize="small" />}>
      <Box display="flex" alignItems="flex-end" height="fit-content">
        <Typography
          fontWeight="bold"
          fontSize="1.875rem"
          lineHeight="1.875rem"
          fontFamily="Public Sans"
        >
          {audience.sended.toLocaleString("pt-BR")}
        </Typography>
        <Typography
          fontWeight="regular"
          fontSize="1.125rem"
          lineHeight="1.125rem"
          color={THEME.colors["gray-300"]}
          mb="2px"
          fontFamily="Public Sans"
        >
          /{audience.balance.toLocaleString("pt-BR")}
        </Typography>
      </Box>
      <Typography
        fontWeight="bold"
        fontSize="0.875rem"
        fontFamily="Public Sans"
        mb="20px"
      >
        Disparos feitos
      </Typography>
      <Button label="Ir para campanhas" />
    </MainCard>
  );
}
