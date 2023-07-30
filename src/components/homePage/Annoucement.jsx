/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

const Annoucement = ({ id }) => {
    return (
        <>
            <Grid container space={0} id={id}>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ height: "320px", backgroundColor: "green" }}
                >
                    announcement
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ height: "320px", backgroundColor: "indigo" }}
                >
                    announcement image
                </Grid>
            </Grid>
        </>
    );
};
Annoucement.prototype = { id: PropTypes.string.isRequired };
export default Annoucement;
