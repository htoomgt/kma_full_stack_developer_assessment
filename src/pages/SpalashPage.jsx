import { Grid, Typography, Box } from "@mui/material";
import "./SpalashPage.css";
import bgClipArt from "../assets/bg_clip_art.png";

const SpalashPage = () => {
    document.title = "KMA - Splash Page";
    return (
        <>
            <Grid container spacing={2} className={`gridMainConatiner`}>
                <Grid item xs={6} className={`greetingCard`}>
                    <Typography variant="p" className={`orgTitle`}>
                        KMA Group of Companies Enterprise Portal
                    </Typography>
                    <Box className={`discriptionBlock`}>
                        <p className={`orgDescription`}>
                            Kaung Myanmar Aung (KMA) is a group of companies
                            registered under The Myanmar Companies Act. One of
                            Myanmar’s renowned and respected organizations, the
                            foundations of the group were laid almost 25 years
                            ago.
                        </p>
                        <p className={`orgDescription`}>
                            KMA Group has a broad and diversified portfolio of
                            interests and our associated companies operate
                            across almost all sectors of Myanmar’s economy.
                        </p>
                    </Box>
                    <img src={bgClipArt} className={`bgClipArt`} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h1">Splash Page</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default SpalashPage;
