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
    const [input, setinput] = useState('')
    const [item, setitem] = useState(getitem)
    const [toggle, settoggle] = useState(true)
    const [isedited, setisedited] = useState(null)

    //add item function
    const additem = () => {
        if (!input) {
            alert("enter the item")
        }
        else if (input && !toggle) {
            setitem(
                item.map((elem) => {
                    if (elem.id === isedited) {
                        return { ...elem, name: input }
                    }
                    return elem;
                })
            )
            settoggle(true)
            setisedited(null)
            setinput("")
        }
        else {
            const inputdata = { id: new Date().getTime().toString(), name: input }
            setitem([...item, inputdata])
            setinput('')
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
        setinput(newitem.name)
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
                {/* input  */}
                <input onChange={(e) => setinput(e.target.value)} type="text" value={input} />


                {/* add or edit button  */}
                {
                    toggle ?
                        <button className=" btn btn-light btn-sm" onClick={additem} >Add</button> :
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