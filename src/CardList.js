import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    const cardArray = robots.map((user, i) => {   // using map is better but forEach possible
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name = {robots[i].name} 
                email={robots[i].email} 
            />
        );
    })
    return (
        <div>
           {cardArray}  
            
        </div>
// ^ needs to be in curly braces 

    );
}

export default CardList;

