
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer, createContext, useContext, useImperativeHandle, forwardRef } from "react"
import video1 from './videos/video-1.mp4'

function UseImperativeHandle(props, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video 
            ref={videoRef}
            src={video1}
            width="280px"
        />
    )
}

export default forwardRef(UseImperativeHandle)

/**
 * useImperativeHandle: giúp ta có thể tùy chỉnh được ref của 1 function component
 * **Cách để lấy ref của component cha truyền xuống cho component con
 * -> Function component mặc định là không có ref
 * -> Để giải quyết: ta dùng HOC forwardRef để truyền ref từ component này sang component khác
 * Nó sẽ nhận props ref làm đối số thứ 2 của component
 */