import React from "react";

import Movie from "./Movie";
import classes from "./dataPatiets.module.css";

const dataPatiets = ({ list }) => {
    let cards = <h3>Loading...</h3>;

    if (list) {
        cards = list.map((m, i) => <Movie key={i} item={m} />);
    }

    return (
        <div className={classes.Container}>
            <div className={classes.ContainerInner}>{cards}</div>
        </div>
    );
};

export default dataPatiets;