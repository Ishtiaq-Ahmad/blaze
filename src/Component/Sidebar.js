import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {setProducts} from '../redux/actions/ActionData'


const Sidebar = () => {
    const products = useSelector(state => state.allProducts)
    const dispatch = useDispatch()
    const {name} = products;
    const [data, setData] = useState([name])
   
    const handleClick =() =>{
           dispatch(setProducts( setData('ishtiaq ahmad')))
    }
    return (
        <div>
        <h1>{data}</h1>
            <button onClick={handleClick}>hello button</button>
        </div>
    )
}

export default Sidebar
