import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useCallBack/useCallBack'
}

export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])


    const memoIzedBooks2 = useCallback(()=>{
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    },[books])

    // const addBook = () => {
    //
    // }

    // const memoIzedBooks = useMemo(()=>{
    //     return addBook
    // },[books])

    return <>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoIzedBooks2}/>
    </>
}

type BooksType = {
    addBook: () => void
}

const BooksSecret = (props: BooksType) => {
    console.log('BookSecret')
    return <div>
        <button onClick={()=>props.addBook()}>add book</button>
    </div>
}
const Book = React.memo(BooksSecret)