import { Card } from "@mui/material";
import styled from "styled-components";

export const StyledPlayerCard = styled(Card)<{ color?: string }>`
    background-color: ${({ color }) => color || '#fff'} !important;
    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
    display: flex;
    padding: 1rem;

    .player-details {
        display: flex;
        align-items: center;

        .player-name {
            margin-left: 0.5rem;
        }
    }
`