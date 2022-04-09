import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Section from "./containers/Section";

export default function Home() {
  return (
    <ReactFullpage
      licenseKey={""}
      scrollingSpeed={1000}
      navigation={true}
      navigationPosition="right"
      navigationTooltips={["First", "Second", "Third", "Fourth"]}
      waterEffect={true}
      waterEffectOptions="[...]"
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Section />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
