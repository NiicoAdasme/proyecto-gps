import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { eventAddNew, eventClearActive, eventUpdated } from '../../../actions/events';
import { uiCloseModal } from '../../../actions/ui';
import { CustomModal } from '../../../components';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');

const later = now.clone().add(1, 'hours');

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: later.toDate()
};


export const CalendarModal = () => {

    const {modalOpen} = useSelector(state => state.ui);

    const {activeEvent} = useSelector(state => state.calendar);

    const dispatch = useDispatch();

    // const [DateStart, setDateStart] = useState(now.toDate());

    // const [DateEnd, setDateEnd] = useState(later.toDate());

    const [titleValid, setTitleValid] = useState(true);

    const [formValues, setFormValues] = useState(initEvent);

    const {notes, title, start, end} = formValues;
    
    const handleInputChange = ({target}) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    const closeModal = () => {
        setFormValues(initEvent);
        dispatch(eventClearActive());
        dispatch(uiCloseModal());
    };

    const afterOpenModal = () => {
        console.log('after open modal');
    };

    const handleStartDateChange = e => {
        // setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        });
    };

    const handleEndDateChange = e => {
        // setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const momentStart = moment(start);
        const momentEnd = moment(end);

        if(momentStart.isSameOrAfter(momentEnd)){
            return Swal.fire('Error', 'La fecha de fin debe ser mayor a la fecha de inicio', 'error');
        }

        if(title.trim().length < 2){
            return setTitleValid(false);
        }


        (activeEvent) ?
            // Actualizar el Evento
            dispatch(eventUpdated(formValues))
        :
            // Agregar un nuevo Evento
            (
                dispatch(eventAddNew({
                    id: new Date().getTime(),
                    ...formValues,
                    user: {
                        _id: '123',
                        name: 'Carlos'
                    }    
                }))
            )
        

        setTitleValid(true);
        closeModal();
    }

    useEffect(() => {
        
        activeEvent ? 
            setFormValues(activeEvent)
        :
            setFormValues(initEvent)

    }, [activeEvent, setFormValues])


    return (
        <CustomModal isOpen={modalOpen} titulo={ activeEvent ? 'Editar Evento' : 'Nuevo Evento'} onClose={closeModal} > 
            <div className='space-y-2'>
                <form className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" onSubmit={handleSubmit}>

                    <div className="mb-4 space-y-2">
                        <label className='font-bold'>Fecha y hora inicio</label>
                        {/* <DateTimePicker
                            onChange={handleStartDateChange}
                            value={start}
                            className="form-control font-bold"
                            
                        /> */}
                        <input 
                            type="datetime-local"
                            name="start"
                            onChange={handleStartDateChange}
                            value={start}
                            className='form-control font-bold'
                        />
                    </div>

                    <div className="mb-4 space-y-2">
                        <label className='font-bold'>Fecha y hora fin</label>
                        {/* <DateTimePicker
                            onChange={handleEndDateChange}
                            value={end}
                            className="form-control font-bold"
                            minDate={start}
                        /> */}
                        <input 
                            type="datetime-local"
                            name="end"
                            id=""
                            onChange={e => handleEndDateChange(e)}
                            value={end}
                            className='form-control font-bold'
                            min={start}
                        />
                    </div>

                    <hr />
                    <div className="mb-4 space-y-2">
                        <label className='font-bold'>Titulo y notas</label>
                        <input
                            type="text"
                            className={`form-control ${ !titleValid && 'is-invalid'} `}
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            value={title}
                            onChange={handleInputChange}
                        />

                    </div>

                    <div className="mb-4 space-y-2">
                        <label className='font-bold'>Una descripción corta</label>
                        <textarea
                            type="text"
                            className="form-control "
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                            value={notes}
                            onChange={handleInputChange}
                        ></textarea>
                        {/* <small id="emailHelp" className="text-sm text-gray-500 font-bold">Información adicional</small> */}
                    </div>

                    <button
                        type="submit"
                        className="bg-paletaAzul3 border border-blue-500 text-white hover:bg-paletaAzul2 hover:text-white font-bold py-2 px-4 rounded-full w-full"
                    >
                        <i className="far fa-save"></i>
                        <span> { activeEvent ? 'Actualizar' : 'Guardar'} </span>
                    </button>

                </form>
            </div>
        </CustomModal>

        // <Modal
        //     isOpen={modalOpen}
        //     onAfterOpen={afterOpenModal}
        //     onRequestClose={closeModal}
        //     style={customStyles}
        //     className="modal"
        //     overlayClassName="modal-fondo"
        //     closeTimeoutMS={200}
        // >
            

        //  </Modal> 
    )
}
