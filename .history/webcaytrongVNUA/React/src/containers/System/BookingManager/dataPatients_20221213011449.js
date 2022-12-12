import React from "react";

import DataPatient from "./DataPatient";
import classes from "./dataPatients.module.css";

const dataPatients = ({ list }) => {
    let cards = <h3>Loading...</h3>;

    if (list) {
        cards = list.map((m, i) => <DataPatient key={i} item={m} />);
    }

    return (
        <div className={classes.Container}>
            <div className={classes.ContainerInner}>{cards}</div>
        </div>
    );
};

export default dataPatients;