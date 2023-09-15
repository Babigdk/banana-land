import { useParams } from "react-router-dom";
import Banana from "./";

const BananaFromQuery = ({ allBananas }) => {
  const { id } = useParams();
  const banana = allBananas.find((h) => h.id === parseInt(id));

  if (!banana) return <div>Banana not found.</div>;
  return <Banana banana={banana}></Banana>;
};

export default BananaFromQuery;
