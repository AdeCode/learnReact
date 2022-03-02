import React from 'react'
import MaterialForm from '../MaterialForm'
import GeekStepper from './Step'
import Mat from '../MaterialFormik/Mat'
import NewForm from '../MaterialFormik/NewForm'

export default function Material() {
  return (
    <div>
        Material
        <Mat/>
        <NewForm/>
        <MaterialForm/>
        <GeekStepper/>
    </div>
  )
}
