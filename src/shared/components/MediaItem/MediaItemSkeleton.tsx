import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MediaItemSkeleton = () => {
  return (
    <div
      style={{
        height: "55px",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <Skeleton style={{ height: "100%" }} />
    </div>
  );
};

export default MediaItemSkeleton;
