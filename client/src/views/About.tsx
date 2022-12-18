import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Header from "../components/Header";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">CyberAlert</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const footers = [
  {
    title: "Resources",
    description: [
      {
        name: "Github",
        links: "https://github.com/MAP-E-Pinto-C-Ma-N-Xu/riskassessment",
      },
      {
        name: "MasterProject",
        links: "https://github.com/MAP-E-Pinto-C-Ma-N-Xu/riskassessment",
      },
    ],
  },
];

const teams = [
  {
    title: "Team",
    people: [
      {
        name: "Neng Xu",
        position: "Developer",
      },
      {
        name: "Euxane Vaz Pinto",
        position: "Developer",
      },
      {
        name: "Chenfei Ma",
        position: "Developer",
      },
      {
        name: "Dr. Muriel Franco",
        position: "Project Manager",
      },
    ],
  },
];

const explaination = [
  {
    name: "Access Control",
    detail:
      "Multi-factor authentication (MFA) has been shown to lower the risk of different types of cyberattacks. Authorization is already a good step to improve cybersecurity.",
  },
  {
    name: "Cybersecurity",
    detail:
      "It is important for the employees to understand the risks that they are subject to so that they can behave according to best practice.",
  },
  {
    name: "Cybersecurity Investment",
    detail:
      "Enterprises invest the different amounts in cybersecurity, usually between 6 and 14 % of their IT budget. 13.7% is thought to be a good percentage to be allocated.",
  },
  {
    name: "Data Storage",
    detail:
      "Security measures undertaken by bigger cloud providers are likely to be more robust than local ones.",
  },
  {
    name: "IT Support",
    detail:
      "IT specialists help the company to take effective and quick measures to prevent cyberattacks.",
  },
  {
    name: "Number of Employee",
    detail:
      "The number of employees is positively correlated with the number of social engineering vulnerabilities an enterprise is subject to. This is not an issue if they have undergone good training.",
  },
  {
    name: "Revenue",
    detail:
      "A high revenue goes both ways: more money to invest into cybersecurity, but also more appealing to cybercriminals.",
  },
  {
    name: "Attack Frequency (by industry)",
    detail:
      "Some industries have been found to be attacked more frequently than others.",
  },
  {
    name: "Vulnerability Identification",
    detail:
      "There are a number of known vulnerabilities in an enterprise's system, that have been discovered but have not been patched yet.",
  },
];

const About = () => {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Header />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          About this project
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          component="p"
        >
          CyberAlert focuses on applying ML techniques to address different risk
          assessment challenges, such as the lack of information, lack of
          cybersecurity experts, and limited budget to perform complex
          tasks.Thus, it provides a simplified approach to understanding
          possible risks a business could face due to cyberattacks.
        </Typography>
      </Container>

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          {teams.map((team) => (
            <Grid item xs={6} sm={6} key={team.title}>
              <Typography
                variant="h4"
                color="text.primary"
                gutterBottom
                align="center"
              >
                {team.title}
              </Typography>
              <ul>
                {team.people.map((person) => (
                  <li key={person.name}>
                    <Typography
                      variant="h6"
                      color="text.primary"
                      gutterBottom
                      align="center"
                    >
                      {person.name}
                      {" - "}
                      {person.position}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container
        disableGutters
        maxWidth="lg"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Explanation in detail
        </Typography>
        <Grid container spacing={5} alignItems="flex-start">
          {explaination.map((item) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={item.name}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Typography variant="subtitle1" align="center">
                    {item.detail}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.links}
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>

        <Copyright sx={{ mt: 5 }} />
      </Container>
    </React.Fragment>
  );
};

export default About;
