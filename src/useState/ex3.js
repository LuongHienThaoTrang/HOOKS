import { useState } from "react";

function UseState() {
    const [info, setInfo] = useState({
        name: 'Lương Trang',
        age: 22,
        address: 'Long An'
    })

    const handleChange = () => {
        setInfo(prev => ({ 
          ...prev,
          bio: 'Yêu màu hồng, ghét sự giả dối kkkk'
        }))
    }

    return (
        <div>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleChange}>Update</button>
        </div>
    )
}

export default UseState