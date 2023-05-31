import React from 'react';
import './style/styles.css';

export const CalendarEvent = ({event}) => {
    const {title, user} = event;

    return (
        <div>
            <strong> {title} </strong>
            <span>- {user.name} </span>
        </div>
    )
}
