import React from "react";
import CheckListItem from "./CheckListItem";

function CheckList() {
    return (
        <>
            {['One','Two','Three'].map(label => 
                <CheckListItem label={label} />
            )}
        </>
    );
}

export default CheckList;
