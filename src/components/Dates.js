import React from 'react'

function Dates({ invoiceDate, dueDate, invoiceNumber }) {
    return (
        <>
            <article className="my-5 flex flex items-end justify-end">
                <ul>
                    <li> <span className="font-bold">  Invoice date: </span> {invoiceDate}</li>
                    <li> <span className="font-bold"> Invoice number: </span> {invoiceNumber}</li>
                    <li> <span className="font-bold"> Due data:</span> {dueDate} </li>
                </ul>
            </article>
        </>
    )
}

export default Dates