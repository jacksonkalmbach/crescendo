import { SearchContainer, SearchInput } from "./Styles";
import Input from "../../shared/components/Input";

const Search = () => {
  return (
    <SearchContainer>
      <SearchInput>
        <Input className="" icon="search" onChange={() => {}} invalid={false} />
      </SearchInput>
      <p>Recent Searches</p>
      <p>Browse</p>
    </SearchContainer>
  );
};

export default Search;
