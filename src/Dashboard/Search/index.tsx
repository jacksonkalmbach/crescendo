import { SearchInput } from "./Styles";
import Input from "../../shared/components/Input";
import DashboardRouteContainer from "../../shared/containers/DashboardRouteContainer";
import Filters from "./Filters";

const Search = () => {
  return (
    <DashboardRouteContainer>
      <SearchInput>
        <Input className="" icon="search" onChange={() => {}} invalid={false} />
      </SearchInput>
      <div>TOP RESULT</div>
      <Filters />
      <p>Recent Searches</p>
      <p>Browse</p>
    </DashboardRouteContainer>
  );
};

export default Search;
