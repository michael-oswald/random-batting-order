import {
    MDBBtn,
    MDBInput,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBIcon
} from 'mdb-react-ui-kit';
import React, { useState } from "react";
import Select from 'react-select'
import {positionOptions} from './positions';

const Item = ({item, index, array, setArray}) => {
    const [centredModal, setCentredModal] = useState(false);
    const [itemPosition, setItemPosition] = useState(item.position);
    const [itemName, setItemName] = useState(item.name);

    const editButtonClicked = () => {
        const filter = array.filter((item, i) => i === index);

        setItemName(filter[0].name);
        setItemPosition(filter[0].position);

        setCentredModal(!centredModal);
    };

    const deleteRow = () => {
        const filter = array.filter((item, ele) => ele !== index);
        setArray(filter);
    };

    const handleSavePositionBtnClicked = () => {
        const newItemPosition = itemPosition;
        const newItemName = itemName;

        const newArray = array.map((ele, i) => {
            if (i === index) {
                return {name: newItemName, position: newItemPosition};
            } else {
                return ele;
            }
        });
        setArray(newArray);
        setCentredModal(!centredModal)

    };

    const handlePositionChange = (selected) => {
        const myValue = selected.label;
        setItemPosition(myValue);
    };

    const handleNameChange = (event) => {
        const myValue = event.target.value;
        setItemName(myValue);
    };

    return (
        <>
        <tr key={index}>
            <td>{index + 1} </td>
            <td>{item.name}</td>
            <td>{item.position}
            </td>
            <td>
                <MDBIcon fas icon="pen" size='lg' style={{ cursor: 'pointer' }} onClick={editButtonClicked}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <MDBIcon fas icon="trash" size='lg' style={{ cursor: 'pointer' }} onClick={deleteRow} />
            </td>
        </tr>
        <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
            <MDBModalDialog centered>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Edit</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={editButtonClicked}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <b>Player Name:</b>
                        <MDBInput type='text' value={itemName} onChange={handleNameChange}></MDBInput>
                        <br />
                        <b>Player Position:</b>
                        <Select
                            options={positionOptions}
                            onChange={handlePositionChange}
                        />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color='secondary' onClick={editButtonClicked}>
                            Close
                        </MDBBtn>
                        <MDBBtn onClick={handleSavePositionBtnClicked}>Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    </>
    );
};

export default Item;