import { THEME } from "@/constants/theme";
import { Box } from "@mui/material";

interface GoalProps {
  value: number;
  goal: number;
}

export default function GoalPoints({ value, goal }: GoalProps) {
  const array = Array.from({ length: goal }, (_, i) => i + 1);
  return (
    <Box mt="2.625rem" display="flex" gap="0.375rem">
      {array.map((item) => (
        <Box
          key={item}
          width={12}
          height={12}
          border="1px solid"
          borderColor={THEME.colors["gray-300"]}
          borderRadius={999}
          bgcolor={item <= value ? THEME.colors.white : "transparent"}
        />
      ))}
    </Box>
  );
}
