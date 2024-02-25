// StepBar.js
import { FC } from 'react'
import './step.css'

type StepProps = {
  step: number
  label: string
  active: boolean
}

type StepBarProps = {
  steps: { label: string }[]
  currentStep: number
}

const Step: FC<StepProps> = ({ label, active }) => {
  return (
    <div className={`flex flex-col items-center ${active ? 'active' : ''}`}>
      <div></div>
      <div className="step-marker w-20px h-20px rounded-1/2 bg-#ccc flex items-center justify-center mb-5px"></div>
      <div className="step-info">{label}</div>
    </div>
  )
}

const StepBar: FC<StepBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      {steps.map((step, index) => (
        <Step key={index} step={index + 1} label={step.label} active={index < currentStep} />
      ))}
    </div>
  )
}

export default StepBar
