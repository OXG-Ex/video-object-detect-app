import { Skeleton } from "@mui/material";

const PlayerSkeleton: React.FC = () => <Skeleton animation="wave" variant="rectangular" width={1280} height={720} data-testid="player-skeleton" />;

export default PlayerSkeleton;
