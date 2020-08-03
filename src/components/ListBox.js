import React from 'react';
import '../App.css';
import {FaTrash} from 'react-icons/fa';
//import FlipMove from 'react-flip-move';

function ListBox(props) {
    const list = props.list;
    const listDisplay = list.map(item => {
        return (
            <div className = "list-item" key={item.key}>
                <input type="text"
                className = "list-input" 
                value={item.text}
                onChange={
                    (e) => {
                        props.setUpdate(e.target.value, item.key)
                    }
                }/>                
                <p className = "icon-box"><span id="delete-icon"
                    onClick={() => props.deleteItem(item.key)}>
                    <FaTrash/></span></p>
            </div>
        );
    });

    return(        
        <div id = "list-box">
            
                {listDisplay}
            
        </div>
    )
}

export default ListBox;