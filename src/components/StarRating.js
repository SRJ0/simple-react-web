import React, {useState} from "react";
import {FaStar} from "react-icons/fa"; //npm i react-icons 로 설치 

const Star = ({selected = false, onSelect = f => f, onSave = f => f}) => (
    <FaStar color={selected ? "gold" : "grey"} onMouseOver={onSelect} onClick={onSave}/>
);

const createArray = length => [...Array(length)];

export default function StarRating({style = {}, totalStars, ...props}) {

    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <div style={{padding: "20px", width:"150px", ...style}} {...props}>
            {createArray(totalStars).map((n, i) => (
                <Star 
                    key={i} 
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                    onSave={() => console.log("saved")}

                />
            ))}
            &nbsp;
            <span>
                {selectedStars} / {totalStars}
            </span>
        </div>    
    );
}