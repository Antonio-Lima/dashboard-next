import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

import { AudienceType, CreditsType, ResearchesType } from "@/@types";

import { THEME } from "@/constants/theme";

import Carousel from "../Carousel";
import Credits from "../Credits";
import MainCard from "../MainCard";
import Audience from "../Audience";

interface MainContentProps {
  audience: AudienceType;
  researches: ResearchesType;
  credits: CreditsType;
  gridArea: string;
}

export default function MainContent({
  audience,
  researches,
  credits,
  gridArea,
}: MainContentProps) {
  return (
    <Box width="100%" gridArea={gridArea} py="55px" px="70px">
      <Box maxWidth="731px" width="100%" mx="auto">
        <Typography
          color={THEME.colors.black}
          fontWeight="bold"
          fontSize="1.25rem"
          fontFamily="Public Sans"
        >
          Minhas Pesquisas
        </Typography>

        {researches.myresearches.length > 0 && (
          <Carousel data={researches.myresearches} />
        )}
        <Box display="flex" width="100%" gap="20px" pt="52px">
          <Credits credits={credits} />
          <Box display="flex" flexDirection="column" gap="20px">
            <Audience audience={audience} />
            <MainCard title="disparos" icon={<MailIcon fontSize="small" />}>
              <Typography
                color={THEME.colors.black}
                fontWeight="bold"
                fontSize="1.25rem"
                fontFamily="Public Sans"
              >
                CRÉDITOS PARA PAINEL
              </Typography>
            </MainCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
