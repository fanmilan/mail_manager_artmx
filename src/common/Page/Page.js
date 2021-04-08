import './Page.scss';
import {NavLink} from "react-router-dom";
import {Loader} from "../Loader/Loader";
import {usePromiseTracker, trackPromise} from "react-promise-tracker";
import {Modal} from "../Modal/Modal";
import React, {useState} from "react";

export function Page(props) {

    const { promiseInProgress } = usePromiseTracker();
    const [isModalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState(false);
    const ModalBody = props.Modal;


    function closeModal() {
        setError(false);
        setModalOpen(false);
    }

    function handleSave(e) {
        setError(false);
        e.preventDefault();
        const formData = new FormData(e.target);
        trackPromise(
            props.createData(formData)
                .then((result) => {
                  if (result.success) {
                        props.addItem(result.data);
                        setModalOpen(false);
                  }
                })
                .catch((error)=>{
                    if (!error.response) {
                        // network error
                        //this.errorStatus = 'Error: Network Error';
                        setError('Ошибка: Проблема с сетью');
                    } else {
                        setError(error.response.data.message);
                        //this.errorStatus = error.response.data.message;
                    }
                }),
                'saving'
        );
    }


    return (
        <div className='page'>
            <div className="page__header">
                <h1 className="page__title">{props.title}</h1>
                <div className="page__btn-wrap">
                    <div className="page__create-btn" onClick={()=>setModalOpen(true)}>Создать</div>
                </div>
                <div className="page__menu menu">
                    <NavLink to='/' className="menu__item" activeClassName='menu__item_active' exact={true}>Письма</NavLink>
                    <NavLink to='/ideas'  className="menu__item" activeClassName='menu__item_active' >Идеи</NavLink>
                </div>
            </div>
            <div className="page__body">
                {
                    promiseInProgress ? <Loader /> : props.children

                }
            </div>
            {
                isModalOpen &&
                <Modal title={props.modalTitle} closeModal={closeModal} handleSave={handleSave} error={error}>
                    <ModalBody />
                </Modal>
            }
        </div>
    )
}