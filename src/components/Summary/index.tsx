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
      p="1.375rem"
      pb="2.375rem"
      display="flex"
      alignItems="center"
      gap="20px"
      gridArea={gridArea}
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
        <Box width="100%" display="flex" gap="1.25rem" mt="1rem">
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
          />
        </Box>
      </Box>
      <Card>
        <Box
          bgcolor={THEME.colors["purple-200"]}
          px="25px"
          pt="13px"
          pb="26px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="1rem"
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
          >
            Pronto para conhecer seu cliente?
          </Typography>
          <Button label="Nova Pesquisa" icon={<Add />}></Button>
        </Box>
      </Card>
    </Box>
  );
}
