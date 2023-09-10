import { useHistory } from "react-router-dom";
import "./search-results.css";

const SearchResultsRow = ({ banana }) => {
  const history = useHistory();

  const setActive = () => {
    history.push(`/banana/${banana.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{banana.address}</td>
      <td>{banana.price}</td>
      <td>{banana.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
