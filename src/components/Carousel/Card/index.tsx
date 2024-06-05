import { THEME } from "@/constants/theme";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface CardProps {
  status: string;
  title: string;
}

export default function CarouselCard({ status, title }: CardProps) {
  return (
    <Box
      width="230px"
      height="242px"
      bgcolor={THEME.colors.black}
      p="2px"
      pb="12px"
      borderRadius="6px"
    >
      <Box
        bgcolor={THEME.colors.white}
        width="100%"
        height="100%"
        borderRadius="4px"
        pt="22px"
        px="18px"
        position="relative"
      >
        {status.toLocaleLowerCase().includes("campo") && (
          <Box
            position="absolute"
            top="0.5rem"
            right="0.56rem"
            width="6px"
            height="6px"
            borderRadius={999}
            bgcolor={THEME.colors["green-500"]}
          />
        )}
        <Box borderLeft="2px solid" borderColor={THEME.colors.black} pl="2px">
          <Typography
            textTransform="uppercase"
            fontSize="0.75rem"
            fontWeight="medium"
            fontFamily="Public Sans"
            position="relative"
            lineHeight="0.875rem"
          >
            {status}
            {status.toLowerCase() === "rascunho" && (
              <Image
                src="/assets/images/purple-stars.svg"
                alt="stars"
                width={21}
                height={24}
                style={{ position: "absolute", top: -12 }}
              />
            )}
          </Typography>
          <Typography
            fontSize="1.125rem"
            fontWeight="bold"
            color={
              status.toLocaleLowerCase() === "rascunho"
                ? THEME.colors["gray-300"]
                : THEME.colors.black
            }
            fontFamily="Public Sans"
            lineHeight="1.31rem"
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
