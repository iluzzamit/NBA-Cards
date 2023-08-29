import { FavoriteCardsContext } from "../../components/favorite-cards-provider/FavoriteCardsProvider";
import { ListHeader } from "../../components/list-header/ListHeader";
import { StyledDashboardSideContainer } from "./Dashboard.style";
import { Grid } from "@mui/material";
import React from "react";
import { DashboardAllPlayer } from "./DashboardFavoritePlayer";

export function DashboardFavoritePlayers() {
    const { ids } = React.useContext(FavoriteCardsContext);

    return (
        <StyledDashboardSideContainer>
            <ListHeader title="Favorite Players" />
            <Grid container spacing={2} className='list-container'>
                {Array.from(ids || []).map((id) => (
                    <Grid key={id} item xs={4}>
                        <DashboardAllPlayer id={id} />
                    </Grid>
                ))}
            </Grid>
        </StyledDashboardSideContainer>
    )
}