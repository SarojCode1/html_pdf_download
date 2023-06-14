import React from 'react';

function Header(props) {
    return (
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
            <div>
                <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoice</h1>
            </div>
            <div>
                <ul className="flex items-center justify-between flex-wrap">
                    <li>
                        <button onClick={props.handleDownload}>Download</button>
                    </li>
                    {/* Other buttons */}
                </ul>
            </div>
        </header>
    );
}

export default Header;
