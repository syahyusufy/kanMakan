import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem, Container } from "mdbreact";

const Breadcrumb = props => {
  return (
    <Container>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem>Indonesia</MDBBreadcrumbItem>
        <MDBBreadcrumbItem>Bandung</MDBBreadcrumbItem>
        <MDBBreadcrumbItem>Buahbatu</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>The 18th Restaurant & Lounge - The Trans Luxury Hotel </MDBBreadcrumbItem>
      </MDBBreadcrumb>

    </Container>
  );
};

export default Breadcrumb;
