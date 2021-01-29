import  React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {BASE_URL, PEOPLE} from "../../constants/constants";
import "./person.scss";
import PersonImg from "../ui/PersonImg/PersonImg";


const Person = () => {
  const [ person, setPerson ] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}${PEOPLE}/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPerson(data);
      });
  }, [id]);

  return (
    <>
      <div className="person">
        <div className="person__info">
          {person &&
          Object.entries(person).map(([key, value]) => (
            <div key={key}>
              { key === "name" ?
                <h3>Name: {value}</h3>
                :
                <></>
              }

              { key === "height" ?
                <span>Height: {value}</span>
                :
                <></>
              }

              { key === "mass" ?
                <span>Mass: {value}</span>
                :
                <></>
              }

              { key === "hair_color" ?
                <span>Hair color: {value}</span>
                :
                <></>
              }
            </div>
          ))}
        </div>
        <div className="person__photo">
          <PersonImg/>
        </div>
        <div>
          <button type="submit">Add to favorite</button>
        </div>
      </div>
    </>
  )
}

export default Person;
