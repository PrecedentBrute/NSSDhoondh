import React from 'react';
import styles from './Card.module.css'; 

import {Container, Col, Row} from 'react-bootstrap';

const Card = ({title="Default title", city="Pune", phone="1122334455"}) => {
    return(
        <Container className={styles.infoCard}>
            <Row className={`${styles.borderBottom} ${styles.padding}`}>
                <Col><h5>{title}</h5></Col>
                <Col>
                    <div className={styles.available}>Available</div>
                    <div style={{fontSize:"0.7rem"}}>Verified* 30 minutes ago</div>
                </Col>
            </Row> 
            <Row className={styles.padding}>
                <Col>City: {city}</Col>
            </Row>
            <Row>
                <Col>Phone: {phone}</Col>
            </Row>
            <Row className={styles.padding}>
                <Col>More details</Col>
            </Row>
            <Row className={`${styles.borderBottom} ${styles.padding}`}>
                <Col>
                    <div className={styles.tags}>Oxygen</div>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>Copy to clipboard</Col>
            </Row>
        </Container>
    );
}

export default Card;