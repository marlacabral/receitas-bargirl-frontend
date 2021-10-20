import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api/api';
import '../return/DrinkReturn.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


const DrinkReturn = (props) => {
    const _id = props.match.params.id;
    const [drink, setDrink] = useState({});
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        getDrinkById();
    }, []);

    const getDrinkById = async () => {
        try{
        const response = await Api.fetchGetById(_id);
        const result = await response.json();
        setDrink(result);
        }catch {alert('Algo deu errado, favor verificar.');
        }
    }

    const handleDelete = async (evento) => {
        evento.preventDefault();
        try{
        const response = await Api.fetchDelete(_id);
        const result = await response.json();
        alert(result.message);
        props.history.push('/');
        }catch {alert('Algo deu errado, favor verificar.');
        }
    }

    return (
        <div className="container flex-grow-1">
            
            <div className="row">
                <div className="col">
                    <img src={drink.image}/>
                    <h3 className="text-center">{drink.name}</h3>
                    <h5 className="text-center">Priority: {drink.priority}</h5>
                    <h5 className="text-center">Deadline: {drink.deadline}</h5>
                    <h5 className="text-center">Status: {drink.status}</h5>
                    <h5 className="text-center">Description: {drink.description}</h5>

                    <div className="buttons">
                        <Link to={`/edit/${drink._id}`}><button className="btn btn-outline-info" type="submit">Edit</button>
                        </Link>

                        <button className="btn btn-outline-danger" onClick={onOpenModal}>Delete</button>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                
                <button className="btn btn-danger" onClick={onCloseModal}>Não</button>
                <button className="btn btn-success" onClick={handleDelete}>Sim</button>
                <h2>Deseja realmente Excluir?</h2>
            </Modal>
        </div>
    )
}

export default DrinkReturn;