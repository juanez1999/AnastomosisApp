import React, {useState} from 'react';
import Switch from 'react-ios-switch';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, FormGroup } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export const CreateHomework = ({handleClose}) => {

    const [titleHomework,setTitleHomework] = useState('');
    const [descriptionHomework,setDescriptionHomework] = useState('');
    const [checked, setChecked] = React.useState(false);
    const [date, setDate] = React.useState('');
    const [hour, setHour] = React.useState('');
    const classes = useStyles();
    
    const handleHour = (event) => {
        setHour(event.target.value);
    }

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
    });
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return(
        <div className="newHomework">
            {/* <div className="newHomework__header">
                <div className="newHomework__headerClose" onClick={()=> handleClose()}>
                    <img src={process.env.PUBLIC_URL +'/resources/icon_close.svg'} alt=""/>
                    <Link>Cancelar</Link>
                </div>
                <Link>Publicar</Link>
            </div> */}
            <div className="newHomework__title">
                <h3>Agregar nueva tarea</h3>
                <p>Docente</p>
            </div>
            <div className="newHomework__details">
                <div className="inputField inputField--hasImg" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/icon_edit.svg)`}}>
                    <input type="text" name="" id="" 
                    placeholder="Título"              
                    value={titleHomework}
                    onChange={e => setTitleHomework(e.target.value)}/>
                </div>
                <div className="inputField inputField--hasImg inputField--textarea" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/icon_description.svg)`}}>
                    <textarea type="text" name="" id="" 
                    placeholder="Descripción"              
                    value={descriptionHomework}
                    onChange={e => setDescriptionHomework(e.target.value)}/>
                </div>
            </div>
            <div className="newHomework__delivery">
                <div className="newHomework__deliveryCalendar">
                    <div className="newHomework__deliveryCalendarDate"> 
                        <img src={process.env.PUBLIC_URL+"/resources/icon_calendar.svg"} alt="" />
                        <p>Fecha de entrega</p>
                    </div>
                    <Switch
                            checked={checked}
                            className={"switchCalendar"}
                            handleColor="white"
                            name={undefined}
                            offColor="rgb(156, 162, 173)"
                            onChange={() => {setChecked(!checked)}}
                            onColor="rgba(248, 148, 186, 1)"
                    />
                </div>
                {checked && 
                    (<DayPicker
                        selectedDays={date}
                        showOutsideDays
                        onDayClick={(day)=>setDate(day)}
                        />)
                }
                {checked && 
                    (<TextField
                        id="time"
                        type="time"
                        defaultValue="12:00"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        classes={{
                            root: classes.root,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(event)=>handleHour(event)}
                    />)
                }
            </div>
            <div className="newHomework__unit">
                <Accordion classes={{root: classes.accordionRoot}}>
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    Unidad
                    </AccordionSummary>
                    <AccordionDetails>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="newHomework__unit">
                <Accordion classes={{root: classes.accordionRoot}}>
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    Calificación
                    </AccordionSummary>
                    <AccordionDetails>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="newHomework__evaluation">
                <div className="newHomework__evaluationTitle">
                    <h3>Evaluación</h3>
                    <p>Por favor seleccione los criterios que tendrá en cuenta en la calificación</p>
                </div>
                <div className="newHomework__evaluationOptions">
                    <FormGroup>
                        <FormControlLabel
                            classes={{
                                root: classes.rootLabelCheckbox,
                            }}
                            control={
                            <Checkbox
                                checked={state.checkedA}
                                onChange={handleChange}
                                name="checkedA"
                                color="primary"
                                classes={{
                                    colorPrimary: classes.colorPrimaryCheck,
                                    checked: classes.colorCheckedCheckbox,
                                    root: classes.rootCheckbox
                                }}
                            />
                            }
                            label="Conocimientos teóricos"
                        />
                        <FormControlLabel
                            classes={{
                                root: classes.rootLabelCheckbox,
                            }}
                            control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                                classes={{
                                    colorPrimary: classes.colorPrimaryCheck,
                                    checked: classes.colorCheckedCheckbox,
                                    root: classes.rootCheckbox
                                }}
                            />
                            }
                            label="Parametría"
                        />
                        <FormControlLabel
                            classes={{
                                root: classes.rootLabelCheckbox,
                            }}
                            control={
                            <Checkbox
                                checked={state.checkedC}
                                onChange={handleChange}
                                name="checkedC"
                                color="primary"
                                classes={{
                                    colorPrimary: classes.colorPrimaryCheck,
                                    checked: classes.colorCheckedCheckbox,
                                    root: classes.rootCheckbox
                                }}
                            />
                            }
                            label="Precisión"
                        />
                        <FormControlLabel
                            classes={{
                                root: classes.rootLabelCheckbox,
                            }}
                            control={
                            <Checkbox
                                checked={state.checkedD}
                                onChange={handleChange}
                                name="checkedD"
                                color="primary"
                                classes={{
                                    colorPrimary: classes.colorPrimaryCheck,
                                    checked: classes.colorCheckedCheckbox,
                                    root: classes.rootCheckbox
                                }}
                            />
                            }
                            label="Sutura"
                        />
                        <FormControlLabel
                            classes={{
                                root: classes.rootLabelCheckbox,
                            }}
                            control={
                            <Checkbox
                                checked={state.checkedE}
                                onChange={handleChange}
                                name="checkedE"
                                color="primary"
                                classes={{
                                    colorPrimary: classes.colorPrimaryCheck,
                                    checked: classes.colorCheckedCheckbox,
                                    root: classes.rootCheckbox
                                }}
                            />
                            }
                            label="Calidad del nudo"
                        />
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        root:{
            margin: '20px 0px',
            width: '50%',
        },
        accordionRoot:{
            background: '#DDF6F6',
            borderRadius: '15px',
            boxShadow: 'none',
        },
        colorPrimaryCheck:{
            color: '#51BFBD',
        },
        colorCheckedCheckbox:{
            color: '#51BFBD !important',
        },
        rootLabelCheckbox:{
            margin: '0px',
        },
        rootCheckbox:{
            padding: '5px'
        }
    })
);