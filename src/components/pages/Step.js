import React from 'react';
import { makeStyles, createStyles, ThemeProvider }
		from '@mui/styles';
import { createTheme } from '@mui/material/styles';
        // import { ThemeProvider } from '@mui/material/styles'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
// import Typography from '@material-ui/core/Typography';
import Typography from '@mui/material/Typography'
import { orange } from '@mui/material/colors';


const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });

// const useStyles = makeStyles((theme) =>
// createStyles({
// 	root: {
// 	width: '100%',
// 	},
// 	button: {
// 	marginTop: theme.spacing(1),
// 	marginRight: theme.spacing(1),
// 	},
// 	actionsContainer: {
// 	marginBottom: theme.spacing(2),
// 	},
// 	resetContainer: {
// 	padding: theme.spacing(3),
// 	},
	
// }),
// );

function getSteps() {
return [<b style={{color:'purple'}}>'Enter Personal Details'</b>,
<b style={{color:'purple'}}>'Enter Education Details'</b>,
<b style={{color:'purple'}}>'Enter Address'</b>];
}

function getStepContent(step) {
switch (step) {
	case 0:
	return (
		<form class="form-group">
		<label>First Name</label>
		<input type="text" placeholder="First Name"></input>
		<br></br>
		<label>Last Name</label>
		<input type="text" placeholder="Last Name"></input>
		</form>
	);
	case 1:
	return (
		<form class="form-group">
		<label>High School Percentage</label>
		<input type="number" placeholder="High School Percentage"></input>
		<br></br>
		<label>Graduation percentage</label>
		<input type="number" placeholder="Graduation Percentage"></input>
		</form>
	);
	case 2:
	return (
		<form class="form-group">
		<label>Permanent Address</label>
		<input type="text" placeholder="Permanent Address"></input>
		<br></br>
		<label>Temporary Address</label>
		<input type="text" placeholder="Temporary Address"></input>
		</form>
	);
	default:
	return 'Unknown step';
}
}

export default function GeekStepper() {
// const classes = useStyles();
const [activeStep, setActiveStep] = React.useState(0);
const steps = getSteps();

const handleNext = () => {
	setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const handleBack = () => {
	setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

const handleReset = () => {
	setActiveStep(0);
};

return (
    <ThemeProvider theme={theme}>
	<div>
	<h1>GeeksforGeeks Stepper Form</h1>
	<div style={{ width: '50%' }}>
	<Stepper activeStep={activeStep} orientation="horizontal">
		{steps.map((label, index) => (
		<Step key={label}>
			{/* <StepLabel>{label}</StepLabel> */}
			<StepContent>
			<Typography>{getStepContent(index)}</Typography>
			<div>
				<div>
				<Button
					disabled={activeStep === 0}
					onClick={handleBack}
					
				>
					Back
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={handleNext}
					
				>
					{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
				</Button>
				</div>
			</div>
			</StepContent>
		</Step>
		))}
	</Stepper>
	</div>
	
	{activeStep === steps.length && (
		<Paper square elevation={0} >
		<Typography>Form is submitted</Typography>
		<Button onClick={handleReset}>
			Reset
		</Button>
		</Paper>
        
	)}
	</div>
    </ThemeProvider>
);
}
