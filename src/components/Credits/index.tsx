import { Box, Typography } from "@mui/material";

import MainCard from "../MainCard";
import { THEME } from "@/constants/theme";
import { CreditsType } from "@/@types";
import { ReactNode } from "react";
import Button from "../Button";

interface CreditsProps {
  credits: CreditsType;
}

export default function Credits({ credits }: CreditsProps) {
  return (
    <MainCard>
      <Typography
        color={THEME.colors.black}
        fontWeight="regular"
        fontSize="0.75rem"
        fontFamily="Public Sans"
      >
        CRÉDITOS PARA PAINEL
      </Typography>
      <Box
        my="18px"
        display="grid"
        gridTemplateAreas={`"a a" "b c"`}
        gridTemplateColumns="1fr 1fr"
        rowGap="12px"
        columnGap="16px"
        sx={{
          [`@media ${THEME.mediaQuery.medium}`]: {
            px: "45px",
          },
        }}
      >
        <PanelCard
          variant="green"
          value={credits.available}
          size="m"
          title={
            <>
              CRÉDITOS <br /> DISPONÍVEIS
            </>
          }
          area="a"
        />
        <PanelCard
          variant="purple"
          value={credits.running}
          size="s"
          title={
            <>
              CRÉDITOS <br /> EM CAMPO
            </>
          }
          area="b"
        />
        <PanelCard
          variant="gray"
          value={credits.reserved}
          size="s"
          title={
            <>
              CRÉDITOS <br /> RESERVADOS
            </>
          }
          area="c"
        />
      </Box>

      <Button color="secondary" label="Gerênciar créditos" />
    </MainCard>
  );
}

interface PanelCardProps {
  variant: "green" | "purple" | "gray";
  value: number;
  title: ReactNode;
  area: "a" | "b" | "c";
  size: "s" | "m";
}
function PanelCard({ variant, value, title, size, area }: PanelCardProps) {
  const color = {
    green: THEME.colors["green-500"],
    purple: THEME.colors["purple-200"],
    gray: THEME.colors["gray-300"],
  };

  return (
    <Box
      gridArea={area}
      bgcolor={color[variant]}
      p="2px"
      pb="10px"
      borderRadius="4px"
      width="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        py="16px"
        borderRadius="2px"
        bgcolor={THEME.colors.white}
        color={
          variant === "gray" ? THEME.colors["gray-300"] : THEME.colors.black
        }
      >
        <Typography
          fontWeight="bold"
          fontSize={size === "s" ? "1.5rem" : "2.375rem"}
          fontFamily="Public Sans"
        >
          {value.toLocaleString("pt-BR")}
        </Typography>
        <Typography
          fontWeight="medium"
          fontSize={size === "s" ? "0.625rem" : "0.75rem"}
          fontFamily="Public Sans"
          textAlign="center"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
