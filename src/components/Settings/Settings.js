import React from 'react'
import PromptModal from '../UI/Modal'
import SettingsForm from './SettingsForm'

const Settings = (props) => {
  return (
    <PromptModal onClose={() => {props.onClose()}}>
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-2xl">Settings</h1>
        <SettingsForm onClose={props.onClose}/>
      </div>
    </PromptModal>
  )
}

export default Settings