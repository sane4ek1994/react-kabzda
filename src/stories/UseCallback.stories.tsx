import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'UseCallback usage'
}


export const LikesCounterUseCallback = () => {
    console.log('Render likes')
    const [count, setCount] = useState(0);
    const [books, setBooks] = useState<string[]>([
        "The Great Gatsby",
        "To Kill a Mockingbird",
        "1984",
        "Pride and Prejudice"
    ]);


    const incCount = () => {
        setCount(count + 1)
    }


    //кешируем вызов функции c помощью useMemo() если в books изменения обновляем значение в кеше функции
    //🔴 ОБРАТИ ВНИМАНИЕ НА РАБОТУ ССЫЛОК В JS новый callback !== старому callback т.к это обьект)
    const memoizedAddBook = useMemo(() => {
        return () => {
            setBooks([...books, `id: ${String(Date.now()).slice(10, 13)}  React`])
        }
    }, [books])

    // кеширум с помощью useCallback() тоже самое, но меньше кода:)
    const memoizedAddBook2 = useCallback(() => {
        setBooks([...books, `id: ${String(Date.now()).slice(10, 13)}  React`])
    }, [books])

    // 🔴Вот тут новый рендер т.к  новая сслыка на callback
    const addBook = () => setBooks([...books, `id: ${String(Date.now()).slice(10, 13)}  React`])


    const newBooksArr = useMemo(() => {
        return books.filter(book => book.length > 5)
    }, [books])


    return <>
        <button onClick={incCount}>+ {count}</button>
        <Book books={newBooksArr} addBook={memoizedAddBook2}/>
    </>
}


type TAddedBooks = {
    books: string[]
    addBook: (newBook: string) => void
}
export const AddedBooks = ({books, addBook}: TAddedBooks) => {
    console.log('Render Books')
    const callbackAddedBook = () => {
        addBook('React')
    }

    return <>
        <button onClick={callbackAddedBook}>Add new book</button>
        {books.map((book, index) => <div key={index}>{`${index}: ${book}`}</div>)}
    </>
}

const Book = React.memo(AddedBooks)



