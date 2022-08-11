import { useState, useEffect } from "react";

function UseEffect() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [])
    
    return (
        <div>
            
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseEffect

/** ĐÚNG VỚI 3 CASE: callback, callback [], callback [deps]
 * Callback luôn được gọi sau khi component mounted
*/

/** CASE 2: callback []
 * Chỉ gọi callback 1 lần sau khi component mounted
 */

