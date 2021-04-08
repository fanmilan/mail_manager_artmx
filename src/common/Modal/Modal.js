import './Modal.scss';
import React from "react";
import {usePromiseTracker} from "react-promise-tracker";
import {Loader} from "../Loader/Loader";

export function Modal(props) {

    const {promiseInProgress} = usePromiseTracker({area: 'saving', delay: 0});


    function handleClickOutside(e) {
        if (e.currentTarget === e.target) {
            props.closeModal();
        }
    }


    return (
        <div className='modal' onMouseDown={handleClickOutside} >
            <div className="modal__window">
                <div className="modal__header">
                    <h2 className="modal__title">{props.title}</h2>
                </div>
                <div className="modal__body">

                    <form className="modal__form" onSubmit={props.handleSave}>
                        {props.children}
                        {props.error && <Error error={props.error} />}
                        {
                            promiseInProgress ? <Loader /> :
                             <ModalField>
                                <input type='submit' className='modal__save-btn' value='Сохранить' />
                            </ModalField>
                        }
                    </form>
                </div>
            </div>

        </div>
    )
}

export function ModalField({label, children}) {
    return (
        <div className='modal__field'>
            {label && <label className='modal__label'>{label}</label>}
            {children}
        </div>
    )
}

function Error(props) {
    return <div className={'modal__error'}>{props.error}</div>;
}