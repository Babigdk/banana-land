import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";

const SearchResults = ({ allBananas }) => {
  const { country } = useParams();
  const filteredBananas = allBananas.filter((h) => h.country === country);

  return (
    <div className="mt-2">
      <h4>Results for {country}:</h4>
      <table className="table table-hover">
        <tbody>
          {filteredBananas.map((h) => (
            <SearchResultsRow key={h.id} banana={h} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
