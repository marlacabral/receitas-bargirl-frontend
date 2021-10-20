import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './DrinkAdd.css';
import Api from '../../../src/api/api'; 

const DrinkAdd = (props) => {
  const [drink, setDrink] = useState({});

  const history = props.history;
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const image = evento.target.image.value; 
    const name = evento.target.name.value;
    const description = evento.target.description.value;
    const priority = evento.target.priority.value;
    const deadline = evento.target.deadline.value;
    const status = evento.target.status.value;


    const drink = {
      image,
      name,
      description,
      priority,
      deadline,
      status
    }

    try {
      const response = await Api.fetchPost(drink);
      const data = await response.json();
      alert(data.message);
      history.push("/");
    } catch (error) {
      console.log(error);
      }
    };

    const handleChange = (e) => {
        let newDrink = drink;
        newDrink[e.target.name] = e.target.value;
        setDrink({ ...newDrink})
    }
    
      return (

        <div className="adict">
    
          <form className="add-form" onSubmit={(e) => {handleSubmit(e)}}>

              <div className="add-form">
                  <label id="lab">Image: </label>
                  <input type="text" id="image" name="image" placeholder="Write the url of image of drink" onBlur={(e) => handleChange(e)} className="image"/>
                  { !drink["image"] ? <span className="emptyText"></span> : ""}
              </div>

              <div className="add-form">
                  <label id="lab">Name: </label>
                  <input type="text" id="name" name="name" placeholder="Write the name of drink" onBlur={(e) => handleChange(e)} className="name"/>{ !drink["name"]  ? <span className="emptyText"></span> : ""}
              </div>

              <div className="add-form">
                  <label id="lab">Description: </label>
                  <input type="text" id="description" name="description" placeholder="Write the description of drink" onBlur={(e) => handleChange(e)} className="description"/>{ !drink["description"] ? <span className="emptyText"></span> : ""}
              </div>

              <div className="add-form">
                  <label id="lab">Priority: </label>
                  <select name="priority" onChange={(e) => handleChange(e)}>
                      <option>-</option>
                      <option>Low</option>
                      <option>High</option>
                  </select>
                  { !drink["priority"] ? <span className="emptyText"></span> : ""}
              </div>

              <div className="add-form">
                  <label id="lab">Deadline: </label>
                  <select name="deadline" onChange={(e) => handleChange(e)}>
                      <option>-</option>
                      <option>Manhã</option>
                      <option>Tarde</option>
                      <option>Noite</option>
                  </select>
                  { !drink["deadline"] ? <span className="emptyText"></span> : ""}
              </div>

              <div className="add-form">
                  <label id="lab">Status: </label>
                  <select name="status" onChange={(e) => handleChange(e)}>
                    <option>-</option>
                      <option>Pending</option>
                      <option>Process</option>
                      <option>Concluded</option>
                  </select>
                  { !drink["status"] ? <span className="emptyText"></span> : ""}
              </div>
            
              <div className="buttons-add">
                <button className="send" type="submit">Send</button>
                
                <Link to="/"><button className="cancel" type="submit">Cancel</button>
                </Link>

              </div>
          </form>
    </div>
  )
      
      }

export default DrinkAdd
