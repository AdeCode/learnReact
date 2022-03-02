import React from 'react'
import { Field, ErrorMessage, Formik, Form } from 'formik'
import * as Yup from 'yup'

const FormOneSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
})
export default function One({firstName, lastName, email,handleChange}) {
    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                validationSchema={FormOneSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">First Name</label>
                            <Field
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                autocomplete="off"
                                className={`mt-2 form-control
                                ${touched.firstName && errors.firstName ? "is-invalid" : ""}`}
                                value={firstName}
                                onChange={handleChange}
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
                                value={lastName}
                                onChange={handleChange}
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
                                value={email}
                                onChange={handleChange}
                            />

                            <ErrorMessage
                                component="div"
                                name="email"
                                className="invalid-feedback"
                            />
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}
