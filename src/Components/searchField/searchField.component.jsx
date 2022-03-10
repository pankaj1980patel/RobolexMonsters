import React from "react";
import "./searchField.style.css";
export const SearchField =(props)=>(
    <input
        className="search"
        type="search"
        placeholder={props.placeholder}
        onChange={props.handleChange}
    />
)