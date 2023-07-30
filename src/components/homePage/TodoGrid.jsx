import { Grid } from "@mui/material";
import PropTypes from "prop-types";
const TodoGrid = ({ id }) => {
    return (
        <>
            <Grid container space={0} id={id}>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ height: "320px", backgroundColor: "teal" }}
                >
                    to do left panel
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ height: "320px", backgroundColor: "lightBlue" }}
                >
                    to do right panel
                </Grid>
            </Grid>
        </>
    );
};
TodoGrid.propTypes = { id: PropTypes.string.isRequired };
export default TodoGrid;
