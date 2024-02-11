import { StyledFilters } from "./Styles";
import { Button } from "../../../shared/components";
import { useState } from "react";

const FilterItem = ({
  text,
  isActive,
  handleClick,
}: {
  text: string;
  isActive: boolean;
  handleClick: () => void;
}) => {
  return (
    <Button isActive={isActive} onClick={handleClick}>
      {text}
    </Button>
  );
};

const Filters = () => {
  const [selected, setSelected] = useState<string>("All");
  const handleClick = (text: string) => {
    setSelected(text);
  };

  return (
    <StyledFilters>
      <FilterItem
        text={"All"}
        isActive={selected === "All"}
        handleClick={() => handleClick("All")}
      />
      <FilterItem
        text={"Songs"}
        isActive={selected === "Songs"}
        handleClick={() => handleClick("Songs")}
      />
      <FilterItem
        text={"Artists"}
        isActive={selected === "Artists"}
        handleClick={() => handleClick("Artists")}
      />
      <FilterItem
        text={"Albums"}
        isActive={selected === "Albums"}
        handleClick={() => handleClick("Albums")}
      />
      <FilterItem
        text={"Playlists"}
        isActive={selected === "Playlists"}
        handleClick={() => handleClick("Playlists")}
      />
    </StyledFilters>
  );
};

export default Filters;
