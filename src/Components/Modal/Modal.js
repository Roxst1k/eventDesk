import React, {useContext, useEffect, useId, useRef, useState} from 'react';
import style from './modal.module.css'
import {MyContext} from "../../App";


const Modal = ({showModal}) => {
    const {data, setData} = useContext(MyContext);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const ref = useRef(null)
    const id = useId()

    useEffect(() => {
        ref.current.focus()
    }, [])


    const addNewEvent = (e) => {
        e.preventDefault()


        const newEvent = {
            id,
            title,
            description
        }

        setData([...data, newEvent])
        setTitle('')
        setDescription('')
        showModal(false)
    }


    return (
        <>
            <div className={style.container} onClick={() => showModal(false)}></div>
            <form className={style.form} onSubmit={addNewEvent}>
                <div className={style.form_header}>
                    <h2>Add event</h2>
                    <button onClick={() => showModal(false)} className={style.closeBtn}>X</button>
                </div>
                <fieldset className={style.fieldset}>
                    <legend className={style.legend}>
                        <label className={style.label}>
                            Title event :
                            <input type="text"
                                   ref={ref}
                                   placeholder='Add your event title'
                                   className={style.input}
                                   value={title}
                                   onChange={(e) => setTitle(e.target.value)}
                                   required
                            />
                        </label>
                        <label className={style.label}>
                            Description event :
                            <textarea placeholder='Add your description title'
                                      className={`${style.input} ${style.textarea}`}
                                      value={description}
                                      onChange={(e) => setDescription(e.target.value)}
                                      required
                            />
                        </label>
                        <button type={"submit"} className={style.submit}>Add event</button>
                    </legend>
                </fieldset>
            </form>
        </>

    );
};

export default Modal;