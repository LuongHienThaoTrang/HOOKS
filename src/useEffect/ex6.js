import { useState, useEffect } from "react";


function UseEffect() {
    const [countdown, setCountdown] = useState(180)
    
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1)
            console.log('countdown', countdown);
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [])
    

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default UseEffect

/** ĐÚNG VỚI 3 CASE: callback, callback [], callback [deps]
 * Callback luôn được gọi sau khi component mounted
 * Cleanup function luôn được gọi trước khi component unmounted
 * Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
*/

/** CASE 3: callback [deps]
 * Callback sẽ được gọi lại mỗi khi deps thay đổi
 */

/** 
 * Khi Listen DOM events chỉ cần addEventListener 1 lần
 * Từ đó, mỗi khi events kích hoạt là nó luôn gọi lại callback
*/

