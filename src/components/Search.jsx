import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '../styles/search.styles';
import axios from 'axios';

export default function Search({ addCity }){
  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  clear the error
    setError("");
    let encodedQuery = value.split(' ').join('%20');
    let res = await axios.get(`https://www.metaweather.com/api/location/search/?query=${encodedQuery}`).catch(err => console.log(err));
    if (res.data && res.data.length) {
      addCity(res.data[0]);
      setOpen(!open);
      setValue("");
    } else {
      setError("No cities found");
    };
  }

  function focusInput(component){
    if (component) {
      component.focus();
    }
  };

  return (
    <Container className={open ? "open" : "closed"}>
      <form onSubmit={handleSubmit}>
        <input ref={focusInput} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <FontAwesomeIcon
        className={`search-icon ${open ? "open" : ""}`}
        icon={["far", "times-circle"]}
        onClick={() => setOpen(!open)}
      />
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </Container>
  );
}