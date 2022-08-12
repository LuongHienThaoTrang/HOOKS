import { useState, useEffect } from "react";


function UseEffect() {
    const [avatar, setAvatar] = useState()


    useEffect(() => {
        return () => {
            // Cleanup function luôn được gọi(lần thứ 2) trước khi callback được gọi (trừ lần mounted)
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    
    const handlePreviewAvatar = e => {
        // Lấy ảnh đầu tiên
        const file = e.target.files[0]
        // Gán blob ảnh cho thuộc tính preview
        file.preview = URL.createObjectURL(file)
        // setState avatar
        setAvatar(file)
        e.target.value = null
        console.log(123)
    }

    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img 
                    src={avatar.preview}
                    width="70%"
                    alt=""
                />
            )}
        </div>
    )
}

export default UseEffect

/** ĐÚNG VỚI 3 CASE: callback, callback [], callback [deps]
 * Callback luôn được gọi sau khi component mounted
 * Cleanup function luôn được gọi trước khi component unmounted
 * Cleanup function luôn được gọi(lần thứ 2) trước khi callback được gọi (trừ lần mounted)
*/

/** CASE 3: callback [deps]
 * Callback sẽ được gọi lại mỗi khi deps thay đổi
 */

/** 
 * Khi Listen DOM events chỉ cần addEventListener 1 lần
 * Từ đó, mỗi khi events kích hoạt là nó luôn gọi lại callback
*/

