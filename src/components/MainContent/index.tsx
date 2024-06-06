import { AudienceType, CreditsType, ResearchesType } from "@/@types";
import { THEME } from "@/constants/theme";
import { Box, Typography } from "@mui/material";
import Carousel from "../Carousel";

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
    <Box width="100%" gridArea={gridArea} py="55px">
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
      </Box>
    </Box>
  );
}
