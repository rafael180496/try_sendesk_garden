import countrys from "../datajson/country.json";
import sports from "../datajson/sport.json";
import players from "../datajson/player.json";
import { filter, pathOr } from "ramda";

export const countryData = () => {
  return countrys;
};

export const dataConsumer = () => {
  return {
    countrys,
    sports,
    players,
  };
};

export const playesFilter = (sport, country, Data = []) => {
  return pathOr(
    [],
    [],
    filter((item) => {
      return item.country_code === country && item.sport_code === sport;
    }, Data)
  );
};
export const sportData = (code) => {
  if (!code || code <= 0) {
    return [];
  }

  return [];
};
