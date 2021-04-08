import {useEffect, useState} from "react";
import {trackPromise} from "react-promise-tracker";

export function withData(WrappedPage, getData, createData) {
    return function(props) {
        const [items, setItems] = useState([]);

        useEffect(() => {
            trackPromise(
                getData()
                    .then((result) => {
                        if (result.success) {
                            setItems(result.data);
                        }
                    }).catch((error)=>{
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log(error.request);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('Error', error.message);
                        }
                    })
            );
        }, []);

        function addItem(newItem) {
            let newItems = [...items];
            newItems.push(newItem);
            setItems(newItems);
        }

        return <WrappedPage items={items} createData={createData} addItem={addItem} {...props}/>
    }
}