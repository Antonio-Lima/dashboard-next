import { Box, Typography } from "@mui/material";

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
  return (
    <Box
      width="100%"
      gridArea={gridArea}
      py="60px"
      px="14px"
      sx={{
        [`@media ${THEME.mediaQuery.medium}`]: {
          py: "55px",
        },
        "@media (min-width: 1010px) AND (max-width: 1920px)": {
          px: "80px",
        },
        "@media (min-width: 1920px)": {
          pr: "367px",
        },
      }}
    >
      <Box
        maxWidth="480px"
        width="100%"
        mx="auto"
        sx={{
          "@media (min-width: 1280px)": { maxWidth: "731px" },
          "@media (max-width: 1010px)": { maxWidth: "731px" },
        }}
      >
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
          flexDirection={"column"}
          sx={{
            "@media (min-width: 1280px)": {
              flexDirection: "row",
            },
          }}
        >
          <Credits credits={credits} />
          <Box
            display="flex"
            width="100%"
            maxWidth={"none"}
            flexDirection="column"
            gap="20px"
            sx={{
              "@media (min-width: 1280px)": {
                maxWidth: "343px",
              },
            }}
          >
            <Audience audience={audience} />
            <Sended audience={audience} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
