import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Data() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/DomenicoCentrone/DomenicoCentrone/main/datatest.json')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    })
    
    return (
    <div><ul>xadawda</ul></div>
  )
}

export default Data