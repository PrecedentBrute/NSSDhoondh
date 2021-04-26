import React, { useState, useEffect } from 'react';
import styles from './Cards.module.css';

import {Container, Spinner} from 'react-bootstrap';

import Card from './Card/Card';

const Cards = () => {
    
    const [cardsToRender, setCardsToRender] = useState([
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    ]);

    const [cardsData, setCardsData] = useState([]);   

    useEffect(() => {
        setTimeout(()=>{      // adds mock data, later update to the actual get request after backend API is final
            
            let i;
            let data = [];
            for(i=0; i < 8; i++){
                data.push({title: "Fyrax", city: "Pune", phone:"9988776655"});
            }
            setCardsData(data);

            setCardsToRender(
                cardsData.map((data) => <Card title={data.title} city={data.city} phone={data.phone} />)
            );
        }, 600);
    })
    
    return (
        <Container className={styles.mainContainer}>
            {cardsToRender}
        </Container>
    );
}

export default Cards;