import { useState, useEffect } from "react";


function UseEffect() {
    const [width, setWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup function luôn được gọi trước khi component unmounted
        return () => {
            window.removeEventListener('scroll', handleResize)
        }
    }, [])
    
    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}

export default UseEffect

/** ĐÚNG VỚI 3 CASE: callback, callback [], callback [deps]
 * Callback luôn được gọi sau khi component mounted
 * Cleanup function luôn được gọi trước khi component unmounted
*/

/** CASE 3: callback [deps]
 * Callback sẽ được gọi lại mỗi khi deps thay đổi
 */

/** 
 * Khi Listen DOM events chỉ cần addEventListener 1 lần
 * Từ đó, mỗi khi events kích hoạt là nó luôn gọi lại callback
*/

