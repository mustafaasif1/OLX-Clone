import React from 'react';
import { Container, Dropdown, Row, Col } from 'react-bootstrap';
import { CustomDropDownToggle, MegaMenuLinks } from './styled';

export const MegaMenu = () => (
  <Dropdown className="position-static">
    <CustomDropDownToggle id="dropdown-basic">
      ALL CATEGORIES
    </CustomDropDownToggle>

    <Dropdown.Menu className="shadow">
      <div className="px-4">
        <Container fluid>
          <Row>
            <Col sm={4} md={3} className="py-4">
              <MegaMenuLinks>
                <h6>Mobiles</h6>
                <div>
                  <a href="home">Tablets</a>
                  <a href="home">Accessories</a>
                  <a href="home">Mobile Phones</a>
                </div>
              </MegaMenuLinks>
              <MegaMenuLinks>
                <h6>Vehicles</h6>
                <div>
                  <a href="home">Cars</a>
                  <a href="home">Cars on Installments</a>
                  <a href="home">Car Accessories</a>
                  <a href="home">Spare Parts</a>
                  <a href="home">Buses, Vans & Trucks</a>
                  <a href="home">Rickshaq & Chingcchi</a>
                  <a href="home">Other Vehicles</a>
                  <a href="home">Boats</a>
                  <a href="home">Tractor & Trailers</a>
                </div>
              </MegaMenuLinks>
              <MegaMenuLinks>
                <h6>Property for Sale</h6>
                <div>
                  <a href="home">Land & Plots</a>
                  <a href="home">Houses</a>
                  <a href="home">Apartments & Flats</a>
                  <a href="home">Shops - Offices</a>
                  <a href="home">Apartments & Flats</a>
                  <a href="home">Shops - Offices - Commercial Space</a>
                  <a href="home">Portions & Floors</a>
                </div>
              </MegaMenuLinks>
              <MegaMenuLinks>
                <h6>Property for Rent</h6>
                <div>
                  <a href="home">Houses</a>
                  <a href="home">Apartments & Flats</a>
                  <a href="home">Portions & Floors</a>
                  <a href="home">Shops - Offices - Commercial Space</a>
                  <a href="home">Roommates & Paying Guests</a>
                  <a href="home">Rooms</a>
                  <a href="home">Vacation Rentals - Guest Houses</a>
                  <a href="home">Land & Plots</a>
                </div>
              </MegaMenuLinks>
            </Col>
            <Col sm={4} md={3} className="py-4">
              <MegaMenuLinks>
                <h6>Electronics & Home Appliances</h6>
                <div>
                  <a href="home">Computer & Accessories</a>
                  <a href="home">TV - Video - Audio</a>
                  <a href="home">Cameras & Accessories</a>
                  <a href="home">Games & Entertainment</a>
                  <a href="home">Other Home Appliances</a>
                  <a href="home">Generators, UPS & Power Solutions</a>
                  <a href="home">Kitchen Appliances</a>
                  <a href="home">AC & Coolers</a>
                  <a href="home">Fridges & Freezers</a>
                  <a href="home">Washing Machine & Dryers</a>
                </div>
              </MegaMenuLinks>
              <MegaMenuLinks>
                <h6>Bikes</h6>
                <div>
                  <a href="home">Motorcycles</a>
                  <a href="home">Spare Parts</a>
                  <a href="home">Bicycles</a>
                  <a href="home">ATV & Quads</a>
                  <a href="home">Scooters</a>
                </div>
              </MegaMenuLinks>
              <MegaMenuLinks>
                <h6>Business, Industrial & Agriculture</h6>
                <div>
                  <a href="home">Business for Sale</a>
                  <a href="home">Food & Restaurants</a>
                  <a href="home">Trade & Industrial</a>
                  <a href="home">Construction & Heavy Machinery</a>
                  <a href="home">Agriculture</a>
                  <a href="home">Other Business & Industry</a>
                  <a href="home">Medical & Pharma</a>
                </div>
              </MegaMenuLinks>
              <MegaMenuLinks>
                <h6>Services</h6>
                <div>
                  <a href="home">Education & Classes</a>
                  <a href="home">Travel & Visa</a>
                  <a href="home">Car Rental</a>
                  <a href="home">Driver & Taxi</a>
                  <a href="home">Web Development</a>
                  <a href="home">Other Services</a>
                  <a href="home">Electronics & Computer Repair</a>
                  <a href="home">Event Services</a>
                  <a href="home">Health & Beauty</a>
                  <a href="home">Maids & Domestic Help</a>
                  <a href="home">Movers & Packers</a>
                  <a href="home">Home & Office Repair</a>
                  <a href="home">Catering & Restaurant</a>
                  <a href="home">Farm & Fresh Food</a>
                </div>
              </MegaMenuLinks>
            </Col>
            <Col sm={4} md={3} className="py-4">
              <MegaMenuLinks>
                <h6>Jobs</h6>
                <div>
                  <a href="home">Online</a>
                  <a href="home">Marketing</a>
                  <a href="home">Advertising & PR</a>
                  <a href="home">Education</a>
                  <a href="home">Customer Service</a>
                  <a href="home">Sales</a>
                  <a href="home">IT & Networking</a>
                  <a href="home">Hotels & Tourism</a>
                  <a href="home">Clerical & Adminstration</a>
                  <a href="home">Human Resources</a>
                  <a href="home">Accounting & Finance</a>
                  <a href="home">Manufacturing</a>
                  <a href="home">Medical</a>
                  <a href="home">Domesticc Staff</a>
                  <a href="home">Other Jobs</a>
                </div>
              </MegaMenuLinks>
              <MegaMenuLinks>
                <h6>Animals</h6>
                <div>
                  <a href="home">Fish & Aquariums</a>
                  <a href="home">Birds</a>
                  <a href="home">Hens & Aseel</a>
                  <a href="home">Cats</a>
                  <a href="home">Dogs</a>
                  <a href="home">Livestock</a>
                  <a href="home">Horses</a>
                  <a href="home">Pet Food & Accessories</a>
                  <a href="home">Other Animals</a>
                </div>
              </MegaMenuLinks>
              <MegaMenuLinks>
                <h6>Furniture & Home Decor</h6>
                <div>
                  <a href="home">Sofa & Chairs</a>
                  <a href="home">Beds & Wardrobe</a>
                  <a href="home">Home Decoration</a>
                  <a href="home">Tables & Dining</a>
                  <a href="home">Garden & Outsoor</a>
                  <a href="home">Painting & Mirrors</a>
                  <a href="home">Rugs & Carpets</a>
                  <a href="home">Curtains & Blinds</a>
                  <a href="home">Office Furniture</a>
                  <a href="home">Other Household Items</a>
                </div>
              </MegaMenuLinks>
            </Col>
            <Col sm={4} md={3} className="py-4">
              <MegaMenuLinks>
                <h6>Fashion & Beauty</h6>
                <div>
                  <a href="home">Accessories</a>
                  <a href="home">Clothes</a>
                  <a href="home">Footwear</a>
                  <a href="home">Jewellery</a>
                  <a href="home">Make Up</a>
                  <a href="home">Skin & Hair</a>
                  <a href="home">Watches</a>
                  <a href="home">Weddings</a>
                  <a href="home">Lawn & Pret</a>
                  <a href="home">Couture</a>
                  <a href="home">Other Fashion</a>
                </div>
              </MegaMenuLinks>
              <MegaMenuLinks>
                <h6>Books, Sports & Hobbies</h6>
                <div>
                  <a href="home">Books & Magazines</a>
                  <a href="home">Musical Instruments</a>
                  <a href="home">Sports Equipment</a>
                  <a href="home">Gym & Fitness</a>
                  <a href="home">Other Hobbies</a>
                </div>
              </MegaMenuLinks>
              <MegaMenuLinks>
                <h6>Kids</h6>
                <div>
                  <a href="home">Kids Furniture</a>
                  <a href="home">Toys</a>
                  <a href="home">Prams & Walkers</a>
                  <a href="home">Swings & Slides</a>
                  <a href="home">Kids Bikes</a>
                  <a href="home">Kids Accessories</a>
                </div>
              </MegaMenuLinks>
            </Col>
          </Row>
        </Container>
      </div>
    </Dropdown.Menu>
  </Dropdown>
);
