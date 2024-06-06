import { Box } from "@mui/material";

import { getHomeData } from "@/services/requests";

import Summary from "@/components/Summary";
import MainContent from "@/components/MainContent";
import Notifications from "@/components/Notifications";

export default async function Home() {
  const { audience, credits, researches } = await getHomeData();

  return (
    <Box
      display="grid"
      sx={{
        gridTemplateColumns: "1fr 1fr minmax(0, 384px)",
        gridTemplateAreas: `"summary summary summary"
      "main main notifications"`,
      }}
    >
      <Summary
        audience={audience}
        running={researches.running}
        scripting={researches.scripting}
        gridArea="summary"
      />
      <MainContent
        audience={audience}
        credits={credits}
        researches={researches}
        gridArea="main"
      />
      <Box gridArea="notifications" width="384px">
        <Notifications />
      </Box>
    </Box>
  );
}
