
import { Box, Container, Link, Typography } from "@mui/material";

const FooterProps = {
  description: "IMPRESIONES 3D",
  title:"MATIAS POSES",
}
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
      {FooterProps.title}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




function Footer() {
  const { description} = FooterProps;

  return (
    <div>
      <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
        <Container maxWidth="lg">
        
         
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            {description}
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
