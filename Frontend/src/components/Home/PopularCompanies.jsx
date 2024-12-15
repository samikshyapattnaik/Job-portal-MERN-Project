import React from 'react'
import { FaApple, FaMicrosoft } from 'react-icons/fa';
import {SiTesla} from 'react-icons/si';

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Hydrabad",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Noida",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Pune",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];

  return (
    <div className='companies'>
      <div className="container">
        <h2>Popular Companies</h2>
        <div className="banner">
          {
            companies.map((Element) => (
              <div key={Element.id} className="card">
                <div className="content">
                <div className="icon">{Element.icon}</div>
                <div className="text">
                  <p>{Element.title}</p>
                  <p>{Element.location}</p>
                </div>
              </div>
              <button>Open Positions {Element.openPositions}</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PopularCompanies