import React, {useState} from "react";
import {FaStar} from "react-icons/fa"; //npm i react-icons 로 설치 

const Star = ({selected = false, onSelect = f => f, onSave = f => f}) => (
    <FaStar color={selected ? "gold" : "grey"} onMouseOver={onSelect} onClick={onSave}/>
);

const createArray = length => [...Array(length)];

export function StarRating({style = {}, totalStars, savedStars, onRate = f => f, ...props}) {

    const [selectedStars, setSelectedStars] = useState(0)
    if(savedStars > 0) setSelectedStars(savedStars)
    return (
        <div style={{padding: "20px", width:"150px", ...style}} {...props}>
            {createArray(totalStars).map((n, i) => (
                <Star 
                    key={i} 
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                    onSave={onRate(selectedStars)}
                />
            ))}
            &nbsp;
            <span>
                {selectedStars} / {totalStars}
            </span>
        </div>    
    );
}

export function StarRating2({selectedStars}) {
    return (
        <div style={{padding: "20px", width:"150px"}}>
            {createArray(5).map((n, i) => (
                <Star 
                    key={i} 
                    selected={selectedStars > i}
                />
            ))}
        </div>
    )
}