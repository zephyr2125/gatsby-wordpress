import React, { useState } from 'react';

export const Context = React.createContext();

export const AppProvider = (props) => {
    const [showSection, setShowSection] = useState(true);
    const [goBack, setGoBack] = useState(false);

    return (
        <Context.Provider
            value={{
                showSection,
                setShowSection,
                goBack,
                setGoBack
            }}
        >
            {props.children}
        </Context.Provider>
    );
}
