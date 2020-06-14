import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Us = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    );
    const users = await data.json();
    setTeam(users.civilizations);
  };
  return (
    <div>
      <h1>Us</h1>
      <ul>
        {team.map((item) => (
          <li key={item.id}>
            <Link to={`/us/${item.id}`}>
              {item.name}-{item.expansion}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Us;
