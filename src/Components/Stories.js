import "../styles/Story/story.css";
import Story from "./Story";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";


export default function Stories(props) {        
    let arr = [1, 2, 3, 4, 5, 6,7, 8,9,10];         // will receive the stories of users
    const {Users} = props;


    // function is not called
    const scroll = (e) => {
    console.log('btn', e.target);        
    }
    
    return (
        <div className="stories-container">

            {Users.map((user) => (
                <Story src={user.img} alt={user.userName} />
            ))}

            {(arr.length >=7) ? <KeyboardArrowRightRoundedIcon className="arrow-left " onclick = {(e) => scroll()}/> :
            (<> </>)
            }
        </div>
    );
}
