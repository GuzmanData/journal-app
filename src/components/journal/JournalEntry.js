import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://pixnio.com/free-images/2017/04/28/2017-04-28-07-31-08-900x600.jpg)'
                }}
            >

            </div>


            <div className="journal__entry-body">

                <p className="journal__entry-title">
                    hoy me comi tres perros
                </p>
                <p className="journal__entry-content">
                    un monton de texto sin sentido. un monton de texto sin sentido
                </p>

            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>


        </div>
    )
}
