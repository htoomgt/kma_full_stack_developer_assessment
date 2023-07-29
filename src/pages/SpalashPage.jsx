import { Grid, Typography, Container } from "@mui/material";
import "./SpalashPage.css";

const SpalashPage = () => {
    document.title = "KMA - Splash Page";
    return (
        <>
            <Grid container spacing={2} className={`gridMainConatiner`}>
                <Grid item xs={6} className={`greetingCard`}>
                    <Typography variant="p" className={`orgTitle`}>
                        KMA Group of Companies Enterprise Portal
                    </Typography>
                    <Container>
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
                    </Container>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h1">Splash Page</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default SpalashPage;
