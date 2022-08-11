import { useState, useEffect } from "react";

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

function UseEffect() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [type])
    
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
        </div>
    )
}

export default UseEffect

/** ĐÚNG VỚI 3 CASE: callback, callback [], callback [deps]
 * Callback luôn được gọi sau khi component mounted
*/

/** CASE 3: callback [deps]
 * Callback sẽ được gọi lại mỗi khi deps thay đổi
 */

