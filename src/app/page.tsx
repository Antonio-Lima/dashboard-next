import Summary from "@/components/Summary";
import { getHomeData } from "@/services/requests";
import { Box } from "@mui/material";

export default async function Home() {
  const { audience, credits, researches } = await getHomeData();

  return (
    <Box>
      <Summary
        audience={audience}
        running={researches.running}
        scripting={researches.scripting}
      />
    </Box>
  );
}
