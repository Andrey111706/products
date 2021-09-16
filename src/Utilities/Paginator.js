import React from "react";
import s from "./../components/Users/Users.module.css";

const Paginator = (props) => {
    let lastPage = Math.ceil(props.totalUsersCount / props.pageSize)
    let usersKit = [];
    for (let i = props.currentPage - 5; i <= props.currentPage + 5; i++) {
        if (i >= 1 && i <= lastPage) {
            usersKit.push(i)
        }
    }
    return (
        <div>
            {props.currentPage >= 7 ? <div className={s.paginatorPage}
                                           onClick={() => props.PageOnchange(1)}>F</div> : null
            }

            {usersKit.map(p => {
                return <div className={`${s.paginatorPage}  ${(props.currentPage === p && s.selectedPage) || ''}`}
                            key={p}
                            onClick={() => props.PageOnchange(p)}>{p}</div>
            })}

            {props.currentPage < lastPage - 5 ?
                <div className={s.paginatorPage} onClick={() => props.PageOnchange(lastPage)}>L</div> : null}
        </div>
    )
}
export default Paginator;