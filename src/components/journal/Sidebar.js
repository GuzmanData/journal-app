import React, { useState } from 'react'
import { JournalEntries } from './JournalEntries'
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);
    const [show, setShow] = useState(true);


    const handleLogout = () => {
        dispatch(startLogout());
    }

    const handleAddNote = () => {
        dispatch(startNewNote());

    }

    const handleShowSidebar = () => {
        setShow(!show);
        console.log(show);
    }

    return (

        <aside className={show ? 'journal_sidebar animate__animated animate__fadeIn animate__faster' : 'animate__animated animate__fadeIn animate__faster hide'}>


            <div className={"journal__sidebar-navbar"}>
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> {name}</span>
                </h3>

                <button
                    className="btn"
                    onClick={handleLogout}>
                    Logout
                </button>

                <div>
                    <button
                        onClick={handleShowSidebar}
                    >ocultar</button>
                </div>
            </div>

            <div
                className="journal__new-entry"
                onClick={handleAddNote}
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>
                    New entry
                </p>
            </div>
            <JournalEntries />

        </aside >

    )
}
