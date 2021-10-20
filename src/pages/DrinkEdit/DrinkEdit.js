import React, { useEffect, useState } from "react";
import Api from "../../api/api";
import '../DrinkEdit/DrinkEdit.css';

const Edit = (props) => {
    const _id = props.match.params.id;
    const [drink, setDrink] = useState({});

    useEffect(() => {
        getDrinkById();
    }, []);

    const getDrinkById = async () => {
        const response = await Api.fetchGetById(_id);
        const data = await response.json();
        setDrink(data);
    };

    const handleFieldsChange = (event) => {
        const item = { ...drink };
        item[event.target.name] = event.target.value;
        setDrink(item);
    };

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const newItem = { ...drink };

        try {
        const response = await Api.fetchPut(newItem, _id);
        const data = await response.json();
        alert(data.message);
        props.history.push("/"); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
            <div className="card-f">
                <form className="f-edit" onSubmit={handleSubmit}>

                    <div className="f-edit">
                        <label>Image</label>
                        <input type="text" id="image" value={drink.image} name="image" placeholder="Write the url of image of drink" onChange={handleFieldsChange} className="image"/>
                    </div>

                    <div className="f-edit">
                        <label>Name: </label>
                        <input type="text" id="name" name="name" placeholder="Write the name of drink" value={drink.name} onChange={handleFieldsChange} className="name"/>

                    </div>

                    <div className="f-edit">
                        <label>Description: </label><input type="text" id="description" name="description" placeholder="Write the description of drink" value={drink.description} onChange={handleFieldsChange} className="description"/>
                    </div>

                    <div className="f-edit">
                        <label>Priority: </label>
                        <select name="priority" value={drink.priority} onChange={handleFieldsChange} className="priority">
                            <option>-</option>
                            <option>Low</option>
                            <option>High</option>
                        </select>
                    </div>

                    <div className="f-edit">
                        <label>Deadline: </label>
                        <select id="deadline" name="deadline" onChange={handleFieldsChange} value={drink.deadline} className="deadline">
                            <option>-</option>
                            <option>Manhã</option>
                            <option>Tarde</option>
                            <option>Noite</option>
                        </select>
                    </div>

                    <div className="f-edit">
                        <label>Status: </label>
                        <select id="status" name="status" onChange={handleFieldsChange} className="status">
                            <option>-</option>
                            <option>Pending</option>
                            <option>Process</option>
                            <option>Concluded</option>
                        </select>
                    </div>
                        
                    <button className="save" type="submit">Save</button>
                        
                    
                </form>
            </div>
     
    )
};

export default Edit;
