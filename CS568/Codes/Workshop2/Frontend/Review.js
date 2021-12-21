import './App.css';

function Review (props){
        return (
            <div className='review'>
                <p>{props.title}</p>
                <p>{props.description}</p>
            </div>
        )
}

export default Review