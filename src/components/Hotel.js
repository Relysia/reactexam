import React, { useState } from "react";
import Subscription from "./Subscription";

function Hotel({ hotel }) {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [info, setInfo] = useState(false);

  return (
    <div className="hotel">
      <h3>{hotel.name}</h3>
      <button onClick={() => setShow(!show)}>{!show ? "Show More" : "Show Less"}</button>
      {show && (
        <>
          <p>
            {hotel.city} ({hotel.stars})
          </p>
          {showForm && (
            <>
              <button onClick={() => setInfo(!info)}>Request more info {hotel.name}</button>
            </>
          )}
          {info && <Subscription hotel={hotel} showForm={showForm} setShowForm={setShowForm} />}
        </>
      )}
    </div>
  );
}

export default Hotel;
