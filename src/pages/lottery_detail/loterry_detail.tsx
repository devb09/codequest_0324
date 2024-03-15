import { useParams } from "react-router-dom";
import TitleSection from "../../components/title_section/title_section";
import DescriptionSection from "../../components/description_section/description_section";
import "./lottery_detail.css";
import LotteryParticipants from "../../components/lottery_participants/lottery_participants";

const LoterryDetail = () => {
  const { id } = useParams();

  const users = [
    { name: "Brayan" }, { name: "Laura" },
    { name: "Brayan" }, { name: "Laura" },
    { name: "Brayan" }, { name: "Laura" },
  ];

  return (
    <section className="detail-section">
      <TitleSection title="titulo" />
      <DescriptionSection description="Descripción detallada del sorteo" />
      {id}
      <LotteryParticipants participants={users}/>
    </section>
  );
};

export default LoterryDetail;
