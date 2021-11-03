

export default function PostInput(props) {
    const [postTitle, setPostTitle] = useState('');
    const [postText, setPostText] = useState('');

    const postTitleHandler = () => {

    };

    const postTextHandler = () => {

    };

    const submitPostHandler = (event) => {
        event.preventDefault();


    };

    return (
        <div>
            <form onSubmit={submitPostHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" value={postTitle} onChange={postTitleHandler} />
                </div>
                <div>
                    <label>Title</label>
                    <textarea value={postText} onChange={postTextHandler} />
                </div>
                <div>
                    <button>Enviar</button>
                </div>
            </form>
        </div>
    )
}

