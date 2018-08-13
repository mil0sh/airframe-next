import React from 'react';
import faker from 'faker';

import {
    Container,
    Row,
    ButtonToolbar,
    ButtonGroup,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardBody,
    ListGroup,
    ListGroupItem,
    Progress,
    CardTitle,
    Table,
    Button,
    Col
} from './../../components';

import {
    MetricVsTarget
} from "../components/Analytics/MetricVsTarget";
import {
    WebsitePerformance
} from "../components/Analytics/WebsitePerformance";
import {
    SessionsByDevice
} from "../components/Analytics/SessionsByDevice";
import {
    CardFooterInfo
} from "../components/CardFooterInfo";

const Home = () => (
    <Container>
        <Row>
            <Col lg={ 12 }>
                <div className="d-flex mt-3 mb-5">
                    <h1 className="display-4 mr-3 mb-0 align-self-start">
                        Analytics
                    </h1>
                    <ButtonToolbar className="ml-auto">
                        <ButtonGroup className="align-self-start mr-2">
                            <UncontrolledButtonDropdown className="ml-auto flex-column">
                                <DropdownToggle color="secondary" outline caret className="mb-2">
                                    <i className="fa fa-globe mr-2"></i>
                                    www.webkom.co
                                </DropdownToggle>
                                <div className="small">
                                    Last 30 Days vs Previous Period
                                </div>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Select Site:
                                    </DropdownItem>
                                    <DropdownItem active>
                                        www.webkom.co
                                    </DropdownItem>
                                    <DropdownItem>
                                        www.spin.webkom.co
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-plus mr-2"></i>
                                        Add New
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </ButtonGroup>
                        <ButtonGroup className="align-self-start mr-2">
                            <UncontrolledButtonDropdown className="ml-auto flex-column">
                                <DropdownToggle color="secondary" outline caret className="mb-2">
                                    <i className="fa fa-calendar-o mr-2"></i>
                                    Last Month
                                </DropdownToggle>
                                <div className="small">
                                    Jan 01, 2017 to Jan 31, 2017
                                </div>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Select Period:
                                    </DropdownItem>
                                    <DropdownItem active>
                                        Last Month
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last 3 Months
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last 6 Months
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last Year
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Custom...
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </ButtonGroup>
                        <ButtonGroup className="align-self-start mr-2">
                            <UncontrolledButtonDropdown className="ml-auto flex-column">
                                <DropdownToggle color="secondary" outline caret className="mb-2">
                                    <i className="fa fa-calendar-o mr-2"></i>
                                    Previous Period
                                </DropdownToggle>
                                <div className="small">
                                    Jan 01, 2017 to Jan 31, 2017
                                </div>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Select Period:
                                    </DropdownItem>
                                    <DropdownItem active>
                                        Previous Period
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last 3 Months
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last 6 Months
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last Year
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Custom...
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </ButtonGroup>
                        <ButtonGroup className="align-self-start">
                            <Button color="primary" className="mb-2">
                                <i className="fa fa-check mr-2"></i>
                                Apply
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Metrics vs Targets
                        </CardTitle>
                        <Row className="mb-4">
                            <Col lg={ 4 } className="text-right">
                                <MetricVsTarget 
                                    title="Users"
                                    value="168,793"
                                    progressbarColor="danger"
                                    targetValue="169,001"
                                />
                            </Col>
                            <Col lg={ 4 } className="text-right">
                                <MetricVsTarget 
                                    title="Sessions"
                                    value="529,747"
                                    progressbarValue="67"
                                    progressbarColor="success"
                                    targetValue="782,957"
                                />
                            </Col>
                            <Col lg={ 4 } className="text-right">
                                <MetricVsTarget 
                                    title="Pageviews"
                                    value="1,763,981"
                                    progressbarValue="34"
                                    progressbarColor="success"
                                    targetValue="1,567,334"
                                />
                            </Col>
                        </Row>
                        <div className="small">
                            <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                            How do your users (visitors), sessions (visits) and pageviews 
                            metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                        </div>
                    </CardBody>
                </Card>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Analytics Audience Metrics
                        </CardTitle>
                        <CardFooterInfo />
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 6 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-0">
                            Traffic Channels
                        </CardTitle>
                    </CardBody>
                    <Table responsive className="table mb-0">
                        <thead>
                            <tr>
                                <th scope="col" className="bt-0">Channel</th>
                                <th scope="col" className="bt-0">Sessions</th>
                                <th scope="col" className="bt-0">Prev Period</th>
                                <th scope="col" className="text-right bt-0">Change</th>
                                <th scope="col" className="bt-0 text-right">Trend</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-middle">
                                    Organic Search
                                </td>
                                <td className="text-inverse align-middle">
                                    { faker.finance.amount() }
                                </td>
                                <td className="align-middle">
                                    <span data-faker="[[finance.amount]]">949.00</span>
                                </td>
                                <td className="align-middle text-right"> 
                                    
                                        -75,0% 
                                        <i className="fa fa-caret-down text-danger ml-1"></i>
                                    
                                </td>
                                <td className="text-right align-middle">
                            
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <CardBody>                
                        <div className="small">
                            <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                            How do your users (visitors), sessions (visits) and pageviews 
                            metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                        </div>
                    </CardBody>
                </Card>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Sessions by Device Type
                        </CardTitle>
                        <Row>
                            <Col sm={ 4 }>
                                <SessionsByDevice 
                                    title="Desktop"
                                    valuePercent="51,5"
                                    valuePercentColor="text-primary"
                                    value="201,345"
                                    valueColor="text-primary"
                                />
                            </Col>
                            <Col sm={ 4 }>
                                <SessionsByDevice 
                                    title="Mobile"
                                    valuePercent="34,4"
                                    valuePercentColor="text-info"
                                    value="134,201"
                                    valueColor="text-info"
                                />
                            </Col>
                            <Col sm={ 4 }>
                                <SessionsByDevice 
                                    title="Tablet"
                                    valuePercent="20,8"
                                    value="81,525"
                                />
                            </Col>
                        </Row>
                        <Progress multi className="mb-4">
                            <Progress bar value="25" />
                            <Progress bar color="info" value="30" />
                            <Progress bar color="secondary" value="45" />
                        </Progress>
                        <div className="small">
                            <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                            How do your users (visitors), sessions (visits) and pageviews 
                            metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 6 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-0">
                            Website Performance
                        </CardTitle>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem>
                            <WebsitePerformance 
                                title="Bounce Rate (Avg)"
                                value="46,893"
                                valuePercentIcon="caret-up"
                                valuePercentColor="text-success"
                                valuePercent="23,91"
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            <WebsitePerformance 
                                title="Pageviews (Avg)"
                                value="2.15"
                                valuePercentColor="text-danger"
                                valuePercent="42,82"
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            <WebsitePerformance 
                                title="New Sessions"
                                value="76,40"
                                valuePercentIcon="caret-up"
                                valuePercentColor="text-success"
                                valuePercent="23,91"
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            <WebsitePerformance 
                                title="Time on Site (Avg)"
                                value="2m:16s"
                                valuePercentColor="text-danger"
                                valuePercent="65,28"
                            />
                        </ListGroupItem>
                    </ListGroup>
                    <CardBody>                
                        <div className="small">
                            <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                            How do your users (visitors), sessions (visits) and pageviews 
                            metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Home;