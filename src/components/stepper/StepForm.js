import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import FinalStep from './FinalStep'
// import Confirm from './Confirm'
// import { AppContext } from '../Context'

const labels = ['First Step', 'Second Step', 'Final Step']
const handleStep = (step) => {
    switch (step) {
        case 0:
            return <FirstStep />
        case 1:
            return <SecondStep />
        case 2:
            return (<h2>Confirm</h2>)
        default:
            throw new Error('Unknown step')
    }
}
export default function StepForm() {
    const { activeStep } = useContext()
    return (
        <div>
            <h2>Stepper form</h2>
            {activeStep === labels.length ? (
                <FinalStep />
            ) :
                (
                    <>
                        <Box sx={{ my: 5 }}>
                            <Typography variant="h4" align="center">
                                Multi Step Form
                            </Typography>
                            <Typography variant="subtitle2" align="center" sx={{ mt: 2 }}>
                                React Material UI multi step form with basic form validation
                                logic.
                            </Typography>
                        </Box>
                        <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
                            {labels.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                            ))}
                        </Stepper>
                        {handleStep(activeStep)}
                    </>
                )
            }

        </div>
    )
}
