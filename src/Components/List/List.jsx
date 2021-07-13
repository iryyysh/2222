import Book from '../Book/Book';
import classes from './List.module.css';

const List = ({ data, updateMyBooks, button }) => {
  return (
    <section className={classes.section}>
      <h2>Search result:</h2>
      {
        data && data.map(book => (
          <Book key={book.id} info={book} updateMyBooks={updateMyBooks}  button={button}/>
        ))
      }
    </section>
  )
}

export default List;