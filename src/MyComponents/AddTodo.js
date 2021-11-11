import React,{ useState } from 'react';

export const AddTodo = ({addTodo}) =>{
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be Blank!!")
        }
        else{
        addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your data with anyone else.</div>
                </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label" >Todo Desceription</label>
                        <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}className="form-control" id="desc"/>
                    </div>
                        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
