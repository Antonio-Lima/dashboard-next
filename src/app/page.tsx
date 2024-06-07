import { getHomeData, getNotifications } from "@/services/requests";

import Summary from "@/components/Summary";
import MainContent from "@/components/MainContent";
import Notifications from "@/components/Notifications";
import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";

export default async function Home() {
  const { audience, credits, researches } = await getHomeData();
  const notifications = await getNotifications();

  return (
    <>
      <Header />
      <Wrapper>
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
        <Notifications notifications={notifications} gridArea="notifications" />
      </Wrapper>
    </>
  );
}
