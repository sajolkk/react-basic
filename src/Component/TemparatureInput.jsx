import React from "react";

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export default function TemparatureInput({ temparature, scale, changeTemparatur }) {
    // console.log(scale)
    return (
        <>
            <fieldset>
                <legend>Enter temparature in {scaleName[scale]}</legend>
                <input type="text" value={temparature} onChange={(e) => changeTemparatur(e, scale)} />
            </fieldset>
        </>
    );
}