import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '../styles/search.styles';

export default function Search({ fetchCity }){
  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetchCity(value)
    setOpen(!open);
  }

  return (
    <Container>
      <form className={open ? "open" : "closed"} onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <FontAwesomeIcon
        className="search-icon"
        icon={["far", "times-circle"]}
        onClick={() => setOpen(!open)}
      />
    </Container>
  );
}