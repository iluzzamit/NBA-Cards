import { PlayerCard } from "../../components/player-card/PlayerCard";
import { Player } from "../../common/types/Player";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";


export function DashboardAllPlayer({ id }: { id: number }) {

    const { data, isLoading } = useQuery({
        queryKey: ['player', id],
        queryFn: () => {
            let url = `https://www.balldontlie.io/api/v1/players/${id}`;
            return fetch(url).then((res) => res.json())
        },
    })

    if (isLoading) return <CircularProgress />

    return <PlayerCard player={data} />
}