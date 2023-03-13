import { Component } from 'react'

interface ISearchInputProps {
    search: string
    onSearch: (value: string) => void
}

export default class SearchInput extends Component<ISearchInputProps> {
    render() {
        return (
            <div>
                <input placeholder='search' value={this.props.search}
                    onChange={(e) => this.props.onSearch(e.target.value)}
                />
            </div>
        )
    }
}