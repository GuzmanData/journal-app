import React from 'react'
import moment from "moment";

import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUpLoading } from '../../actions/notes';

export const NotesAppBar = () => {
    const toDay = moment(moment.now());

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)

    const handleSave = () => {

        dispatch(startSaveNote(active));

    }

    const handlePicture = () => {

        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        console.log(e);

        const file = e.target.files[0];

        if (file) {
            dispatch(startUpLoading(file))
        }
    }


    return (
        <div className="notes__appbar">
            <span> {toDay.format('LLL')} </span>

            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            <div>

                <button
                    onClick={handlePicture}
                    className="btn">
                    Picture
                </button>

                <button
                    onClick={handleSave}
                    className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}
