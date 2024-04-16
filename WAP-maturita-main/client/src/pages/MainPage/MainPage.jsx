import React from 'react';
import { Link } from 'react-router-dom'; // Pokud používáte React Router pro routování

function MainPage() {
  return (
    <div className="main-page">
      <nav>
        <ul>
          <li><Link to="/klavesnice">Klávesnice</Link></li>
          <li><Link to="/monitor">Monitory</Link></li>
          <li><Link to="/sluchatka">Sluchátka</Link></li>
          <li><Link to="/telefon">Telefony</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default MainPage;
