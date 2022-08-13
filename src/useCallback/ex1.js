
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback } from "react";

function UseCallback({ onIncrease }) {

    console.log('render')

    return (
        <div>
            <h1>Hello world!</h1>
            <button onClick={onIncrease}>Click me!</button>
        </div>
    )
}

export default memo(UseCallback)

/** useCallback: Giúp tránh tạo ra những hàm mới một cách không cần thiết trong function component
 * Nếu xác định sử dụng react memo -> dể tránh component con bị re-render trong tình huống không cần thiết
 * Thì những hàm handle function nên sử dụng useCallback -> để tránh bị re-render trong tình huống không cần thiết 
 * => Nếu không sử dụng react memo HOC cho component con, thì ta không nên bao giờ sử dụng useCallback cho component cha
*/