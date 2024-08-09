// // import Card from "react-bootstrap/Card";

// // const SchoolCard = () => {
// //   return (
// //     <Card style={{ width: "18rem" }}>
// //       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
// //       <Card.Body>
// //         <Card.Title>Card Title</Card.Title>
// //         <Card.Text>
// //           Some quick example text to build on the card title and make up the
// //           bulk of the card's content.
// //         </Card.Text>
// //         {/* <Button variant="primary">Go somewhere</Button> */}
// //       </Card.Body>
// //     </Card>
// //   );
// // };

// // export default SchoolCard;

// import React from "react";
// import "../Styles/SchoolCard.css";

// const SchoolCard = () => {
//   return (
//     <div className="card school-card" style={{ width: "18rem" }}>
//       {/* <img src="..." className="card-img-top" alt="School" /> */}
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </p>
//         <a href="#" className="btn btn-primary">
//           Go somewhere
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SchoolCard;

import React from "react";
import "../Styles/SchoolCard.css";

const SchoolCard = ({ schoolName, address, city, state, contact, email }) => {
  return (
    <div className="card school-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{schoolName}</h5>
        <p className="card-text">
          <strong>Address:</strong> {address}
        </p>
        <p className="card-text">
          <strong>City:</strong> {city}
        </p>
        <p className="card-text">
          <strong>State:</strong> {state}
        </p>
        <p className="card-text">
          <strong>Contact:</strong> {contact}
        </p>
        <p className="card-text">
          <strong>Email:</strong> {email}
        </p>
        <a
          href="#"
          className="btn btn-primary"
          aria-label={`More about ${schoolName}`}
        >
          More Info
        </a>
      </div>
    </div>
  );
};

export default SchoolCard;
