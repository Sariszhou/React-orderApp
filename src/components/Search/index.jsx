import React from 'react'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './index.module.css'


export default function Search(props) {
    const [keyword, setKeyword] = useState('');
    const onFilter = props.onInputChangeHandler
    useEffect(() => {
        const timer = setTimeout(() => {
            onFilter(keyword)
        }, 1000);
    
        return () => {
            clearTimeout(timer);
        };
    }, [keyword]);
    
    const inputChangeHandler = e=>{
        setKeyword(e.target.value.trim());
    }
    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input onChange={inputChangeHandler} className={classes.SearchInput} type="text" placeholder={"请输入关键字"} />
                <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch}></FontAwesomeIcon>
            </div>
        </div>
    )
}
