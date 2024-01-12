import { useState } from "react";

interface Props{
    cities:string[]; 
    header:string
    onSelectCity: (city:string) => void
}

function ListGroup({cities, header, onSelectCity}: Props) {


  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h2>{header}</h2>
      {cities.length === 0 && <p>Na da</p>}

      <ul className="list-group">
        {cities.map((city, index) => (
        <li className= {selectedIndex === index
        ? "list-group-item active"
        : "list-group-item"} 
        key={city} 
        onClick={()=>{setSelectedIndex(index)
        onSelectCity(city)}}>
        {city} 
        </li>))}
      </ul>
    </>
  );
}

export default ListGroup;
