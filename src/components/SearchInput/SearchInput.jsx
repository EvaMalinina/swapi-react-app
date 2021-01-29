import React, { useState } from 'react';

const SearchInput = ({ searchPlanet, setDefaultPlanets }) => {
  const [searchVal, setSearchVal] = useState('');

  const setValue = (val) => {
    setSearchVal(val);
    if (val === '') {
      setDefaultPlanets();
    }
  }

  return (
    <>
      <input value={searchVal} onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" onClick={() => searchPlanet(searchVal)}>Search</button>
    </>
  )
}

export default SearchInput;
