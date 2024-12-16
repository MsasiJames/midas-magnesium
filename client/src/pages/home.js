import React, { useEffect, useState } from 'react'

function Home() {

    const [data, setData] = useState("");

    useEffect(() => {
        fetch('http://127.0.0.1:8080/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((data) => {
            console.log(data);
            setData(data.message);
        })
        .catch((error) => {
            console.log('Error:', error);
        })
    }, []);
  return (
    <div>Midas Magnesium website testing connection with backend: {data}</div>
  )
}

export default Home