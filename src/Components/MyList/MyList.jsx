import Book from '../Book/Book';
import classes from './MyList.module.css';

const MyList = ({ data, button, updateIdBook }) => {
  return (
    <section className={classes.section}>
      <h2>My list:</h2>
      {
        data && data.map(book => (
          <Book key={book.id} info={book} button={button} updateIdBook={updateIdBook}/>
        ))
      }
    </section>
  )
}

export default MyList;