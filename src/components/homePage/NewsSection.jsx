/* eslint-disable react/prop-types */
import { Grid, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
import newsImg from "../../assets/news_img.png";

const NewsSection = ({ id }) => {
    return (
        <>
            <Grid
                container
                space={0}
                id={id}
                sx={{
                    backgroundColor: "#F5F5F5",
                }}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        height: "320px",
                        padding: "32px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        fontFamily: "Montserrat sans-serif",
                    }}
                >
                    <Typography variant="h6">Corporate News</Typography>
                    <Typography
                        variant="p"
                        sx={{ fontSize: "14px", marginTop: "16px" }}
                    >
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem.
                    </Typography>

                    <Button variant="outlined" sx={{ marginTop: "16px" }}>
                        Read More
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        height: "320px",
                        backgroundColor: "none",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={newsImg}
                        style={{
                            objectFit: "contain",
                            width: "90%",
                            height: "90%",
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
};

NewsSection.prototype = { id: PropTypes.any.isRequired };

export default NewsSection;
