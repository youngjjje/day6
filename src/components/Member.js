import React from "react"
import {Link} from "react-router-dom"
import bang from "../Image/bang.webp"
import ke from "../Image/ke.webp"
import pil from "../Image/pil.webp"
import don from "../Image/don.webp"
import "../css/Member.css"

const members = [
  { name: "SungJin", img: bang },
  { name: "YoungK", img: ke },
  { name: "WonPil", img: pil },
  { name: "Dowon", img: don }
]

const Member = () => {
    
    return (
        <div className="member-container">
            {members.map((member) => (                
                <Link key={member.name} to={`/member/${member.name}`}>
                    <button className="member-btn">
                        <img src={member.img} alt={member.name} className="member-img"/>
                    </button>
                </Link>
            ))}
        </div>
    )
}

export default Member