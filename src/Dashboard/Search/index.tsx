import {
  SearchInput,
  SearchResults,
  SearchResultsSectionContainer,
  SearchResultsSectionTitle,
} from "./Styles";
import Input from "../../shared/components/Input";
import DashboardRouteContainer from "../../shared/containers/DashboardRouteContainer";
import Filters from "./Filters";
import TopResult from "./TopResult";
import MediaItem from "../../shared/components/MediaItem";

const Search = () => {
  return (
    <DashboardRouteContainer>
      <SearchInput>
        <Input
          className=""
          icon="search"
          onChange={() => {}}
          invalid={false}
          placeholder="Search"
        />
      </SearchInput>
      <Filters />
      <SearchResults>
        <TopResult />
        <SearchResultsSectionContainer>
          <SearchResultsSectionTitle>Songs</SearchResultsSectionTitle>
          <MediaItem
            title={"Starboy"}
            subTitle="The Weeknd"
            mediaType="song"
            mediaImgUrl="https://m.media-amazon.com/images/I/813XseYNw1L._UF1000,1000_QL80_.jpg"
          />
          <MediaItem
            title={"Starboy"}
            subTitle="The Weeknd"
            mediaType="song"
            mediaImgUrl="https://m.media-amazon.com/images/I/813XseYNw1L._UF1000,1000_QL80_.jpg"
          />
        </SearchResultsSectionContainer>
        <SearchResultsSectionContainer>
          <SearchResultsSectionTitle>Albums</SearchResultsSectionTitle>
          <MediaItem
            title="Trilogy"
            subTitle="The Weeknd"
            mediaType="album"
            mediaImgUrl="https://upload.wikimedia.org/wikipedia/en/9/96/The_Weeknd_-_Trilogy.png"
          />
          <MediaItem
            title="Trilogy"
            subTitle="The Weeknd"
            mediaType="album"
            mediaImgUrl="https://upload.wikimedia.org/wikipedia/en/9/96/The_Weeknd_-_Trilogy.png"
          />
          <MediaItem
            title="Trilogy"
            subTitle="The Weeknd"
            mediaType="album"
            mediaImgUrl="https://upload.wikimedia.org/wikipedia/en/9/96/The_Weeknd_-_Trilogy.png"
          />
          <MediaItem
            title="Trilogy"
            subTitle="The Weeknd"
            mediaType="album"
            mediaImgUrl="https://upload.wikimedia.org/wikipedia/en/9/96/The_Weeknd_-_Trilogy.png"
          />
        </SearchResultsSectionContainer>
      </SearchResults>
    </DashboardRouteContainer>
  );
};

export default Search;
