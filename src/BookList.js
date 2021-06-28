import {React, useEffect, useState} from "react";
import './App.css';
import ModalDialog from "./ModalDialog";

function BookList(){
    const [bookList, setbooklist] = useState([]);
    const [inputBook, setInputBook] = useState("");
    const [isOpen , setOpen] = useState(false);
    useEffect(()=>{
        async function getBookList() {
            const res = await fetch("http://localhost:3004/books");
            if(res.ok)
            {
                res.json().then(val=>{
                    console.log(val);
                    setbooklist(val)
                })
            }
        }
        getBookList();
    }, [])

    const handleChange=(event)=>{
        setInputBook(event.target.value)
    }

    const openModal=()=>{
        setOpen(true);
    }

    const closeModal=()=>{
        setOpen(false);
    }

    const filteredList=()=>{
        let filterArr=[];

        filterArr= bookList.filter((item,index)=>{
            console.log(item.bookName);
            return item.bookName.toLowerCase().indexOf(inputBook.toLowerCase())!==-1;
        })
        console.log("filter",filterArr);
        return <div>
            {filterArr.map((item,index)=>
            <div key={index} style={{margin:"10px"}}>
            <div style={{fontSize:"large"}}>{item.bookName}
            </div>
            <div style={{fontSize:"small"}}>{item.author}</div>
            </div>
        )}
        </div>
    }

    return (
        <div className="container">
            <div style={{marginLeft:"20px"}}>
            <h3>List of books:-</h3>
            <input type="text" value={inputBook} placeholder="Search for books here" onChange={handleChange}/>
            {bookList && filteredList()}
            </div>
            <div>
                <button style={{marginTop:"50px", padding:"10px"}} onClick={openModal}>Add New Book</button>
            </div>
            {isOpen && <ModalDialog closeModal={closeModal}/>}
        </div>
    )
}
export default BookList;
