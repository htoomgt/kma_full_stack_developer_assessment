/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

const NewsSection = ({ id }) => {
    return (
        <>
            <Grid container space={0} id={id}>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ height: "320px", backgroundColor: "purple" }}
                >
                    news
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ height: "320px", backgroundColor: "pink" }}
                >
                    news image
                </Grid>
            </Grid>
        </>
    );
};

NewsSection.prototype = { id: PropTypes.any.isRequired };

export default NewsSection;
