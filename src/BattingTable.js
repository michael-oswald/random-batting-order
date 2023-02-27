import {MDBTable, MDBTableBody, MDBTableHead, MDBTypography} from "mdb-react-ui-kit";
import Item from "./Item";
import React from "react";

const BattingTable = ({array, setArray}) => {
    console.log("In Batting Table, here is current array: ", array);

    return (
        <MDBTable responsive>
            <MDBTableHead dark>
                <tr>
                    <td><MDBTypography tag='strong'>Batting Order #</MDBTypography></td>
                    <td><MDBTypography tag='strong'>Player Name</MDBTypography></td>
                    <td><MDBTypography tag='strong'>Position</MDBTypography></td>
                    <td></td>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {array.map((item, i) =>
                    <Item
                        key={i}
                        item={item}
                        array={array}
                        setArray={setArray}
                        index={i}
                    />
                )}
            </MDBTableBody>
        </MDBTable>
    );
}
export default BattingTable;