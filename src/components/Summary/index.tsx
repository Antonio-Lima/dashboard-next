import { Add } from "@mui/icons-material";
import Image from "next/image";
import { Box, Card, Typography } from "@mui/material";

import { THEME } from "@/constants/theme";

import { getFormatedActualDate } from "@/utils";

import Button from "../Button";
import SummaryCard from "./Card";
import { AudienceType } from "@/@types";

interface SummaryProps {
  running: string;
  scripting: number;
  audience: AudienceType;
  gridArea: string;
}

export default function Summary({
  running,
  scripting,
  audience,
  gridArea,
}: SummaryProps) {
  const [runningValue, runningGoal] = running.split("/");

  return (
    <Box
      width="100%"
      bgcolor={THEME.colors.black}
      p="14px"
      pb="60px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="20px"
      gridArea={gridArea}
      sx={{
        [`@media ${THEME.mediaQuery.medium}`]: {
          flexDirection: "row",
          p: "22px",
          pb: "38px",
        },
      }}
    >
      <Box color={THEME.colors.white} maxWidth="731px" width="100%" mx="auto">
        <Typography
          fontWeight="regular"
          fontSize="0.625rem"
          lineHeight="0.75rem"
          fontFamily="Public Sans"
        >
          RESUMO MENSAL
        </Typography>
        <Typography
          textTransform="uppercase"
          fontWeight="bold"
          fontSize="1.375rem"
          lineHeight="1.625rem"
          fontFamily="Public Sans"
        >
          {getFormatedActualDate()}
        </Typography>
        <Box
          width="100%"
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gridTemplateAreas={`"a b" "c c"`}
          gap="20px"
          mt="16px"
          sx={{
            [`@media ${THEME.mediaQuery.medium}`]: {
              display: "flex",
            },
          }}
        >
          <SummaryCard
            value={Number(runningValue)}
            goal={Number(runningGoal)}
            title={
              <>
                PESQUISAS <br /> EM CAMPO
              </>
            }
            hasMark
            variant="points"
            gridArea="a"
          />
          <SummaryCard
            value={scripting}
            goal={0}
            title={
              <>
                PESQUISAS EM
                <br />
                ROTEIRIZAÇÃO
              </>
            }
            variant="none"
            gridArea="b"
          />
          <SummaryCard
            value={audience.sended}
            goal={audience.balance}
            title={
              <>
                DISPAROS
                <br />
                FEITOS
              </>
            }
            variant="progression"
            gridArea="c"
          />
        </Box>
      </Box>
      <Box
        bgcolor={THEME.colors["purple-200"]}
        px="25px"
        pt="13px"
        pb="26px"
        width="100%"
        display="flex"
        maxWidth="731px"
        flexDirection="column"
        alignItems="center"
        gap="16px"
        borderRadius="4px"
        sx={{
          [`@media ${THEME.mediaQuery.medium}`]: {
            maxWidth: "345px",
          },
        }}
      >
        <Image
          src="/assets/images/stars.svg"
          alt="Stars"
          width={92}
          height={92}
        />
        <Typography
          fontWeight="bold"
          fontSize="1.125rem"
          color={THEME.colors.black}
          fontFamily="Public Sans"
          textAlign="center"
        >
          Pronto para conhecer seu cliente?
        </Typography>
        <Button label="Nova Pesquisa" icon={<Add />}></Button>
      </Box>
    </Box>
  );
}
