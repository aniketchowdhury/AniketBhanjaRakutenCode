import {React} from "react";
import './App.css';

function ModalDialog(props){
    const { closeModal }=props;
    const handleButtonClick=()=>{
        closeModal();
    }
    return (
        <div className="modalWindow">
            <div>Book Name</div>
            <input type="text" placeholder="Enter book name"/>
            <div>
            <span>Publisher</span>
            <input type="text" placeholder="Enter publisher name"/>
            <span>Release year</span>
            <input type="text" placeholder="Enter release year"/>
            </div>
            <div>Author Name</div>
            <input type="text" placeholder="Enter author name"/>
            <div style={{marginTop:"20px"}}><button onClick={handleButtonClick}>DONE</button></div>
        </div>
    )
}
export default ModalDialog;
