import React from 'react'

function Notes({ notes }) {
    return (
        <>

            <section className="mb-5">
                <p> {notes}</p>
            </section>
        </>
    )
}

export default Notes