import { useState } from "react";


function UseState() {
    const [name, setName] = useState('')

    // Two-way bìnding: Khi ta gõ vào input, mà trong component có state mà state thay đổi giá trị tương ứng với người dùng nhập
    // Và UI thay đổi theo
    console.log(name);

    return (
        <div>
            <input 
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <button onClick={e => setName('Nguyen Van BBB')}>Change</button>
        </div>
    )
}

export default UseState