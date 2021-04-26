import React, { useState, useEffect } from 'react';
import styles from './SearchFilters.module.css';

import {Container, Form, Row, Col} from 'react-bootstrap';

const SearchFilter = () => {
    return (
        <Container className={styles.mainDiv}>
            <Row>    
                <Col style={{textAlign:"center"}}><h4>Search Filters</h4></Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Select State</Form.Label>
                        <Form.Control as="select">
                            <option>Maharashtra</option>
                             <option>Delhi</option>
                             <option>Goa</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Select City/District</Form.Label>
                        <Form.Control as="select">
                            <option>Default select</option>
                            <option>Default select</option>
                            <option>Default select</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchFilter;