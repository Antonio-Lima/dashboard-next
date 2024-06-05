import GoalPoints from "@/components/Goal/Points";
import GoalProgress from "@/components/Goal/Progress";
import { THEME } from "@/constants/theme";
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface CardProps {
  value: number;
  goal: number;
  title: ReactNode;
  variant: "points" | "progression" | "none";
}

export default function SummaryCard({
  value,
  goal,
  title,
  variant,
}: CardProps) {
  return (
    <Box
      width="100%"
      borderRadius="4px"
      bgcolor={THEME.colors["gray-500"]}
      p="1.375rem"
      border="1px solid"
      borderColor={THEME.colors["gray-500"]}
    >
      <Box display="flex" alignItems="flex-end">
        <Typography
          fontWeight="bold"
          fontSize="1.875rem"
          lineHeight="1.875rem"
          color={THEME.colors.white}
        >
          {value.toLocaleString("pt-BR")}
        </Typography>
        {goal > 0 && (
          <Typography
            fontWeight="regular"
            fontSize="1.125rem"
            lineHeight="1.125rem"
            color={THEME.colors["gray-300"]}
            mb="2px"
          >
            /{goal.toLocaleString("pt-BR")}
          </Typography>
        )}
      </Box>
      <Typography
        fontSize="0.875rem"
        fontWeight="medium"
        color={THEME.colors["gray-300"]}
        mt="0.375rem"
        mb="2.625rem"
      >
        {title}
      </Typography>
      {variant === "points" && <GoalPoints value={value} goal={goal} />}
      {variant === "progression" && <GoalProgress value={value} goal={goal} />}
    </Box>
  );
}
