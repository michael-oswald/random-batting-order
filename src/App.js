import './App.css';
import { MDBTypography, MDBContainer,MDBIcon } from 'mdb-react-ui-kit';
import React, { useState } from "react";
import BattingTable from "./BattingTable";

export default function App() {
    const [array, setArray] = useState([
        {name:'',position:'1st Base'},
        {name:'',position:'2nd Base'},
        {name:'',position:'3rd Base'},
        {name:'',position:'Short Stop'},
        {name:'',position:'Catcher'},
        {name:'',position:'Pitcher'},
        {name:'',position:'Center Field'},
        {name:'',position:'Left Field'},
        {name:'',position:'Right Field'}
       ]);

    const newRow = () => {
        let lastArrayIndexRowNum = array.length;
        const newArray = [...array.slice(0, lastArrayIndexRowNum), {name:'',position:''}];
        console.log("newArray-->", newArray, lastArrayIndexRowNum-1);
        setArray(newArray);
    };

    const randomize = () => {
        console.log("randomize curren array", array);
        let newArray = [...array];

        shuffle(newArray);
        console.log("shuffled array", newArray);
        setArray(newArray);

    };

    return (
        <>
            <MDBContainer className="text-center">
                <MDBTypography className='display-1 pb-3 mb-3 border-bottom'>
                    Team Roster
                </MDBTypography>
                <br />

            </MDBContainer>
            <MDBContainer>
                <BattingTable array={array} setArray={setArray} />
            </MDBContainer>
            <MDBContainer>
                <button onClick={newRow} className="btn btn-primary"><MDBIcon fas icon="plus" /> New Player</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={randomize} className="btn btn-warning"><MDBIcon fas icon="sync" /> Randomize!</button>

            </MDBContainer>
        </>
    );
}

//from: https://javascript.info/task/shuffle#:~:text=Write%20the%20function%20shuffle(array,%2C%202%5D%20%2F%2F%20...
// uses Fisher-Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}