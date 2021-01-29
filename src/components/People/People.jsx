import  React, { useState, useEffect } from 'react';
import './people.scss';
import {BASE_URL, PEOPLE} from "../../constants/constants";
import { Link } from "react-router-dom";
import PersonImg from "../ui/PersonImg/PersonImg";

const People = () => {
  const [ people, setPeople ] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}${PEOPLE}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPeople(data.results);
      });
  }, []);

  return (
    <>
      <ul className="people">
        {people.map(({ name, url }) => {
          let id = url.replace(/\D/g,'');
            return (
                <li key={name} className="people__item">
                  <Link to={`/people/${id}`}>
                    <div>{name}</div>
                   <PersonImg/>
                  </Link>
                </li>
            );
          })}
      </ul>
    </>
  )
}

export default People;
