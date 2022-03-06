import React from 'react';
import { Button, Row, Col, Form, Navbar } from 'react-bootstrap';
import {
  FilterButton,
  FilterHeading,
  CategoriesContainer,
  InputNumber,
  CenterButtonContainer,
} from './styled';
import { ReactComponent as FilterIcon } from '../../../Assets/Icons/filter.svg';

const Filters = () => (
  <Navbar expand="lg">
    <FilterButton aria-controls="basic-navbar-nav">
      <FilterIcon id="filter" />
      <div>Filters</div>
    </FilterButton>
    <Navbar.Collapse id="basic-navbar-nav">
      <div>
        <FilterHeading>
          <p>Filters</p>
          <hr />
        </FilterHeading>

        <CategoriesContainer>
          <p className="heading">CATEGORIES</p>
          <ul className="first-ul">
            <li>All Categories</li>
            <ul>
              <li>Vehicles</li>
              <ul>
                <li>
                  Cars <span>(41651)</span>
                </li>
                <li>
                  Cars on Installment <span>(2349)</span>
                </li>
                <li>
                  Car Accessories <span>(3482)</span>
                </li>
                <li>
                  Spare Parts <span>(1283)</span>
                </li>
                <li>
                  Buses, Vans & Trucks <span>(1087)</span>
                </li>
                <li>
                  Rikshaw & Chingchi <span>(321)</span>
                </li>
                <li>
                  Other Vehicles<span>(123)</span>
                </li>
              </ul>
            </ul>
          </ul>
        </CategoriesContainer>
        <hr />
        <CategoriesContainer>
          <p className="heading">LOCATIONS</p>
          <ul className="first-ul">
            <li>Pakistan</li>
            <ul>
              <li>
                Punjab <span>(41651)</span>
              </li>
              <li>
                Sindh <span>(18707)</span>
              </li>
              <li>
                Islamabad Capital Territory <span>(7126)</span>
              </li>
              <li>
                Khyber Pakhtunkhuwa <span>(6962)</span>
              </li>
              <li>
                Balochistan <span>(890)</span>
              </li>
            </ul>
          </ul>
          <p className="viewMore">View more</p>
        </CategoriesContainer>
        <hr />
        <CategoriesContainer>
          <p className="heading">YEAR</p>
          <Row>
            <Col>
              <InputNumber
                type="number"
                id="inputYear1"
                aria-describedby="inputYear"
                placeholder="Starting Year"
              />
            </Col>
            <Col>
              <InputNumber
                type="number"
                id="inputYear2"
                aria-describedby="inputYear"
                placeholder="Ending Year"
              />
            </Col>
          </Row>
        </CategoriesContainer>
        <hr />
        <CategoriesContainer>
          <p className="heading">KM&apos;S DRIVEN</p>
          <Row>
            <Col>
              <InputNumber
                type="number"
                id="inputKM1"
                aria-describedby="inputKMs"
                placeholder="Lowest KM'S"
              />
            </Col>
            <Col>
              <InputNumber
                type="number"
                id="inputKM2"
                aria-describedby="inputKMs"
                placeholder="Highest KM'S"
              />
            </Col>
          </Row>
        </CategoriesContainer>
        <hr />
        <CategoriesContainer>
          <p className="heading">PRICE</p>
          <Row>
            <Col>
              <InputNumber
                type="number"
                id="inputPrice1"
                aria-describedby="inputYear"
                placeholder="Starting Year"
              />
            </Col>
            <Col>
              <InputNumber
                type="number"
                id="inputPrice2"
                aria-describedby="inputKMs"
                placeholder="Ending Price"
              />
            </Col>
          </Row>
        </CategoriesContainer>
        <hr />
        <CategoriesContainer>
          <p className="heading">MAKE</p>
          <ul className="first-ul">
            <li>
              Suzuki <span>(59546)</span>
            </li>
            <li>
              Toyota <span>(19664)</span>
            </li>
            <li>
              Honda <span>(12727)</span>
            </li>
            <li>
              Daihatsu <span>(4340)</span>
            </li>
            <li>
              Nissan <span>(1802)</span>
            </li>
          </ul>
          <p className="viewMore">View more</p>
        </CategoriesContainer>
        <hr />
        <CategoriesContainer>
          <p className="heading">FUEL</p>
          <Form.Check type="checkbox" label="Petrol" />
          <Form.Check type="checkbox" label="CNG" />
          <Form.Check type="checkbox" label="Hybrid" />
          <Form.Check type="checkbox" label="Diesel" />
          <Form.Check type="checkbox" label="LPG" />
        </CategoriesContainer>
        <hr />
        <CategoriesContainer>
          <p className="heading">REGISTERED IN</p>
          <Form.Check type="checkbox" label="Karachi" />
          <Form.Check type="checkbox" label="Lahore" />
          <Form.Check type="checkbox" label="Islamabad" />
          <Form.Check type="checkbox" label="Unregistered" />
          <Form.Check type="checkbox" label="Faisalabad" />
          <p id="registeredViewMore">View more</p>
        </CategoriesContainer>
        <hr />
        <CategoriesContainer>
          <p className="heading">CONDITION</p>
          <Form.Check type="checkbox" label="Used" />
          <Form.Check type="checkbox" label="New" />
        </CategoriesContainer>
        <CenterButtonContainer>
          <Button variant="dark">Apply Changes</Button>
        </CenterButtonContainer>
      </div>
    </Navbar.Collapse>
  </Navbar>
);

export default Filters;
