// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import "../Styles/SchoolCard.css"; // Ensure this is the correct path
// import SchoolCard from "./SchoolCard";

// const SchoolCardList = () => {
//   // Sample data array for cards
//   const schoolData = [
//     {
//       id: 1,
//       schoolName: "ABC International School",
//       address: "123 Main St",
//       city: "Lucknow",
//       state: "Uttar Pradesh",
//       contact: "9876543210",
//       email: "info@abcschool.com",
//     },
//     {
//       id: 2,
//       schoolName: "XYZ Public School",
//       address: "456 Maple Ave",
//       city: "Lucknow",
//       state: "Uttar Pradesh",
//       contact: "8765432109",
//       email: "contact@xyzschool.com",
//     },
//     // Add more schools as needed
//   ];

//   return (
//     <Container>
//       <Row>
//         {schoolData.map((school) => (
//           <Col key={school.id} md={4} sm={12}>
//             <SchoolCard
//               schoolName={school.schoolName}
//               address={school.address}
//               city={school.city}
//               state={school.state}
//               contact={school.contact}
//               email={school.email}
//             />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default SchoolCardList;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SchoolCard from "./SchoolCard"; // Ensure this is the correct path

const SchoolCardList = () => {
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    // Fetch school data from backend
    axios
      .get("http://localhost:8080/schools/getAllSchools") // Ensure this URL matches your backend
      .then((response) => {
        setSchoolData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the school data!", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {schoolData.map((school) => (
          <Col key={school.id} md={4} sm={12}>
            <SchoolCard
              schoolName={school.schoolName}
              address={school.address}
              city={school.city}
              state={school.state}
              contact={school.contact}
              email={school.email}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SchoolCardList;
