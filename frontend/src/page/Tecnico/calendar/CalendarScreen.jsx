import React, { Children, useEffect, useState } from 'react';
// import { Navbar } from '../../../components/ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewFab } from '../../../components/ui/AddNewFab';
import { DeleteEventFab } from '../../../components/ui/DeleteEventFab';
import { messages } from '../../../helpers/calendar-messages-es';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { uiOpenModal } from '../../../actions/ui';
import { eventClearActive, eventSetActive } from '../../../actions/events';
import './style/styles.css';
import { CustomModal } from '../../../components';
import { useMutation } from 'react-query';
import masterQuery from '../../../helpers/masterQuery';

moment.locale('es');

const localizer = momentLocalizer(moment);


export const CalendarScreen = () => {

    const url = "http://127.0.0.1:8000/api/calendario/getcalendarios";

    const queryLogin = useMutation((params) => masterQuery(url, params, "get"));

    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector(state => state.calendar);
    
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const [tareas, setTareas] = useState([])


    const onDoubleClick = e => {
        dispatch(uiOpenModal());
    };

    const onSelect = e => {
        dispatch(eventSetActive(e));
    };

    const onViewChange = e => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    };

    const eventStyleGetter = (event, start, end, isSelected) => {
        // console.log(event, start, end, isSelected);
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    const onSelectSlot = (e) => {
        dispatch(eventClearActive());
    };

    const fetchData = async () => {
        
        const respuesta = await queryLogin.mutateAsync();

        return respuesta.respuesta
    }

    // useEffect(()=> {
    //     fetchData()
    //         .then(res => setTareas(res))
    //         .catch(err => console.log(err))
    
    //     console.log(tareas)
    // }, [])

    // useefect y dispatch de nuevo evento del calendario


    return (
        <div className="calendar-screen" id="calendar">
            {/* <Navbar /> */}

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChange}
                view={lastView}
                onSelectSlot={onSelectSlot}
                selectable={true}
            />


            <AddNewFab />
            
            {
                (activeEvent) && <DeleteEventFab />
            }

            <CalendarModal  />

            {/* <CustomModal isOpen={activeEvent} onClose={!activeEvent} titulo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deleniti.">
                <>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum cum aut est odit recusandae, maxime magnam! Nisi amet cum quae, laborum dolor eos cupiditate voluptatum? Doloremque optio consequuntur sint, totam nostrum, dolores velit enim commodi magnam at, asperiores dignissimos consequatur perferendis quod dicta! Perferendis, deleniti alias mollitia dolores repellat maxime!</>
            </CustomModal> */}

        </div>
    )
}
