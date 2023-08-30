import { EnumQueryParams } from "../../common/enums/EnumQueryParams";
import { PlayerCard } from "../../components/player-card/PlayerCard";
import { ListHeader } from "../../components/list-header/ListHeader";
import { StyledDashboardSideContainer } from "./Dashboard.style";
import { Player } from "../../common/types/Player";
import { useSearchParams } from "react-router-dom";
import { Grid, Pagination } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export function DashboardAllPlayers() {
    const [query, setQuery] = useSearchParams();

    const search = query.get(EnumQueryParams.SEARCH);
    const page = query.get(EnumQueryParams.PAGE);

    const { data: responseData } = useQuery({
        queryKey: ['players', page, search],
        queryFn: () => {
            let url = `https://www.balldontlie.io/api/v1/players?per_page=50&page=${page || 1}`;
            if (search && search !== '') {
                url += `&search=${search}`
            }
            return fetch(url).then((res) => res.json())
        },
    })

    const { data, meta }: { data: Player[], meta: { current_page: number, total_pages: number } } = responseData || { data: [], meta: { current_page: 0, total_pages: 0 } };
    return (
        <StyledDashboardSideContainer>
            <ListHeader
                title="All Players"
                actionComponent={(
                    <Pagination
                        onChange={(_, value: number) => {
                            query.set(EnumQueryParams.PAGE, value.toString());
                            setQuery(query);
                        }}
                        count={meta.total_pages}
                        page={meta.current_page}
                        variant="outlined"
                    />
                )}
            />
            <Grid container spacing={2} className='list-container'>
                {data.map((player) => (
                    <Grid key={player.id} item xs={4}>
                        <PlayerCard player={player} />
                    </Grid>
                ))}
            </Grid>
        </StyledDashboardSideContainer>
    )
}