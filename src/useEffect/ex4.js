import { useState, useEffect } from "react";

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

function UseEffect() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                // show
                setShowGoToTop(true)
            } else {
                // hide
                setShowGoToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        // Cleanup function luôn được gọi trước khi component unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    return (
        <div>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title || post.name} 
                    </li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px'
                    }}
                >
                    Go to Top
                </button>
            )}
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

