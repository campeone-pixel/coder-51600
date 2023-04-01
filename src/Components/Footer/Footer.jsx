import { Box, Container, Typography } from "@mui/material";

const FooterProps = {
  description: "IMPRESIONES 3D",
  title: "MATIAS POSES",
};

function Footer() {
  const { description } = FooterProps;

  return (
    <div>
      <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            {FooterProps.title} {new Date().getFullYear()}
            {"."}
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            {description}
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;
