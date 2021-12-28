import "../styles/Nav/nav.css";
import home from "../icons/home-svgrepo-com.svg";
import explore from "../icons/explore-svgrepo-com.svg";
import add from "../icons/add-svgrepo-com.svg";
import message from "../icons/icons8-facebook-messenger.svg";
import notification from "../icons/heart-svgrepo-com.svg";
export default function Nav() {
    return (
        <>
            <div className="nav">
                <div className = 'nav--brand'>
                    <label>Instagram </label>
                </div>
                <div className = 'nav--search'>
                    <input   type="search" placeholder="  search" />
                </div>
                <div className="nav--icons">
                    <img src={home} alt="home" />
                    <img src={message} alt="message" />
                    <img src={add} alt="new post" />
                    <img src={explore} alt="explore" />
                    <img src={notification} alt="notification" />
                </div>
            </div>
        </>
    );
}
