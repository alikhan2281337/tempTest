import React, {useState} from 'react';
import classes from "./mainpage.module.css";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import './rem.css'




function MainPage() {
    const [items, setItems] = useState([])
    const [tempText, setTempText] = useState('');
    const booksdiv = document.querySelector('#BooksDiv')
    let id = 0
    const checking = (props) => {
        setTempText(props.target.value)
    }
    const main = {
        cards: 'newDiv'
    }
    const handleRemove = () => {
    }
    const handleAdd = () => {
        if (tempText === ''){
            console.error('error')
        }
        else {
            setItems([...items, tempText])
            id = items.length + 1
            console.log(id)

            const newDivs = document.createElement('div')
            newDivs.classList.add(`${main.cards}`)
            newDivs.innerHTML =`
                <p>${id}.  ${tempText}</p> 
                <button>delete</button>
            `
            const but = newDivs.querySelector('button')
            but.addEventListener('click', handleRemove)
            booksdiv.appendChild(newDivs)
// Нужно решить вопрос как я буду потом удалять осталось только это!
        }
    }

    return (
        <>
            <div className={classes.block}>
                <header className={classes.header}>
                    <h1>Добавить книгу</h1>
                </header>
                <div className={classes.center}>
                    <div id={classes.inputLabel} className={classes.innerBlocks}>
                        <label>
                            Название:
                        </label>
                        <Input onchange = {checking} type = 'text' placeholder = 'Введите название'/>
                    </div>
                    <div className={`${classes.innerBlocks} ${classes.innerRight}`}>
                        <Button onclick= {handleAdd}/>
                    </div>
                </div>
                <br/>

                <footer className={classes.footer}>
                    <label>Название:</label>
                    <div className={classes.addBlocks}>
                        <div id='BooksDiv'>

                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default MainPage;