import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <img className="logo" src="logo.png" width="400" height="70" alt="logo" />
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Homepage" href="/homepage" />
        <LinkTab label="Configure" href="/configure" />
        <LinkTab label="Prediction" href="/basic-prediction" />
      </Tabs>
    </Box>
  );
};

export default Header;

/** 
    <Navbar className="navbar" bg="light" variant="light" expand="lg">
      <Navbar.Brand className="brand">
        <img
          className="logo"
          src="logo.png"
          width="400"
          height="70"
          alt="logo"
        />
      </Navbar.Brand>
      <Nav.Link href="/homepage">Homepage</Nav.Link>
      <Nav.Link href="/configure">Configure</Nav.Link>
      <Nav.Link href="/basic-prediction">Prediction</Nav.Link>
    </Navbar>
    */
