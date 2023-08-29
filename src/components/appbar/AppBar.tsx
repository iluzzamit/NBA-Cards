import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { Toolbar, Typography } from "@mui/material";
import { SearchBox } from "../search-box/SearchBox";
import { StyledAppBar } from "./AppBar.style";

export function AppBar() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <SportsBasketballIcon className='logo' />
        <Typography className='title' variant="h6" component="div">
          NBA Cards
        </Typography>
        <SearchBox />
      </Toolbar>
    </StyledAppBar>
  );
}
