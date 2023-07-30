import { Grid, Typography, Box } from "@mui/material";
import bgClipArt from "../../assets/bg_clip_art.png";
import "./GreetingCard.css";

const GreetingCard = () => {
    return (
        <Grid item xs={6} className={`greetingCard`}>
            <Typography variant="p" className={`orgTitle`}>
                KMA Group of Companies Enterprise Portal
            </Typography>
            <Box className={`discriptionBlock`}>
                <p className={`orgDescription`}>
                    Kaung Myanmar Aung (KMA) is a group of companies registered
                    under The Myanmar Companies Act. One of Myanmar’s renowned
                    and respected organizations, the foundations of the group
                    were laid almost 25 years ago.
                </p>
                <p className={`orgDescription`}>
                    KMA Group has a broad and diversified portfolio of interests
                    and our associated companies operate across almost all
                    sectors of Myanmar’s economy.
                </p>
            </Box>
            <img src={bgClipArt} className={`bgClipArt`} />
        </Grid>
    );
};

GreetingCard.propTypes = {};

export default GreetingCard;
