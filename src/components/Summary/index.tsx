import { THEME } from "@/constants/theme";
import { getFormatedActualDate } from "@/utils";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import Button from "../Button";
import { Add } from "@mui/icons-material";
import { ReactNode } from "react";

export default function Summary() {
  return (
    <Box
      width="100%"
      bgcolor={THEME.colors.black}
      p="1.375rem"
      pb="2.375rem"
      display="flex"
      alignItems="center"
    >
      <Box color={THEME.colors.white} maxWidth="731px" width="100%" mx="auto">
        <Typography
          fontWeight="regular"
          fontSize="0.625rem"
          lineHeight="0.75rem"
        >
          RESUMO MENSAL
        </Typography>
        <Typography
          textTransform="uppercase"
          fontWeight="bold"
          fontSize="1.375rem"
          lineHeight="1.625rem"
        >
          {getFormatedActualDate()}
        </Typography>
        <Box width="100%" display="flex" gap="1.25rem" mt="1rem">
          <SummaryCard
            value="0"
            goal="5"
            title={
              <>
                PESQUISAS <br /> EM CAMPO
              </>
            }
            variant="points"
          />
          <SummaryCard
            value="300"
            goal=""
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
            value="2.000"
            goal="10.000"
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
          >
            Pronto para conhecer seu cliente?
          </Typography>
          <Button label="Nova Pesquisa" icon={<Add />}></Button>
        </Box>
      </Card>
    </Box>
  );
}

interface CardProps {
  value: string;
  goal: string;
  title: ReactNode;
  variant: "points" | "progression" | "none";
}

function SummaryCard({ value, goal, title, variant }: CardProps) {
  return (
    <Box
      width="100%"
      borderRadius="4px"
      bgcolor={THEME.colors["gray-500"]}
      p="1.375rem"
      border="1px solid"
      borderColor={THEME.colors["gray-500"]}
    >
      <Goal value={value} goal={goal} />
      <Typography
        fontSize="0.875rem"
        fontWeight="medium"
        color={THEME.colors["gray-300"]}
        mt="0.375rem"
      >
        {title}
      </Typography>
    </Box>
  );
}

interface GoalProps {
  goal: string;
  value: string;
}
function Goal({ goal, value }: GoalProps) {
  return (
    <Box display="flex" alignItems="flex-end">
      <Typography
        fontWeight="bold"
        fontSize="1.875rem"
        lineHeight="1.875rem"
        color={THEME.colors.white}
      >
        {value}
      </Typography>
      {goal && (
        <Typography
          fontWeight="regular"
          fontSize="1.125rem"
          lineHeight="1.125rem"
          color={THEME.colors["gray-300"]}
          mb="2px"
        >
          /{goal}
        </Typography>
      )}
    </Box>
  );
}
