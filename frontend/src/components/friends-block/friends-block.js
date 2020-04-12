import React,{Component} from 'react'
import './friends-block.css'
export default class FriendsBlock extends Component {
    render(){
        return <div className="friends-block">
            <input type="text" placeHolder="Форма для поиска друзей" />
            <button> Поиск</button>
            <ul>
                <li>
                    Влад
                </li>
                <li>
                    Валик
                </li>
                <li>
                    Максим
                </li>
                <li>
                    Женя
                </li>

            </ul>
        </div>
    }
}

