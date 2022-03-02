import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
export default function MaterialForm() {
    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        address:''
    })
    const handleChange=(event)=>{
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        console.log(formFields)
    }
    return (
        <div>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <h2>Material Form</h2>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                        <div className='form-group'>
                            <TextField 
                                required
                                id="outlined-basic" 
                                label="Name" 
                                variant="outlined" 
                                error
                                id="filled-error-helper-text"
                                margin="normal" 
                                onChange={handleChange}
                                value={formFields.name}
                                name='name'
                                // helperText="Incorrect entry."
                            />
                        </div>
                        <div></div>
                        <TextField 
                            required
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined" 
                            margin="normal"    
                            onChange={handleChange}
                            value={formFields.email}
                            name='email'
                        />
                        <TextField 
                            required
                            id="outlined-basic" 
                            label="Address" 
                            variant="outlined" 
                            error
                            margin="normal" 
                            fullWidth 
                            onChange={handleChange}
                            value={formFields.address}
                            name='address'
                        />
                </Box>
            </div>
            <div className='col-md-3'></div>

        </div>
    )
}
