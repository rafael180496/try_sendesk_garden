import { Button } from "@zendeskgarden/react-buttons";
import { Col, Grid, Row } from "@zendeskgarden/react-grid";
import { ReactComponent as LeafIcon } from "@zendeskgarden/svg-icons/src/16/leaf-stroke.svg";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import { useEffect, useState } from "react";
import SelectItem from "../components/selectItem";
import { saveAs } from "file-saver";

import userImg from "../images/user.png";
import { InitContext } from "../App";
import { playesFilter } from "../service/data.consumer";
const LayoutPage = () => {
  const downloadImage = (dataimage) => {
    saveAs(dataimage, "image.jpg");
  };
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Ninguno",
    country_code: 0,
  });
  const [selectedSport, setSelectedSport] = useState({
    name: "Ninguno",
    sport_code: 0,
  });
  const [selectedPlayer, setSelectedPlayer] = useState({
    name: "Ninguno",
    player_code: 0,
    url_image: userImg,
  });
  useEffect(() => {
    return () => {};
  }, [selectedCountry]);
  return (
    <>
      <InitContext.Consumer>
        {(value) => {
          return (
            <>
              <ThemeProvider>
                <Grid>
                  <Row
                    style={{
                      paddingBottom: "3%",
                    }}
                  >
                    <Col md={4}>
                      <SelectItem
                        name="Selecciona el pais"
                        data={value.countrys}
                        keyName="country_code"
                        labelName="name"
                        selectedItem={selectedCountry}
                        setSelectedItem={setSelectedCountry}
                        key="select1"
                      ></SelectItem>
                    </Col>
                    <Col md={4}>
                      {selectedCountry.country_code > 0 ? (
                        <>
                          <SelectItem
                            name="Seleccione el deporte"
                            data={value.sports}
                            keyName="sport_code"
                            labelName="name"
                            selectedItem={selectedSport}
                            setSelectedItem={setSelectedSport}
                            key="select2"
                          ></SelectItem>
                        </>
                      ) : (
                        <label>No a seleccionado pais</label>
                      )}
                    </Col>
                    <Col md={4}>
                      {selectedSport.sport_code > 0 ? (
                        <>
                          <SelectItem
                            name="Seleccione el jugador"
                            data={playesFilter(
                              selectedSport.sport_code,
                              selectedCountry.country_code,
                              value.players
                            )}
                            keyName="player_code"
                            labelName="name"
                            selectedItem={selectedPlayer}
                            setSelectedItem={setSelectedPlayer}
                            key="select3"
                          ></SelectItem>
                        </>
                      ) : (
                        <label>No a seleccionado un deporte</label>
                      )}
                    </Col>
                  </Row>
                  <Row
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Col md={12}>
                      <img
                        style={{
                          maxWidth: "50%",
                          maxHeight: "50%",
                        }}
                        alt="imageavatar"
                        src={selectedPlayer.url_image}
                      />
                      <Button
                        onClick={() => {
                          downloadImage(selectedPlayer.url_image);
                        }}
                      >
                        <Button.StartIcon>
                          <LeafIcon />
                        </Button.StartIcon>
                        Descargar
                      </Button>
                    </Col>
                  </Row>
                </Grid>
              </ThemeProvider>
            </>
          );
        }}
      </InitContext.Consumer>
    </>
  );
};

export default LayoutPage;
