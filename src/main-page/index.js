import { useState, useEffect, useMemo } from "react";
import "./main-page.css";
import Header from "./header";
import FeaturedBanana from "./featured-banana";
import BananaFilter from "./banana-filter";
import SearchResults from "../search-results";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BananaFromQuery from "../banana/BananaFromQuery";

function App() {
  const [allBananas, setAllBananas] = useState([]);

  useEffect(() => {
    const fetchBananas = async () => {
      const rsp = await fetch("/bananas.json");
      const bananas = await rsp.json();
      setAllBananas(bananas);
    };
    fetchBananas();
  }, []);

  const featuredBanana = useMemo(() => {
    if (allBananas.length) {
      const randomIndex = Math.floor(Math.random() * allBananas.length);
      return allBananas[randomIndex];
    }
  }, [allBananas]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing banana all over the world" />
        <BananaFilter allBananas={allBananas} />

        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allBananas={allBananas} />
          </Route>

          <Route path="/banana/:id">
            <BananaFromQuery allBananas={allBananas} />
          </Route>

          <Route path="/">
            <FeaturedBanana banana={featuredBanana} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
