import React, { useState, useEffect, useContext } from "react";
import SignoutBtn from "./SignoutBtn";
import loader from "./loader.gif";


const Contact = () => {

  
  const [dataToBeLoaded, setDataToBeLoaded] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setDataToBeLoaded(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Runs only once when the component mounts

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <p>Email: support@example.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 123 Main Street, City, Country</p>
      <SignoutBtn />

  
      {loading && <img src={loader} alt="Loading..." />}

     
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div className="loadedData">
        <h3>Fetched Data:</h3>
        {dataToBeLoaded.length > 0 ? (
          <ul>
            {dataToBeLoaded.map((item) => (
              <li key={item.id}>
                <strong>Item ID:</strong> {item.id} <br />
                <strong>User ID:</strong> {item.userId} <br />
                <strong>Title:</strong> {item.title} <br />
                <strong>Body:</strong> {item.body} <br />
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
};

export default Contact;
