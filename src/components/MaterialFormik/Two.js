import React from 'react'
import { Field, ErrorMessage, Formik, Form } from 'formik'
import * as Yup from 'yup'

const FormTwoSchema = Yup.object().shape({
    country: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
    city: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
    state: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
})
export default function Two({handleChange, country, state, city}) {
    return (
        <div>
            <Formik
                initialValues={{
                    country: '',
                    state: '',
                    city: '',
                }}
                validationSchema={FormTwoSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Country</label>
                            <Field
                                type="text"
                                name="country"
                                placeholder="Country"
                                autocomplete="off"
                                className={`mt-2 form-control
                                ${touched.country && errors.country ? "is-invalid" : ""}`}
                                onChange={handleChange}
                                value={country}
                            />

                            <ErrorMessage
                                component="div"
                                name="country"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">State</label>
                            <Field
                                type="text"
                                name="state"
                                placeholder="State"
                                autocomplete="off"
                                className={`mt-2 form-control
                                ${touched.state && errors.state ? "is-invalid" : ""}`}
                                onChange={handleChange}
                                value={state}
                            />

                            <ErrorMessage
                                component="div"
                                name="state"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">City</label>
                            <Field
                                type="city"
                                name="city"
                                placeholder="Enter city"
                                autocomplete="off"
                                className={`mt-2 form-control
                                ${touched.city && errors.city ? "is-invalid" : ""}`}
                                onChange={handleChange}
                                value={city}
                            />

                            <ErrorMessage
                                component="div"
                                name="city"
                                className="invalid-feedback"
                            />
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}
