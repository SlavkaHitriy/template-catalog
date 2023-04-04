import React, { useState, ChangeEvent } from "react";
import styles from "components/content/index.module.scss";


import { Card } from "components/common/Card/Card";


export const Content = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};
