import React, { useState } from 'react';

function Todos() {

    const [todovalue, setTodoValue] = useState("");
    const [data, setdata] = useState([]);
    const [editId, setEditId] = useState(0);
    const [isEdit, setIsEdit] = useState(false);

    console.log(todovalue);
    function changeHandler(event) {
        setTodoValue(event.target.value);
    }

    function submitHandler(event) {
        if (!todovalue) {

        }
        else if (isEdit) {
            setdata(data.map((elem, index) => {
                if (index === editId) {
                    return [todovalue];
                }
                return elem;
            }))
            setIsEdit(false);
            setTodoValue("")
        }

        else {
            event.preventDefault();
            setdata([...data, todovalue]);
            setTodoValue("");
        }

    }
    console.log(data);

    function clickHandler(id) {
        setdata(data.filter((d, inde) => inde !== id));
    }

    function clickEdit(id) {
        const newItem = data.find((elem, inde) => {
            return inde === id;
        })
        console.log(newItem);
        setTodoValue(newItem);
        setEditId(id);
        setIsEdit(true);
    }


    return (
        <div className='w-full'>
            <div className='flex justify-center items-center gap-1'>
                <input

                    className='w-[230px] py-2 px-4 rounded focus:outline-none '
                    type='text'
                    name='todo'
                    onChange={changeHandler}
                    placeholder='ToDo'
                    value={todovalue} />

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded' onClick={submitHandler}>
                    {isEdit ? "Edit" : "Add ToDo"}
                </button>

            </div>

            <div>
                {
                    data.map((todo, index) => {
                        return (<div className='flex justify-between items-center bg-yellow-100 my-2 px-2 py-1 rounded' key={index}>
                            <div>
                                {todo}
                            </div>

                            <div className='flex gap-1'>
                                <button className='bg-red-500 hover:bg-red-700 text-white p-1.5 rounded' onClick={() => clickHandler(index)}>
                                    delete
                                </button>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white p-1.5 rounded' onClick={() => clickEdit(index)}>
                                    Edit
                                </button>
                            </div>
                        </div>)
                    })
                }
            </div>

        </div>
    )
}

export default Todos;