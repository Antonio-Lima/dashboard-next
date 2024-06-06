import { Box, Typography } from "@mui/material";

import FolderSharedIcon from "@mui/icons-material/FolderShared";
import EastIcon from "@mui/icons-material/East";

import { AudienceType } from "@/@types";
import { THEME } from "@/constants/theme";
import MainCard from "../MainCard";
import Button from "../Button";
import ArrowButton from "../Button/Arrow";

interface AudienceProps {
  audience: AudienceType;
}

export default function Audience({ audience }: AudienceProps) {
  return (
    <MainCard title="audiência" icon={<FolderSharedIcon fontSize="small" />}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            color={THEME.colors.black}
            fontWeight="bold"
            fontSize="2.375rem"
            fontFamily="Public Sans"
          >
            {audience.contacts.toLocaleString("pt-BR")}
          </Typography>
          <Typography
            color={THEME.colors.black}
            fontWeight="bold"
            fontSize="0.875rem"
            fontFamily="Public Sans"
          >
            Contatos
          </Typography>
        </Box>
        <ArrowButton />
      </Box>
    </MainCard>
  );
}
