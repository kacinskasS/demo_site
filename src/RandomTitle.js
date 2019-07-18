import React from "react"
import axios from "axios"

class RandomTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    componentDidMount() {
        this.getTitle()
    }

    getTitle() {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(url)
            .then(res => {
                let data = res.data
                let titleNum = Math.floor(Math.random() * data.length)
                let randomTitle = data[titleNum]
                this.setState({
                    title: randomTitle['title']
                })
            })
    }

    getNewTitle = () => {
        this.getTitle()
    }

    render() {
        const {title} = this.state
            return (
            < React.Fragment >
             {title}
            < /React.Fragment>
    )
    }
}

export default RandomTitle