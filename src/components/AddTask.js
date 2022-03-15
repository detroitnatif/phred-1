import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [PH, setPH] = useState('')
    const [Soil, setSoil] = useState('')
    const [Nitrate, setNitrate] = useState('')
    const [Turbidity, setTurbidity] = useState('')
    const [Image, setImage] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, PH, Soil, Nitrate, Turbidity, Image, reminder })

        setText('')
        setDay('')
        setPH('')
        setSoil('')
        setNitrate('')
        setTurbidity('')
        setReminder(false)
        setImage('')

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input
                    type='date'
                    placeholder='What is the Date?'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>PH Level</label>
                <input
                    type='text'
                    placeholder='Add PH'
                    value={PH}
                    onChange={(e) => setPH(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Soil Quality</label>
                <input
                    type='text'
                    placeholder='Add Soil Quality'
                    value={Soil}
                    onChange={(e) => setSoil(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Nitrate Level</label>
                <input
                    type='text'
                    placeholder='Add Nitrate'
                    value={Nitrate}
                    onChange={(e) => setNitrate(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Turbidity</label>
                <input id="#slider"
                    type='range'
                    placeholder='Add Turbidity'
                    value={Turbidity}
                    onChange={(e) => setTurbidity(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <div idclassName='form-control'>
                <label>Image</label>
                <input
                    type='image'
                    placeholder='Add Image'
                    value={Image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
