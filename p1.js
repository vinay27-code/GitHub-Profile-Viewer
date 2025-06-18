import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";


function FetchGitHubProfile(){


    return(
        <>
        
        <Header/>
        <Body/>
        
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<FetchGitHubProfile/>)