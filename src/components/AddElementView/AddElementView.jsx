import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { CreateHomework } from '../CreateHomework/CreateHomework';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { makeStyles, createStyles } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const root = document.querySelector("#root");

export const AddElementView = () => {
    const [open, setOpen] = React.useState(false);
    const [openUnit, setOpenUnit] = React.useState(false);

    const classes = useStyles();

    const handleClickOpenHomework = () => {
        setOpen(true);
    };
    const handleClickOpenUnit = () => {
        setOpenUnit(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseUnit = () => {
        setOpenUnit(false);
    };

    return(
        <Fragment>
            <div className="addElement outer-pad">
                <div className="addElement__header">
                    <p>+</p>
                    <h3>Agregar elemento del curso</h3>
                </div>
                <div className="addElement__options">
                    <Link className="addElement__optionsItem" onClick={()=>handleClickOpenHomework()}>
                        <img src={process.env.PUBLIC_URL+'/resources/icon_homework.svg'} alt=""/>
                        <p>Tarea</p>
                    </Link>
                    <Link className="addElement__optionsItem" onClick={()=>handleClickOpenUnit()}>
                        <img src={process.env.PUBLIC_URL+'/resources/icon_folder.svg'} alt=""/>
                        <p>Unidad</p>
                    </Link>
                    <Link className="addElement__optionsItem">
                        <img src={process.env.PUBLIC_URL+'/resources/icon_camera.svg'} alt=""/>
                        <p>Contenido</p>
                    </Link>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                className="createHomeworkPortal"
                scroll={"paper"}
                classes={{
                    scrollPaper: classes.scrollPaper,
                    paperScrollPaper: classes.paperScrollPaper,
                }}
                TransitionComponent={Transition}
            >
            <DialogTitle id="alert-dialog-title" classes={{root: classes.rootDialogTitle}}>
                <div className="newHomework__header">
                    <div className="newHomework__headerClose" onClick={()=> handleClose()}>
                        <img src={process.env.PUBLIC_URL +'/resources/icon_close.svg'} alt=""/>
                        <Link>Cancelar</Link>
                    </div>
                    <Link>Publicar</Link>
                </div>
            </DialogTitle>
                <DialogContent classes={{root: classes.rootDialogContent}}>
                    <CreateHomework handleClose={handleClose}/>
                </DialogContent>
            </Dialog>
            {/* <CreateHomeworkDialog open={open} onClose={handleClose}/> */}
            <Dialog
                open={openUnit}
                onClose={handleCloseUnit}
                className="createHomeworkPortal"
                scroll={"paper"}
                classes={{
                    scrollPaper: classes.scrollPaper,
                    paperScrollPaper: classes.paperScrollPaper,
                }}
                TransitionComponent={Transition}
            >
            <DialogTitle id="alert-dialog-title" classes={{root: classes.rootDialogTitle}}>
                <div className="newHomework__header">
                    <div className="newHomework__headerClose" onClick={()=> handleCloseUnit()}>
                        <img src={process.env.PUBLIC_URL +'/resources/icon_close.svg'} alt=""/>
                        <Link>Cancelar</Link>
                    </div>
                    <Link>Publicar</Link>
                </div>
            </DialogTitle>
                <DialogContent classes={{root: classes.rootDialogContent}}>
                    <CreateHomework/>
                </DialogContent>
            </Dialog>
        </Fragment>
    )
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(() =>
    createStyles({
        paperScrollPaper: {
            maxHeight: 'calc(100% - 32px)',
            height: '100%',
            borderRadius: '15px 15px 0px 0px',
        },
        scrollPaper:{
            alignItems: 'flex-end',
        },
        rootDialogTitle:{
            padding: '25px',
        },
        rootDialogContent:{
            padding: '0px 25px 25px 25px',
        }
    })
);