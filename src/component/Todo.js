import React, { useState, useEffect } from 'react'
import './todo.css'
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";

//get item from localstorage
const getitem = () => {
    let list = localStorage.getItem("list")
    if (list) {
        return JSON.parse(localStorage.getItem("list"))
    }
    else {
        return []
    }
}


const Todo = () => {
    //all state
    const [inputdata, setinputdata] = useState('')
    const [item, setitem] = useState(getitem)
    const [toggle, settoggle] = useState(true)
    const [isedited, setisedited] = useState(null)

    //add item when enter key is pressed
    const listener = event => {
        if (event.code === "Enter" && inputdata) {
            event.preventDefault();
            additem();
        }
    };
    document.addEventListener("keydown", listener);



    //add item function
    const additem = () => {
        //if no item
        if (!inputdata) {
            alert("enter the item")
        }
        //for edited item
        else if (inputdata && !toggle) {
            setitem(
                item.map((elem) => {
                    if (elem.id === isedited) {
                        return { ...elem, name: inputdata }
                    }
                    return elem;
                })
            )
            settoggle(true)
            setisedited(null)
            setinputdata("")
        }

        //adding item
        else {
            const inputdatadata = { 
                id: new Date().getTime().toString(), 
                name: inputdata 
            }
            setitem([...item, inputdatadata])
            setinputdata('')

        }
    }

    //delete item fuction
    const deletee = (i) => {
        const updateditem = item.filter((ele) => {
            return ele.id !== i
        })
        setitem(updateditem)
    }

    //clear all item fuction
    const clearall = () => {
        setitem([])
    }


    //edit item function
    const editt = (id) => {
        let newitem = item.find((ele) => {
            return ele.id === id
        })
        settoggle(false)
        setinputdata(newitem.name)
        setisedited(id)
    }


    //useeffect  to set item in localstorage
    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(item))
    }, [item])



    return (
        <>
            <div className="container">
                <h2>Add your TO-Do-LIST</h2>
                {/* inputdatadata  */}
                <input onChange={(e) => setinputdata(e.target.value)} type="text" value={inputdata} />


                {/* add or edit button  */}
                {
                    toggle ?
                        <button className=" btn btn-light btn-sm" onClick={additem} onKeyPress={(e) => e.key === 'Enter' && additem} >Add</button> :
                        < button className=" btn btn-light btn-sm" onClick={additem} >edit</button>
                }


                {/* item */}
                {item.map((ele) => (
                    <div key={ele.id} className="item">
                        <h3 >{ele.name}</h3>
                        <AiFillEdit className="icon" onClick={() => editt(ele.id)} />
                        <AiOutlineDelete className="icon" onClick={() => deletee(ele.id)} />
                        <hr />
                    </div>
                ))}


                {/* clear all button  */}
                <br /><button className='btn btn-danger btn-light' onClick={clearall}>Clear all</button>
            </div>


        </>
    )
}

export default Todo