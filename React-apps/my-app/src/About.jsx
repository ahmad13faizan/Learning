import React from "react";
import SignoutBtn from "./SignoutBtn";

const About = () => {
  return (
    <div style={styles.container}>
      <h2>About Us</h2>
      <p>
        Welcome to our website! We are dedicated to providing the best services
        for our users. Our goal is to enhance your experience with high-quality
        solutions.
      </p>
      <SignoutBtn/>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
};

export default About;
