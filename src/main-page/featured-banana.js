import Banana from "../banana";

const FeaturedBanana = ({ banana }) => {
  if (banana)
    return (
      <div>
        <div className="row featuredBanana">
          <h3 className="col-md-12 text-center">Featured Banana</h3>
        </div>
        <Banana banana={banana} />
      </div>
    );
    return <div>No featured banana at this time</div>;
};

export default FeaturedBanana;
