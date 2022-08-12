import { useState, useEffect } from "react";

const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReactJS?'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

function UseEffect() {
    const [lessonId, setLessonId] = useState(2)

    useEffect(() => {

        const handleComment = ({ detail }) => {
            console.log(detail);
        }

        // File index.js: có function emitComment có dispatchEvent 2s tự phát 1 event
        window.addEventListener(`lesson-${lessonId}`, handleComment)

        // Cleanup function luôn được gọi(lần thứ 2) trước khi callback được gọi (trừ lần mounted)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }

    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li 
                        key={lesson.id}
                        style={lessonId === lesson.id ? {
                                color: 'red'    
                            } : {}}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
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

