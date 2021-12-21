import './App.css';


function Product(props) {
    return (
        <div className='product'>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <input
                type='button'
                value='Show Detail'
                onClick={props.showDetailClicked} />

            <input
                type='button'
                value='Update'
                onClick={props.updateProduct} />
        </div>
    )
}

export default Product