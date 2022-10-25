import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log(eventKey)
    );


    return (
        <button
            type="button"
            style={{ backgroundColor: 'pink' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

function TheCard({ theList, theDelete }) {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <h1>Building Arun</h1>
                    <select>
                        <option value={0}>Select</option>
                        <option value={1}>ชั้น 1</option>
                        <option value={2}>ชั้น 2</option>
                        <option value={3}>ชั้น 3</option>
                        <option value={4}>ชั้น M</option>
                    </select>
                    <select>
                        <option value="">Select</option>
                        <option value="Men">ห้องน้ำชาย</option>
                        <option value="Women">ห้องน้ำหญิง</option>
                    </select>
                    <ReactStars edit={false} value={5} />
                    <CustomToggle eventKey="Building Arun">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="Building Arun">
                    <Card.Body>
                        {theList.map((val, key) => {
                            if (val.id == null) { return null } else if (val.building == "Building Arun") {
                                return (
                                    <div className='review card'>
                                        <div className='card-body text-left'>
                                            <p className='card-text'>Building: {val.building}</p>
                                            <p className='card-text'>Floor: {val.floor}</p>
                                            <p className='card-text'>Toilet: {val.toilet}</p>
                                            <p className='card-text'>Rating: {val.rating}</p>
                                            <p className='card-text'>Name: {val.name}</p>
                                            <p className='card-text'>Comment: {val.reviewing}</p>
                                            <div className='d-flex'>
                                                <button className='btn btn-warning' onClick={() => { theDelete(val.id) }}>Delete</button>
                                            </div>
                                            {/* <p className='card-text'>{val.id}</p> */}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <h1>Building 1</h1>
                    <select>
                        <option value={0}>Select</option>
                        <option value={1}>ชั้น 1</option>
                        <option value={2}>ชั้น 2</option>
                        <option value={3}>ชั้น 3</option>
                        <option value={4}>ชั้น M</option>
                    </select>
                    <select>
                        <option value="">Select</option>
                        <option value="Men">ห้องน้ำชาย</option>
                        <option value="Women">ห้องน้ำหญิง</option>
                    </select>
                    <ReactStars edit={false} value={5} />
                    <CustomToggle eventKey="Building 1">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="Building 1">
                    <Card.Body>
                        {theList.map((val, key) => {
                            if (val.id == null) { return null } else if (val.building == "Building 1") {
                                return (
                                    <div className='review card'>
                                        <div className='card-body text-left'>
                                            <p className='card-text'>Building: {val.building}</p>
                                            <p className='card-text'>Floor: {val.floor}</p>
                                            <p className='card-text'>Toilet: {val.toilet}</p>
                                            <p className='card-text'>Rating: {val.rating}</p>
                                            <p className='card-text'>Name: {val.name}</p>
                                            <p className='card-text'>Comment: {val.reviewing}</p>
                                            <div className='d-flex'>
                                                <button className='btn btn-warning' onClick={() => { theDelete(val.id) }}>Delete</button>
                                            </div>
                                            {/* <p className='card-text'>{val.id}</p> */}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <h1> Building 2</h1>
                    <select>
                        <option value={0}>Select</option>
                        <option value={1}>ชั้น 1</option>
                        <option value={2}>ชั้น 2</option>
                        <option value={3}>ชั้น 3</option>
                        <option value={4}>ชั้น M</option>
                    </select>
                    <select>
                        <option value="">Select</option>
                        <option value="Men">ห้องน้ำชาย</option>
                        <option value="Women">ห้องน้ำหญิง</option>
                    </select>
                    <ReactStars edit={false} value={5} />
                    <CustomToggle eventKey="Building 2">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="Building 2">
                    <Card.Body>
                        {theList.map((val, key) => {
                            if (val.id == null) { return null } else if (val.building == "Building 2") {
                                return (
                                    <div className='review card'>
                                        <div className='card-body text-left'>
                                            <p className='card-text'>Building: {val.building}</p>
                                            <p className='card-text'>Floor: {val.floor}</p>
                                            <p className='card-text'>Toilet: {val.toilet}</p>
                                            <p className='card-text'>Rating: {val.rating}</p>
                                            <p className='card-text'>Name: {val.name}</p>
                                            <p className='card-text'>Comment: {val.reviewing}</p>
                                            <div className='d-flex'>
                                                <button className='btn btn-warning' onClick={() => { theDelete(val.id) }}>Delete</button>
                                            </div>
                                            {/* <p className='card-text'>{val.id}</p> */}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <h1> Building 3_1</h1>
                    <select>
                        <option value={0}>Select</option>
                        <option value={1}>ชั้น 1</option>
                        <option value={2}>ชั้น 2</option>
                        <option value={3}>ชั้น 3</option>
                        <option value={4}>ชั้น M</option>
                    </select>
                    <select>
                        <option value="">Select</option>
                        <option value="Men">ห้องน้ำชาย</option>
                        <option value="Women">ห้องน้ำหญิง</option>
                    </select>
                    <ReactStars edit={false} value={5} />
                    <CustomToggle eventKey="Building 3_1">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="Building 3_1">
                    <Card.Body>
                        {theList.map((val, key) => {
                            if (val.id == null) { return null } else if (val.building == "Building 3_1") {
                                return (
                                    <div className='review card'>
                                        <div className='card-body text-left'>
                                            <p className='card-text'>Building: {val.building}</p>
                                            <p className='card-text'>Floor: {val.floor}</p>
                                            <p className='card-text'>Toilet: {val.toilet}</p>
                                            <p className='card-text'>Rating: {val.rating}</p>
                                            <p className='card-text'>Name: {val.name}</p>
                                            <p className='card-text'>Comment: {val.reviewing}</p>
                                            <div className='d-flex'>
                                                <button className='btn btn-warning' onClick={() => { theDelete(val.id) }}>Delete</button>
                                            </div>
                                            {/* <p className='card-text'>{val.id}</p> */}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <h1> Building 3_2</h1>
                    <select>
                        <option value={0}>Select</option>
                        <option value={1}>ชั้น 1</option>
                        <option value={2}>ชั้น 2</option>
                        <option value={3}>ชั้น 3</option>
                        <option value={4}>ชั้น M</option>
                    </select>
                    <select>
                        <option value="">Select</option>
                        <option value="Men">ห้องน้ำชาย</option>
                        <option value="Women">ห้องน้ำหญิง</option>
                    </select>
                    <ReactStars edit={false} value={5} />
                    <CustomToggle eventKey="Building 3_2">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="Building 3_2">
                    <Card.Body>
                        {theList.map((val, key) => {
                            if (val.id == null) { return null } else if (val.building == "Building 3_2") {
                                return (
                                    <div className='review card'>
                                        <div className='card-body text-left'>
                                            <p className='card-text'>Building: {val.building}</p>
                                            <p className='card-text'>Floor: {val.floor}</p>
                                            <p className='card-text'>Toilet: {val.toilet}</p>
                                            <p className='card-text'>Rating: {val.rating}</p>
                                            <p className='card-text'>Name: {val.name}</p>
                                            <p className='card-text'>Comment: {val.reviewing}</p>
                                            <div className='d-flex'>
                                                <button className='btn btn-warning' onClick={() => { theDelete(val.id) }}>Delete</button>
                                            </div>
                                            {/* <p className='card-text'>{val.id}</p> */}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <h1> Building 4</h1>
                    <select>
                        <option value={0}>Select</option>
                        <option value={1}>ชั้น 1</option>
                        <option value={2}>ชั้น 2</option>
                        <option value={3}>ชั้น 3</option>
                        <option value={4}>ชั้น M</option>
                    </select>
                    <select>
                        <option value="">Select</option>
                        <option value="Men">ห้องน้ำชาย</option>
                        <option value="Women">ห้องน้ำหญิง</option>
                    </select>
                    <ReactStars edit={false} value={5} />
                    <CustomToggle eventKey="Building 4">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="Building 4">
                    <Card.Body>
                        {theList.map((val, key) => {
                            if (val.id == null) { return null } else if (val.building == "Building 4") {
                                return (
                                    <div className='review card'>
                                        <div className='card-body text-left'>
                                            <p className='card-text'>Building: {val.building}</p>
                                            <p className='card-text'>Floor: {val.floor}</p>
                                            <p className='card-text'>Toilet: {val.toilet}</p>
                                            <p className='card-text'>Rating: {val.rating}</p>
                                            <p className='card-text'>Name: {val.name}</p>
                                            <p className='card-text'>Comment: {val.reviewing}</p>
                                            <div className='d-flex'>
                                                <button className='btn btn-warning' onClick={() => { theDelete(val.id) }}>Delete</button>
                                            </div>
                                            {/* <p className='card-text'>{val.id}</p> */}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <h1> Building Yo</h1>
                    <select>
                        <option value={0}>Select</option>
                        <option value={1}>ชั้น 1</option>
                        <option value={2}>ชั้น 2</option>
                        <option value={3}>ชั้น 3</option>
                        <option value={4}>ชั้น M</option>
                    </select>
                    <select>
                        <option value="">Select</option>
                        <option value="Men">ห้องน้ำชาย</option>
                        <option value="Women">ห้องน้ำหญิง</option>
                    </select>
                    <ReactStars edit={false} value={5} />
                    <CustomToggle eventKey="Building Yo">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="Building Yo">
                    <Card.Body>
                        {theList.map((val, key) => {
                            if (val.id == null) { return null } else if (val.building == "Building Yo") {
                                return (
                                    <div className='review card'>
                                        <div className='card-body text-left'>
                                            <p className='card-text'>Building: {val.building}</p>
                                            <p className='card-text'>Floor: {val.floor}</p>
                                            <p className='card-text'>Toilet: {val.toilet}</p>
                                            <p className='card-text'>Rating: {val.rating}</p>
                                            <p className='card-text'>Name: {val.name}</p>
                                            <p className='card-text'>Comment: {val.reviewing}</p>
                                            <div className='d-flex'>
                                                <button className='btn btn-warning' onClick={() => { theDelete(val.id) }}>Delete</button>
                                            </div>
                                            {/* <p className='card-text'>{val.id}</p> */}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <h1> Building 100</h1>
                    <select>
                        <option value={0}>Select</option>
                        <option value={1}>ชั้น 1</option>
                        <option value={2}>ชั้น 2</option>
                        <option value={3}>ชั้น 3</option>
                        <option value={4}>ชั้น M</option>
                    </select>
                    <select>
                        <option value="">Select</option>
                        <option value="Men">ห้องน้ำชาย</option>
                        <option value="Women">ห้องน้ำหญิง</option>
                    </select>
                    <ReactStars edit={false} value={5} />
                    <CustomToggle eventKey="Building 100">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="Building 100">
                    <Card.Body>
                    {theList.map((val, key) => {
                            if (val.id == null) { return null } else if (val.building == "Building 100") {
                                return (
                                    <div className='review card'>
                                        <div className='card-body text-left'>
                                            <p className='card-text'>Building: {val.building}</p>
                                            <p className='card-text'>Floor: {val.floor}</p>
                                            <p className='card-text'>Toilet: {val.toilet}</p>
                                            <p className='card-text'>Rating: {val.rating}</p>
                                            <p className='card-text'>Name: {val.name}</p>
                                            <p className='card-text'>Comment: {val.reviewing}</p>
                                            <div className='d-flex'>
                                                <button className='btn btn-warning' onClick={() => { theDelete(val.id) }}>Delete</button>
                                            </div>
                                            {/* <p className='card-text'>{val.id}</p> */}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default TheCard