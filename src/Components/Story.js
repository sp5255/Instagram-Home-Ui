
export default function story(props){
    const src = props.src;
    const alt = props.alt;
    return (        
        <div className = 'main'>
            <div className ='external-circle'>
                <div className = "internal-circle">
                    <img src = {src} alt = {alt}></img>
                </div>
            </div>
        </div>
    )
}