import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import One from './One';
import Two from './Two';
import Three from './Three';
import { useState } from 'react';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const container = {
    width: '50%',
    border: '2px solid blue',
    margin: '20px 0'
}

const forms = ['Import form one', 'Import Form two', 'Import Form Three']

export default function Mat() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [formFields, setFormFields] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        state: '',
        city: '',
        religion: '',
        occupation: '',
        tribe: ''
    })
    // const [formOneFields, setFormOneFields] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: ''
    // })
    // const [formTwoFields, setFormTwoFields] = useState({
    //     country: '',
    //     state: '',
    //     city: ''
    // })
    // const [formThreeFields, setFormThreeFields] = useState({
    //     religion: '',
    //     occupation: '',
    //     tribe: ''
    // })

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleChange=(event)=>{
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        console.log(formFields)
    }

    const validateForm = (step) => {
        if(step === 0){
            //check required fields
            if(formFields.firstName === '' || formFields.lastName === '' || formFields.email === ''){
                return false
            }else{
                return true
            }
        }else if(step === 1){
            if(formFields.country === '' || formFields.city === '' || formFields.state === ''){
                return false
            }else{
                return true
            }
        }else if(step ===2){
            if(formFields.religion === '' || formFields.occupation === '' || formFields.tribe === ''){
                return false
            }else{
                return true
            }
        }
        
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <One 
                        firstName={formFields.firstName}
                        lastName={formFields.lastName}
                        email={formFields.email}
                        handleChange={handleChange}
                    />
                );
            case 1:
                return (
                    <Two 
                        country={formFields.country}
                        city={formFields.city}
                        state={formFields.state}
                        handleChange={handleChange}
                    />
                );
            case 2:
                return (
                    <Three
                        religion={formFields.religion}
                        occupation={formFields.occupation}
                        tribe={formFields.tribe}
                        handleChange={handleChange}
                    />
                );
            default:
                return 'Unknown step';
        }
    }
    return (
        <div style={container}>
            <Box sx={{ width: '100%' }}>
                {/* <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper> */}
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            {getStepContent(activeStep)}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                                <Typography>Step {activeStep + 1} / {steps.length}</Typography>
                                <Button
                                    onClick={handleNext}
                                    disabled={validateForm(activeStep) === false}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                    </React.Fragment>
                )}
            </Box>
        </div>

    );
}
