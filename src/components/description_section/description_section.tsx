import "./description_section.css";

const DescriptionSection = ({ description }: { description: string }) => {
  return (
    <section className="description-container">
      <h2 className="description">{description}</h2>
    </section>
  );
};

export default DescriptionSection;
