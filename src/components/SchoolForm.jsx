import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const SchoolForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col
          xs={12}
          md={6}
          lg={5}
          xl={5}
          className="my-3 border border-secondary rounded p-3"
        >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>School Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter School Name Here..."
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a school name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Enter Address" required />
              <Form.Control.Feedback type="invalid">
                Please provide an address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupCity">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="Enter City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a city.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupState">
              <Form.Label>State</Form.Label>
              <Form.Control placeholder="Enter State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a state.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control placeholder="Enter Contact" required />
              <Form.Control.Feedback type="invalid">
                Please provide a contact number.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupFile">
              <Form.Label>File</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="submit" value="Submit" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SchoolForm;

// import { useState } from "react";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";

// const SchoolForm = () => {
//   const [validated, setValidated] = useState(false);
//   const [schoolName, setSchoolName] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [contact, setContact] = useState("");
//   const [email, setEmail] = useState("");
//   // const [file, setFile] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = () => {
//     if (schoolName.length === 0) {
//       alert("Name has left blank");
//     } else if (address.length === 0) {
//       alert("Address has left blank");
//     } else if (city.length === 0) {
//       alert("City has left blank");
//     } else if (state.length === 0) {
//       alert("State has left blank");
//     } else if (contact.length === 0) {
//       alert("Contact has left blank");
//     } else if (email.length === 0) {
//       alert("email has left blank");
//     } else {
//       const url = "http://localhost:8080/saveSchoolDetails";

//       let fData = new FormData();
//       fData.append("schoolName", schoolName);
//       fData.append("address", address);
//       fData.append("city", city);
//       fData.append("state", state);
//       fData.append("contact", contact);
//       fData.append("email", email);
//       // fData.append("schoolName", schoolName);

//       axios
//         .post(url, fData)
//         .then((response) => alert(response.Data))
//         .catch((error) => alert(error));
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col
//           xs={12}
//           md={6}
//           lg={5}
//           xl={5}
//           className="my-3 border border-secondary rounded p-3"
//         >
//           <Form noValidate validated={validated} onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formGroupName">
//               <Form.Label>School Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter School Name Here..."
//                 value={schoolName}
//                 onChange={(e) => setSchoolName(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a school name.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGroupAddress">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 placeholder="Enter Address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide an address.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGroupCity">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 placeholder="Enter City"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a city.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGroupState">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 placeholder="Enter State"
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a state.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGroupContact">
//               <Form.Label>Contact</Form.Label>
//               <Form.Control
//                 placeholder="Enter Contact"
//                 value={contact}
//                 onChange={(e) => setContact(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a contact number.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGroupEmail">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a valid email address.
//               </Form.Control.Feedback>
//             </Form.Group>

{
  /* <Form.Group className="mb-3" controlId="formGroupFile">
              <Form.Label>File</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group> */
}

//             <Form.Group className="mb-3">
//               <Form.Control type="submit" value="Submit" />
//             </Form.Group>

//             {error && <p className="text-danger">{error}</p>}
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SchoolForm;

// import axios from "axios";
// import { useState } from "react";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const SchoolForm = () => {
//   const [validated, setValidated] = useState(false);
//   const [schoolName, setSchoolName] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [contact, setContact] = useState("");
//   const [email, setEmail] = useState("");
//   // const [file, setFile] = useState(null);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.stopPropagation();
//     } else {
//       try {
//         const formData = new FormData();
//         formData.append("schoolName", schoolName);
//         formData.append("address", address);
//         formData.append("city", city);
//         formData.append("state", state);
//         formData.append("contact", contact);
//         formData.append("email", email);
//         // if (file) formData.append("file", file);

//         const response = await axios.post(
//           "http://localhost:8080/schools/saveSchoolDetails",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );

//         if (response.status === 200) {
//           alert("School details submitted successfully!");
//           setSchoolName("");
//           setAddress("");
//           setCity("");
//           setState("");
//           setContact("");
//           setEmail("");
//           setFile(null);
//           navigate("/schools-list"); // Redirect to the Schools page
//         } else {
//           setError("Failed to submit. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         setError("Failed to submit. Please try again.");
//       }
//     }

//     setValidated(true);
//   };

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col
//           xs={12}
//           md={6}
//           lg={5}
//           xl={5}
//           className="my-3 border border-secondary rounded p-3"
//         >
//           <Form noValidate validated={validated} onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formGroupName">
//               <Form.Label>School Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter School Name Here..."
//                 value={schoolName}
//                 onChange={(e) => setSchoolName(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a school name.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGroupAddress">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 placeholder="Enter Address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide an address.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGroupCity">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 placeholder="Enter City"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a city.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGroupState">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 placeholder="Enter State"
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a state.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGroupContact">
//               <Form.Label>Contact</Form.Label>
//               <Form.Control
//                 placeholder="Enter Contact"
//                 value={contact}
//                 onChange={(e) => setContact(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a contact number.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGroupEmail">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a valid email address.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGroupFile">
//               <Form.Label>File</Form.Label>
//               <Form.Control
//                 type="file"
//                 onChange={(e) => setFile(e.target.files[0])}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Control type="submit" value="Submit" />
//             </Form.Group>

//             {error && <p className="text-danger">{error}</p>}
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SchoolForm;
