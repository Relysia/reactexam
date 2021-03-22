import React, { useState } from "react";
import LoadingMask from "./LoadingMask";

function Subscription({ hotel, showForm, setShowForm }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const sendSubscribe = (e) => {
    e.preventDefault();
    setLoading(true);
    setShowForm(false);

    fetch("api/hotels/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, hotel: hotel.name }),
    })
      .then((response) => response.json())
      .then((data) => {
        setShowMessage(true);
        setLoading(false);
        setMessage(data);
        setTimeout(() => {
          setShowMessage(false);
        }, 5000);
      });
  };

  return (
    <div>
      {showForm && (
        <form onSubmit={(e) => sendSubscribe(e)}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="submit" value="Submit" disabled={!(email.includes("@") && email.includes("."))} />
        </form>
      )}
      {loading && <LoadingMask />}
      {showMessage && (message.success ? <h4>Subscribed</h4> : <h4>Already Subscribed</h4>)}
    </div>
  );
}

export default Subscription;
