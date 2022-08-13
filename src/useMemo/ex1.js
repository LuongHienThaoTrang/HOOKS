
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo } from "react";

function UseMemo() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState(() => {
        const productsStorage = JSON.parse(localStorage.getItem('products'))
        console.log(productsStorage);
        return productsStorage ?? []
    })
    const nameRef = useRef()

    const handleSubmit = () => {
        if (name !== '' && price !== '') {
            setProducts(prev => {
                const newProducts = [...prev, {
                    name,
                    price: Number(price),
                }]

                // Lưu localStorage
                localStorage.setItem('products', JSON.stringify(newProducts))

                return newProducts
            })
            setName('')
            setPrice('')
            nameRef.current.focus()
        }
    }

    const handleDelete = index => {
        products.splice(index, 1)
        const newProducts = [...products]

        // Lưu localStorage
        localStorage.setItem('products', JSON.stringify(newProducts))

        setProducts(newProducts)
    }


    const total = useMemo(() => {
        const total = products.reduce((total, product) => {
            // Lần 1: In ra 1 lần Tính toán lại => In ra 1
            // Lần 2: Do mảng products có 2 phần tửu nền in ra 2 => 3
            console.log('Tính toán lại ...');
            const result = total + product.price
            return result
        }, 0)
        return total
    }, [products])

    return (
        <div>
            <input 
                ref={nameRef}
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            /><br />
            <input 
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            /><br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                        <span onClick={() => handleDelete(index)} style={{ marginLeft: 10 }}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseMemo

/** 
 * useMemo: nó giúp tránh thực hiện lại 1 logic nào đó không cần thiết
 * useCallback: nó trả về tham chiếu của function, chứ không trả về giá trị được return + khi có memo mới dùng useCallback
 * useMemo: nó return giá trị được tính toán
 * useEffect: nó return cleanup function
*/
