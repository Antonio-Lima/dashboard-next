import { THEME } from "@/constants/theme";
import { getFormatedActualDate } from "@/utils";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import Button from "../Button";
import { Add } from "@mui/icons-material";

export default function Summary() {
  const now = new Date();

  return (
    <Box
      width="100%"
      bgcolor={THEME.colors.black}
      p="1.375rem"
      pb="2.375rem"
      display="flex"
      alignItems="center"
    >
      <Box color={THEME.colors.white} maxWidth="731px" mx="auto">
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
