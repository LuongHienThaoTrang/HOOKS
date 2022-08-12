
import { useState, useEffect, useLayoutEffect, useRef, memo } from "react";

function ReactMemoHOC({ count }) {
    // Component cha truyền props count bị thay đổi nenen component con nó cũng bị re-render
    console.log('re-render');
    return (
        <div>
            <h2>Hello World {count}</h2>
        </div>
    )
}

export default memo(ReactMemoHOC)

/** Memo HOC: xử lý component tránh bị re-render trong tình huống không cần thiết
 * memo nó giúp ghi nhớ lại những props của component
 * Để quyết định có render lại component đó hay không 
 * Để tối ưu hiệu năng
 * Component nó có thể nhận nhiều props, nếu có 1 props bị thay đổi thì nó sẽ quyết định re-render component con
*/