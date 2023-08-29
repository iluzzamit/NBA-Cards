import { FavoriteCardsContext } from '../favorite-cards-provider/FavoriteCardsProvider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar, IconButton, Typography } from "@mui/material";
import { StyledPlayerCard } from "./PlayerCard.style";
import Favorite from '@mui/icons-material/Favorite';
import { Player } from "../../common/types/Player";
import React from 'react';

export function PlayerCard({ player, color }: { player: Player, color?: string }) {
    const { ids, setIds } = React.useContext(FavoriteCardsContext);

    const toggleFavorite = () => {
        if (!ids) return;

        if (ids?.has(player.id)) {
            ids.delete(player.id);
        } else {
            ids?.add(player.id)
        }
        setIds?.(new Set(ids));
    }

    return (
        <StyledPlayerCard color={color}>
            <div className='player-details'>
                <Avatar>{player.position}</Avatar>
                <Typography className='player-name' variant='body2'>{player.first_name} {player.last_name}</Typography>
            </div>
            <IconButton onClick={toggleFavorite}>
                    {ids?.has(player.id) ? <Favorite color='primary' /> : <FavoriteBorderIcon />}
            </IconButton>
        </StyledPlayerCard>
    )
}