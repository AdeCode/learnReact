import React from 'react' 
import {useState} from 'react'
import Typography from '@mui/material/Typography'
import { Card, CardContent } from '@mui/material'
import { Formik, Form, Field, yupToFormErrors, ErrorMessage, FormikConfig, FormikValues } from 'formik'
import 'bootstrap/dist/css/bootstrap.css'
import * as Yup from 'yup'


const container = {
    width: '50%',
    border: '2px solid blue',
    margin: '20px 0'
}

const RegisterSchema = Yup.object().shape({
    email: Yup.string()
        // Format Validation
        .email("Invalid email address format")
        // Required Field Validation
        .required("Email is required"),

    password: Yup.string()
        //Minimum Character Validation
        .min(6, "Password must be 6 characters at minimum")
        .required("Password is required"),
    address: Yup.string()
        //Minimum Character Validation
        .min(10, "address must be 10 characters at minimum")
        .required("Address is required"),
    firstName: Yup.string()
        //Minimum Character Validation
        .min(3, "first name must be 3 characters at minimum")
        .required("first name is required"),
    lastName: Yup.string()
        //Minimum Character Validation
        .min(3, "last name must be 3 characters at minimum")
        .required("last name is required"),
    phoneNumber: Yup.string()
        //Minimum Character Validation
        .min(3, "phoneNumber must be 3 characters at minimum")
        .required("phoneNumber is required"),
});
export default function NewForm() {
    return (
        <div style={container}>
            <h2>Formik and Material UI Form</h2>
            <Card>
                <CardContent>
                    <Typography>Form Here</Typography>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            password: "",
                            email: "",
                            address: "",
                            phoneNumber: "",
                        }}
                        validationSchema={RegisterSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ touched, errors, isSubmitting, values }) =>
                            <div>
                                <div className="row mb-5">
                                    <div className="col-lg-12 text-center">
                                        <h1 className="mt-5">Login Form</h1>
                                    </div>
                                </div>
                                <Form>
                                    <div>
                                        <div className="form-group">
                                            <label htmlFor="email">First Name</label>
                                            <Field
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                autocomplete="off"
                                                className={`mt-2 form-control
                                                ${touched.firstName && errors.firstName ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="firstName"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Last Name</label>
                                            <Field
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                autocomplete="off"
                                                className={`mt-2 form-control
                                                ${touched.lastName && errors.lastName ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="lastName"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Field
                                                type="email"
                                                name="email"
                                                placeholder="Enter email"
                                                autocomplete="off"
                                                className={`mt-2 form-control
                                                ${touched.email && errors.email ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="email"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="mt-3">
                                                Password
                                            </label>
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder="Enter password"
                                                className={`mt-2 form-control ${touched.password && errors.password
                                                    ? "is-invalid"
                                                    : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="password"
                                                className="invalid-feedback"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="mt-3">
                                                Address
                                            </label>
                                            <Field
                                                type="text"
                                                name="address"
                                                placeholder="Enter Address"
                                                className={`mt-2 form-control ${touched.address && errors.address
                                                    ? "is-invalid"
                                                    : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="address"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>


                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block mt-4"
                                    >
                                        Submit
                                    </button>
                                </Form>
                            </div>                           
                        }
                    </Formik>
                </CardContent>
            </Card>
        </div>
    )
}

// export function Stepper({children, ...props}:FormikConfig<FormikValues>){
//     const childrenArray = React.Children.toArray(children)
//     const [step, setStep] = useState(0)
//     const currentChild = childrenArray[step]

//     return (
//         <Formik {...props}>            
//             <Form autoComplete='off'>{currentChild}</Form>
//         </Formik>
//     )
// }