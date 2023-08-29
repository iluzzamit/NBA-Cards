import { StyledSearchBox } from "./SearchBox.style";
import { useSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";

export const QUERY_PARAM_SEARCH = 'search'

export function SearchBox() {
    const [query, setQuery] = useSearchParams();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (!value || value === '') {
            query.delete(QUERY_PARAM_SEARCH);
        } else {
            query.set(QUERY_PARAM_SEARCH, event.target.value);
        }
        setQuery(query)
    }

    return (
        <StyledSearchBox>
            <TextField
                label="Search"
                color="secondary"
                className='search-box'
                value={query.get(QUERY_PARAM_SEARCH) || ''}
                onChange={onChange}
            />
        </StyledSearchBox>
    )
}