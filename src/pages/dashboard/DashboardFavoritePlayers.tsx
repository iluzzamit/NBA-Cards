import { FavoriteCardsContext } from "../../components/favorite-cards-provider/FavoriteCardsProvider";
import { ListHeader } from "../../components/list-header/ListHeader";
import { DashboardFavoritePlayer } from "./DashboardFavoritePlayer";
import { StyledDashboardSideContainer } from "./Dashboard.style";
import { Grid, IconButton, Popover } from "@mui/material";
import ColorizeIcon from '@mui/icons-material/Colorize';
import { HexColorPicker } from "react-colorful";
import React from "react";

const DEFAULT_COLOR = '#96ccff'

export function DashboardFavoritePlayers() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [color, setColor] = React.useState(DEFAULT_COLOR);
    const { ids } = React.useContext(FavoriteCardsContext);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledDashboardSideContainer>
            <ListHeader
                title="Favorite Players"
                actionComponent={(
                    <React.Fragment>
                        <IconButton size="small" onClick={handleClick}>
                            <ColorizeIcon fontSize="small" />
                        </IconButton>
                        <Popover
                            open={!!anchorEl}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <HexColorPicker color={color} onChange={setColor} />
                        </Popover>
                    </React.Fragment>

                )}
            />
            <Grid container spacing={2} className='list-container'>
                {Array.from(ids || []).map((id) => (
                    <Grid key={id} item xs={4}>
                        <DashboardFavoritePlayer id={id} color={color} />
                    </Grid>
                ))}
            </Grid>
        </StyledDashboardSideContainer>
    )
}