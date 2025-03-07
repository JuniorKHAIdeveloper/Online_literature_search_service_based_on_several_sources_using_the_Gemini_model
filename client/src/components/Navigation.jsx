import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import SearchPage from "../pages/SearchPage";
import LanguageIcon from "@mui/icons-material/Language";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import InfoIcon from "@mui/icons-material/Info";
import SitesForm from "../pages/SitesFormPage";
import SitesTable from "../pages/SitesTablePage";
import Account from "../pages/AccountPage";
import Alerts from "../core/Alerts";
import AboutUs from "../pages/AboutUsPage";
import { useMediaQuery } from "@mui/material";
import BookLove from "../images/booklove.png";
import SearchArtIntModal from "./search/SearchArtIntModal";
import { useSearchParams } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const renderTabTitle = (Icon, title) => {
  return (
    <span>
      <Icon />
      <span style={{ verticalAlign: "super", marginLeft: "10px" }}>
        {title}
      </span>
    </span>
  );
};

const Navigation = () => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParam = (param) => {
    return searchParams.get(param);
  };
  
  const value = parseInt(getQueryParam('tab')) || 0;
  const [results, setResults] = React.useState([]);
  const [alert, setAlert] = React.useState(null);
  const [artIntResult, setArtIntResults] = React.useState([]);
  const [isArtInt, setArtInt] = React.useState(false);
  const [isArtIntModalOpen, setArtIntModalOpen] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const handleChange = (event, newValue) => {
    setSearchParams({tab: newValue});
  };

  const [isAuth, setIsAuth] = React.useState(
    localStorage.getItem("isAuth") === "true" || false
  );

  const [isAdmin, setIsAdmin] = React.useState(
    localStorage.getItem("isAdmin") === "true" || false
  );

  let additionalProps = {};

  if (isXsScreen) {
    additionalProps = {
      variant: "scrollable",
    };
  }
  if (isMdScreen) {
    additionalProps = {
      centered: true,
    };
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", position: "relative" }}
      >
        {!isXsScreen && (
          <img
            src={BookLove}
            alt="КнигоLove"
            style={{ height: "52.5px", position: "absolute", left: 0, top: 0 }}
          />
        )}
        <Tabs
          value={value}
          onChange={handleChange}
          {...additionalProps}
          scrollButtons={true}
          ariaLabel="scrollable prevent tabs example"
        >
          <Tab label={renderTabTitle(SearchIcon, "Пошук")} {...a11yProps(0)} />

          <Tab
            label={renderTabTitle(PersonIcon, "Кабінет")}
            {...a11yProps(1)}
          />
          <Tab label={renderTabTitle(InfoIcon, "Про нас")} {...a11yProps(2)} />
          {isAuth && isAdmin && (
            <Tab
              label={renderTabTitle(LanguageIcon, "Список сайтів")}
              {...a11yProps(2)}
            />
          )}
          {isAuth && isAdmin && (
            <Tab
              label={renderTabTitle(PlaylistAddIcon, "Форма сайтів")}
              {...a11yProps(2)}
            />
          )}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SearchPage
          results={results}
          setResults={setResults}
          isAuth={isAuth}
          isXsScreen={isXsScreen}
          setArtIntResults={setArtIntResults}
          isArtInt={isArtInt}
          setArtInt={setArtInt}
          setArtIntModalOpen={setArtIntModalOpen}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          query={query}
          setQuery={setQuery}
          setAlert={setAlert}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Account
          isAdmin={isAdmin}
          isAuth={isAuth}
          setIsAuth={setIsAuth}
          setIsAdmin={setIsAdmin}
          setAlert={setAlert}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AboutUs isXsScreen={isXsScreen} />
      </TabPanel>
      {isAuth && isAdmin && (
        <TabPanel value={value} index={3}>
          <SitesTable setAlert={setAlert} />
        </TabPanel>
      )}
      {isAuth && isAdmin && (
        <TabPanel value={value} index={4}>
          <SitesForm setAlert={setAlert} />
        </TabPanel>
      )}
      {isArtIntModalOpen && (
        <SearchArtIntModal
          data={artIntResult}
          modalOpen={isArtIntModalOpen}
          setModalOpen={setArtIntModalOpen}
          setResults={setResults}
          setIsSearching={setIsSearching}
        />
      )}

      {Boolean(alert) && <Alerts alert={alert} setAlert={setAlert} />}
    </Box>
  );
};

export default Navigation;
