import ProgressBar from 'react-bootstrap/ProgressBar'
import './ProgressBarTask.css'

const ProgressBarTask = () => {
    return (
        <div className='progress_bar_container'>
            <div className='rotated_progress_bar'>
                <ProgressBar animated now={50} />
            </div>
        </div>

    )
}

export default ProgressBarTask;