import { Button } from "../../../shared/components";
import Divider from "../../../shared/components/Divider";
import {
  ButtonContainer,
  TopResultContainer,
  TopResultInfo,
  TopResultText,
  TopResultTitle,
} from "./Styles";

const TopResult = () => {
  return (
    <TopResultContainer>
      <TopResultInfo>
        <TopResultText>Top Result</TopResultText>
        <TopResultTitle>The Weeknd</TopResultTitle>
        <Divider />
        <p>Songs</p>
        <Divider />
        <ButtonContainer>
          <Button isActive={false} onClick={() => {}}>
            View Artist
          </Button>
        </ButtonContainer>
      </TopResultInfo>
      <div
        style={{
          height: "250px",
          width: "250px",
          objectFit: "cover",
          overflow: "hidden",
          borderRadius: "16px",
        }}
      >
        <img
          src={
            "https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg"
          }
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    </TopResultContainer>
  );
};

export default TopResult;
