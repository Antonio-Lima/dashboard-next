import Summary from "@/components/Summary";
import { getHomeData } from "@/services/requests";
import { Box } from "@mui/material";

export default async function Home() {
  const { audience, credits, researches } = await getHomeData();

  return (
    <Box
      display="grid"
      sx={{
        gridTemplateAreas: `"a a a"
      "b b c"`,
      }}
    >
      <Summary
        audience={audience}
        running={researches.running}
        scripting={researches.scripting}
        gridArea="a"
      />
    </Box>
  );
}
