/* eslint-disable react/prop-types */
import { Button, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import announcement_left from "../../assets/announcement_left.png";

const Annoucement = ({ id }) => {
    return (
        <>
            <Grid container space={0} id={id}>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        height: "320px",
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={announcement_left}
                        style={{
                            objectFit: "contain",
                            width: "90%",
                            height: "90%",
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        height: "320px",
                        backgroundColor: "none",
                        padding: "32px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        fontFamily: "Montserrat sans-serif",
                    }}
                >
                    <Typography variant="h6">HR Announcement 2020</Typography>
                    <Typography
                        variant="p"
                        sx={{ fontSize: "14px", marginTop: "16px" }}
                    >
                        SHORT DESCRIPTION - Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Neque porro quisquam est, qui
                        dolorem.....
                    </Typography>

                    <Button variant="outlined" sx={{ marginTop: "16px" }}>
                        Read More
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};
Annoucement.prototype = { id: PropTypes.string.isRequired };
export default Annoucement;
