import React, { useState } from "react";
import { useRef, useEffect } from "react";
import {rawQuotes$} from "../observe";
import {  fromEvent } from "rxjs";


const Gallery = () =>{
    // we need to use useRef for the button click. we subscribe to the button click event
    const buttonRef = useRef(null)
    const [list, setList] = useState([])
    const [current, setCurrent] = useState('')
    // basic.subscribe(value => console.log(value))
    // const event = fromEvent(button, 'click')
    // event.subscribe(value => console.log(value))
    useEffect( () => {

        const clicks$ = fromEvent(buttonRef.current, 'click')
        // subscribe on click event
        clicks$.subscribe( click => {
            // getting the quotes by subscribing and setting state with it
           const sub = rawQuotes$.subscribe(setList)
        })

        // display()

        return () => {
            sub.unsubscribe()
        }
    }, [buttonRef]);
    
    // function display(){
    //     let i = 0
    //     const currentQuote = list.filter(listItem => listItem.id == i)

    //     setCurrent(currentQuote)
    //     i++

    // }

    return (
        <div>
            <div>
                {list.map(listItem => {
                    return <p> {listItem.quote} </p>
                })}
                {/* {current} */}
                <div className="buttons">
                    <button ref={buttonRef} >Left</button>
                    <button ref={buttonRef} >Right</button>
                </div>
            </div>
        </div>
    )
}

export default Gallery