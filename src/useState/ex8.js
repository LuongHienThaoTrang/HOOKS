import { useState } from "react";

const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'JavaScript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]

function UseState() {
    const [checked, setChecked] = useState([])

    console.log(checked);

    const handleCheck = id => {
        setChecked(prev => {
            // Mảng checked 
            const isChecked = checked.includes(id)
            if (isChecked) {
                // unChecked: checked là array ta check
                return checked.filter(item  => item !== id) 
            } else {
                // checked
                return [...prev, id]
            }
        })
    }

    const handleSubmit = () => {
        console.log({ ids: checked });
    }
    
    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <input 
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default UseState