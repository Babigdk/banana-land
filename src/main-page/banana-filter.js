import { useHistory } from "react-router-dom";

const BananaFilter = ({ allBananas }) => {
  const history = useHistory();

  const countries = allBananas
    ? Array.from(new Set(allBananas.map((h) => h.country)))
    : [];
  countries.unshift(null);

  const onSearchChange = (e) => {
    const country = e.target.value;
    history.push(`/searchresults/${country}`);
  };

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your banana type:
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select" onChange={onSearchChange}>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BananaFilter;
