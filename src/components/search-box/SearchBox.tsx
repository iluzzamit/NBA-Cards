import { EnumQueryParams } from "../../common/enums/EnumQueryParams";
import { StyledSearchBox } from "./SearchBox.style";
import { useSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";

export function SearchBox() {
    const [query, setQuery] = useSearchParams();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (!value || value === '') {
            query.delete(EnumQueryParams.SEARCH);
        } else {
            query.set(EnumQueryParams.SEARCH, event.target.value);
        }
        setQuery(query)
    }

    return (
        <StyledSearchBox>
            <TextField
                label="Search"
                color="secondary"
                className='search-box'
                value={query.get(EnumQueryParams.SEARCH) || ''}
                onChange={onChange}
            />
        </StyledSearchBox>
    )
}