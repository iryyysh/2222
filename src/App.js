import Search from "./Components/Search/Search"
import List from './Components/List/List';
import MyList from './Components/MyList/MyList';
import classes from './App.module.css';
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [myBooks, setMyBooks] = useState([]);
  const [idBook, setIdBook] = useState();

  const updateData = (value) => {
    setBooks(value);
  }

  const updateMyBooks = (value) => {
    setMyBooks([...myBooks, value]);
  }

  const updateIdBook = (value) => {
    setIdBook(value);
    removeBook();
  }

  const removeBook = () => {
    const newMyBooks = myBooks.filter(item => item.id !== idBook);

    setMyBooks(newMyBooks);
  }

  return (
    <div>
      <Search updateData={updateData}/>
      <div className={classes.appContainer}>
        <List data={books} updateMyBooks={updateMyBooks} button='Add'/>
        <MyList data={myBooks} button='Remove (double click)' updateIdBook={updateIdBook}/>
      </div>
      
    </div>
  );
}

export default App;
