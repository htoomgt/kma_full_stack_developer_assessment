import { Grid, Typography, Button, Box } from "@mui/material";
import PropTypes from "prop-types";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
const TodoGrid = ({ id }) => {
    return (
        <>
            <Grid container space={0} id={id}>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    sx={{
                        height: "200px",
                        backgroundColor: "none",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "row",
                        padding: "32px",
                    }}
                >
                    <WbSunnyOutlinedIcon
                        sx={{ fontSize: "36px", marginRight: "8px" }}
                    />
                    <Typography variant="h5"> My Day (To Do)</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ minHeight: "320px", backgroundColor: "none" }}
                >
                    <Box
                        sx={{
                            marginTop: "16px",
                            padding: "32px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            fontFamily: "Montserrat sans-serif",
                        }}
                    >
                        <Typography variant="h6">Task #1</Typography>
                        <Typography
                            variant="p"
                            sx={{ fontSize: "14px", marginTop: "16px" }}
                        >
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est.
                        </Typography>

                        <Button variant="outlined" sx={{ marginTop: "16px" }}>
                            View More
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            marginTop: "16px",
                            padding: "32px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            fontFamily: "Montserrat sans-serif",
                        }}
                    >
                        <Typography variant="h6">Task #2</Typography>
                        <Typography
                            variant="p"
                            sx={{ fontSize: "14px", marginTop: "16px" }}
                        >
                            Consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam.
                        </Typography>

                        <Button variant="outlined" sx={{ marginTop: "16px" }}>
                            View More
                        </Button>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ minHeight: "320px", backgroundColor: "none" }}
                >
                    <Box
                        sx={{
                            marginTop: "16px",
                            padding: "32px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            fontFamily: "Montserrat sans-serif",
                        }}
                    >
                        <Typography variant="h6">Task #3</Typography>
                        <Typography
                            variant="p"
                            sx={{ fontSize: "14px", marginTop: "16px" }}
                        >
                            Amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi.
                        </Typography>

                        <Button variant="outlined" sx={{ marginTop: "16px" }}>
                            View More
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            marginTop: "16px",
                            padding: "32px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            fontFamily: "Montserrat sans-serif",
                        }}
                    >
                        <Typography variant="h6">Task #4</Typography>
                        <Typography
                            variant="p"
                            sx={{ fontSize: "14px", marginTop: "16px" }}
                        >
                            Eos qui ratione voluptatem sequi nesciunt. Neque
                            porro quisquam est, qui dolorem ipsum quia dolor sit
                            amet, consectetur, adipisci velit, sed quia non
                            numquam eius modi tempora.
                        </Typography>

                        <Button variant="outlined" sx={{ marginTop: "16px" }}>
                            View More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};
TodoGrid.propTypes = { id: PropTypes.string.isRequired };
export default TodoGrid;
