import { DashboardFavoritePlayers } from "./DashboardFavoritePlayers";
import { DashboardAllPlayers } from "./DashboardAllPlayers";
import { StyledDashboard } from "./Dashboard.style";

export function Dashboard() {
    return (
        <StyledDashboard maxWidth={false}>
            <DashboardAllPlayers />
            <DashboardFavoritePlayers />
        </StyledDashboard>
    )
}