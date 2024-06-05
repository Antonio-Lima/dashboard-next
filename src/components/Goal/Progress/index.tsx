"use client";

import { THEME } from "@/constants/theme";
import {
  Box,
  LinearProgress,
  linearProgressClasses,
  styled,
} from "@mui/material";

interface GoalProps {
  value: number;
  goal: number;
}

export default function GoalProgress({ value, goal }: GoalProps) {
  const percent = (value * 100) / goal;
  return (
    <Box>
      <BorderLinearProgress variant="determinate" value={percent} />
    </Box>
  );
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  border: "1px solid",
  borderColor: THEME.colors.white,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "transparent",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: THEME.colors.white,
  },
}));
