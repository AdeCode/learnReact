import React from 'react'
import { Field, ErrorMessage, Formik, Form } from 'formik'
import * as Yup from 'yup'

const FormTwoSchema = Yup.object().shape({
    occupation: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
    religion: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
    tribe: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
})
export default function Three({handleChange,occupation,tribe,religion}) {
    return (
        <div>
            <Formik
                initialValues={{
                    occupation: '',
                    religion: '',
                    tribe: '',
                }}
                validationSchema={FormTwoSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Occupation</label>
                            <Field
                                type="text"
                                name="occupation"
                                placeholder="occupation"
                                autocomplete="off"
                                className={`mt-2 form-control
                                ${touched.occupation && errors.occupation ? "is-invalid" : ""}`}
                                onChange={handleChange}
                                value={occupation}
                            />

                            <ErrorMessage
                                component="div"
                                name="occupation"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Religion</label>
                            <Field
                                type="text"
                                name="religion"
                                placeholder="religion"
                                autocomplete="off"
                                className={`mt-2 form-control
                                ${touched.religion && errors.religion ? "is-invalid" : ""}`}
                                onChange={handleChange}
                                value={religion}
                            />

                            <ErrorMessage
                                component="div"
                                name="religion"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Tribe</label>
                            <Field
                                type="text"
                                name="tribe"
                                placeholder="Enter tribe"
                                autocomplete="off"
                                className={`mt-2 form-control
                                ${touched.tribe && errors.tribe ? "is-invalid" : ""}`}
                                onChange={handleChange}
                                value={tribe}
                            />

                            <ErrorMessage
                                component="div"
                                name="tribe"
                                className="invalid-feedback"
                            />
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}
