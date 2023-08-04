import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import kmaLogo from "../../assets/kma_logo.png";

export default function Footer() {
    const content = {
        brand: { image: kmaLogo, width: 80 },
        copy: "© 2020 KMA All rights reserved.",
        link1: "announcement",
        link2: "news",
        link3: "tasks",
    };

    let brand;

    if (content.brand.image) {
        brand = (
            <img src={content.brand.image} alt="" width={content.brand.width} />
        );
    } else {
        brand = content.brand.text || "";
    }

    return (
        <footer>
            <Container maxWidth="lg">
                <Box
                    py={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "32px",
                    }}
                >
                    <Link href="#" color="inherit" underline="none">
                        {brand}
                    </Link>
                    {/* <Box component="nav" c>
                        <Link href={`#`} variant="body1" color="textPrimary">
                            {content["link1"]}
                        </Link>
                        <Link href="#" variant="body1" color="textPrimary">
                            {content["link2"]}
                        </Link>
                        <Link href="#" variant="body1" color="textPrimary">
                            {content["link3"]}
                        </Link>
                        <Link href="#" variant="body1" color="textPrimary">
                            {content["link4"]}
                        </Link>
                    </Box> */}
                    <Typography
                        color="textSecondary"
                        component="p"
                        variant="caption"
                        gutterBottom={false}
                    >
                        {content["copy"]}
                    </Typography>
                </Box>
            </Container>
        </footer>
    );
}
