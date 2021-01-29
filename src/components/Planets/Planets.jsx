import  React, { useState, useEffect } from 'react';
import {BASE_URL, PLANETS} from "../../constants/constants";
import PlanetImg from "../ui/PlanetImg/PlanetImg";
import SearchInput from "../SearchInput/SearchInput";

const Planets = () => {
  const [ planets, setPlanets ] = useState([]);
  const [ defaultVal, setDefaultVal ] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}${PLANETS}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlanets(data.results);
      });
  }, [defaultVal]);

  const searchPlanet = (searchVal) => {
    if (searchVal !== '') {
      const filteredList = planets.filter(planet => {
        return planet.name.toLowerCase().includes(searchVal);
      });
      setPlanets(filteredList);
    }
  }

  const setDefaultPlanets = () => {
    setDefaultVal(!defaultVal);
  }

  return (
    <>
      <div>
        <SearchInput searchPlanet={searchPlanet} setDefaultPlanets={setDefaultPlanets}/>
      </div>
      <ul className="planets">
        {planets.map(({ name }) => {
          return (
            <li key={name} className="planets__item">
              <div>{name}</div>
              <PlanetImg/>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default Planets;
