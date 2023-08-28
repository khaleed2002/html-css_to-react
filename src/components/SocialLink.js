const SocialLink = (props) => {
    return (
        <li key={props.id}>
            <a
                href={props.href}
                target="_blank"
                className={props.class}
                rel='noreferrer'
            >
                <i className={props.iconClassname}></i>
            </a>
        </li>
    )
}
export default SocialLink