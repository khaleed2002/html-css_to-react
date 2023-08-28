const Title = (props) => {
    const title = props.title.split(" ");
    return (
        <div className="section-title">
            <h2>
                {title[0]} <span>{title[1]}</span>
            </h2>
        </div>
    )
}
export default Title