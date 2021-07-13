import classes from './Book.module.css';

const Book = ({ info, updateMyBooks, updateIdBook, button }) => {

  const handleAdd = () => {
    updateMyBooks(info);
  }

  const handleRemove = () => {
    updateIdBook(info.id);
  }

  return (
    <div className={classes.card}>
        <h2>{info.volumeInfo.title}</h2>
        <h4>{info.volumeInfo.categories}</h4>

        <div className={classes.card__middlePart}>
            <img src={info.volumeInfo.imageLinks.smallThumbnail} alt="" width="150px" height="200px"/>
            <p>{info.volumeInfo.description}</p>
        </div>

        <div className={classes.card__bottomPart}>
            <p>{info.volumeInfo.publishedDate}</p>
            <p>{info.volumeInfo.authors}</p>
            {
              button === 'Add' && <button onClick={handleAdd}>{button}</button>
            }
            {
              button === 'Remove (double click)' && <button onClick={handleRemove}>{button}</button>
            }
        </div>
        
    </div>
  )
}

export default Book;