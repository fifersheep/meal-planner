import React from "react";

type Props = {
    label: string
}

function CheckListItem({ label }: Props) {
    return (
        <p>{label}</p>
    );
}

export default CheckListItem;
