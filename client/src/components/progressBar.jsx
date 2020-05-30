import React from 'react'

const ProgressBar = ({ percentage, display, fileName }) => {
  return (
    <div style={{ display }}>
      <div className="form__progress-bar">Uploading: {fileName}</div>
      <div className="progress">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
