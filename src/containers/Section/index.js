import "../../styles/section.css";
import { SECTION_CONSTANTS } from "../../constants/Constants";
import SectionDetails from "../../components/SectionDetails";

function Section() {
  return (
    <div id="fullpage">
      {SECTION_CONSTANTS.map((item) => (
        <SectionDetails
          title={item.title}
          description={item.description}
          bgColor={item.bgcolor}
        />
      ))}
    </div>
  );
}

export default Section;
