import '../../styles/Tags.css'

function Tags(props) {
  const {tag} = props

  return (
    <div className='tag'>
      <p>{tag}</p>
    </div>
  );
}

export default Tags;
