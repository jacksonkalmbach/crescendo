import CircleImage from "../../../shared/components/CircleImage";
import { StyledUserCard } from "./Styles";

const UserCard = () => {
  return (
    <StyledUserCard>
      <CircleImage
        url={
          "https://lh3.googleusercontent.com/a/ACg8ocIPmwd1c6B6iHdVoolwd0Xr7PBdrnGcAF9H4ctr7k8ykNo=s576-c-no"
        }
      />
      <p>Jackson Kalmbach</p>
    </StyledUserCard>
  );
};

export default UserCard;
