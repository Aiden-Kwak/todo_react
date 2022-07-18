function Template(props) {
    return (
        <div>
            <div>오늘의 할일 (0)</div>
            <div>{props.children}</div>
        </div>
    );  
}

export default Template;