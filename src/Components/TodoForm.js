import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({
            id : Math.floor(Math.random()*1000),
            text : input
        });

        setInput('');
    };

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                {
                    props.edit ? 
                    (
                        <>
                            <input
                                type="text"
                                placeholder='update your todo'
                                name='text'
                                value={input}
                                className='todo-input'
                                onChange={handleChange}
                                ref={inputRef}
                                />
                            <button className="add-todo-btn">Update</button>    
                        </>
                    ) :
                    (
                        <>
                            <input
                                type="text"
                                placeholder='Add a todo'
                                name='text'
                                value={input}
                                className='todo-input'
                                onChange={handleChange}
                                ref={inputRef}
                                />
                            <button className="add-todo-btn">Add Todo</button>
                        </>
                    )
                    
                }
                
            </form>  
        </div>
    )
}

export default TodoForm
