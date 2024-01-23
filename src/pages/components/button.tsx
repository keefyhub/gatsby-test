import React from "react";

interface Props {
    classes?: string,
    content: string,
    donationType?: string,
    dataValue?: Number,
    onClick?: any
}

export const Button = (props: Props) => {
    return <button
        type="button"
        className={`button ${props.classes ?? ''}`}
        data-donation-type={props.donationType}
        data-value={props.dataValue}
        onClick={props.onClick}>
        {props.content}
    </button>;
}