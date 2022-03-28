import React from 'react'
import Card from './Card';


const CardList = ({robots}) => {
    return (
        <div>
        {
            robots.map((value, index) => {
                return (
                    <Card 
                        key={index} 
                        id={value.id} 
                        name={value.name} 
                        email={value.email}
                    />
                )
            })
        }
        </div>
    );
}

export default CardList;