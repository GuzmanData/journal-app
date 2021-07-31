import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset] = useForm(note);

    const { body, title,id } = formValues;

    const activeId = useRef(note.id);


    useEffect(() => {

        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }

    }, [note, reset]);

    const handleDelete = () => {


        dispatch(startDeleting(id))

    }



    useEffect(() => {

        dispatch(activeNote(formValues.id, { ...formValues }));

    }, [formValues, dispatch]);






    return (
        <div className="notes__main-content animate__animated animate__fadeIn animate__faster">
            <NotesAppBar />
            <div className="notes_content">

                <input
                    type="text"
                    name="title"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />


                <textarea
                    placeholder="What happened today?"
                    name="body"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                >

                </textarea>

                {
                    (note.url)
                    && (
                        <div className="notes__image">
                            <img
                                src={note.url}
                                alt="imagen"
                            />
                        </div>
                    )
                }


            </div>

            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete

            </button>


        </div>
    )
}
