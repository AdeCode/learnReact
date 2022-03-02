import React from 'react'
import { Formik, Form, Field, yupToFormErrors, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const LoginSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export default function FormikOne() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1>Formik Sign up form</h1>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                        }}
                        validationSchema={SignUpSchema}
                        onSubmit={values => {
                            console.log(values)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Field
                                    name="firstName"
                                    placeholder='Enter firstname'
                                />
                                {errors.firstName && touched.firstName ? (
                                    <div>{errors.firstName}</div>
                                ) : null}
                                <Field name="lastName" />
                                {errors.lastName && touched.lastName ? (
                                    <div>{errors.lastName}</div>
                                ) : null}
                                <Field name="email" />
                                {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}
                                <button type='submit'>Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='col-md-6'>
                    <h1>Formik Sign up form 2</h1>
                    <div className='row'>
            <div className='col-md-12'>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                console.log(values);
                alert("Form is validated! Submitting the form...");
              }}
            >
              {({ touched, errors, isSubmitting, values }) =>
                !isSubmitting ? (
                  <div>
                    {/* <div className="row mb-5">
                      <div className="col-lg-12 text-center">
                        <h1 className="mt-5">Login Form</h1>
                      </div>
                    </div> */}
                    <Form>
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
  
                      <div className="form-group">
                        <label htmlFor="password" className="mt-3">
                          Password
                        </label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          className={`mt-2 form-control
                          ${
                            touched.password && errors.password
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
  
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-4"
                      >
                        Submit
                      </button>
                    </Form>
                  </div>
                ) : (
                  <div>
                    <h1 className="p-3 mt-5">Form Submitted</h1>
  
                    <div className="alert alert-success mt-3">
                      Thank for your connecting with us. Here's what we got from
                      you !
                    </div>
                    <ul className="list-group">
                      <li className="list-group-item">Email: {values.email}</li>
                      <li className="list-group-item">
                        Password: {values.password}
                      </li>
                    </ul>
                  </div>
                )
              }
            </Formik>

            </div>
        </div>
                </div>

            </div>
        </div>

    )
}
