import "../styles/section.css";

function SectionDetails({ title, description, bgColor }) {
  return (
    <div
      class="Section-container section active"
      style={{ backgroundImage: bgColor }}
    >
      <h3 class="Section-title">{title}</h3>{" "}
      <p class="Section-description">{description}</p>
    </div>
  );
}

export default SectionDetails;
