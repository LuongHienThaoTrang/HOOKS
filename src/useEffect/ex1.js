import { useState, useEffect } from "react";

function UseEffect() {
    const [title, setTitle] = useState('')

    useEffect(() => {
        document.title = title
        // 3
        console.log('Mounted');
    })
    // 1
    console.log('Re-render');
    return (
        <div>
            {/* 2 */}
            {console.log('Render')}
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
    )
}

export default UseEffect

/** ĐÚNG VỚI 3 CASE: callback, callback [], callback [deps]
 * Callback luôn được gọi sau khi component mounted
*/

/** CASE 1: callback
 * Gọi callback mỗi khi component re-render
 * Gọi callback sau khi component thêm element vào DOM
 */

