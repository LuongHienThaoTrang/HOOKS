import { useState } from "react";


function UseState() {
    const [name, setName] = useState('')

    // One-way bìnding: Khi ta gõ vào input, mà trong component có state mà state thay đổi giá trị tương ứng với người dùng nhập
    console.log(name);

    return (
        <div>
            <input 
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <button onClick={e => setName('Nguyen Van BBB')}>Change</button>
        </div>
    )
}

export default UseState