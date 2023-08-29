import { PlayerCard } from "../../components/player-card/PlayerCard";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";


export function DashboardFavoritePlayer({ id, color }: { id: number, color: string }) {

    const { data, isLoading } = useQuery({
        queryKey: ['player', id],
        queryFn: () => {
            let url = `https://www.balldontlie.io/api/v1/players/${id}`;
            return fetch(url).then((res) => res.json())
        },
    })

    if (isLoading) return <CircularProgress />

    return <PlayerCard player={data} color={color} />
}