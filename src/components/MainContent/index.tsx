"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";

import { AudienceType, CreditsType, ResearchesType } from "@/@types";

import { THEME } from "@/constants/theme";

import Carousel from "../Carousel";
import Credits from "../Credits";
import Audience from "../Audience";
import Sended from "../Sended";

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
  const large = useMediaQuery(THEME.mediaQuery.xlarge);

  return (
    <Box
      width="100%"
      gridArea={gridArea}
      py="55px"
      px={large ? 0 : "80px"}
      pr={large ? "367px" : "80px"}
    >
      <Box maxWidth={large ? "731px" : "480px"} width="100%" mx="auto">
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
        <Box
          display="flex"
          width="100%"
          gap="20px"
          pt="52px"
          flexDirection={large ? "row" : "column"}
        >
          <Credits credits={credits} />
          <Box
            display="flex"
            width="100%"
            maxWidth={large ? "343px" : "none"}
            flexDirection="column"
            gap="20px"
          >
            <Audience audience={audience} />
            <Sended audience={audience} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
