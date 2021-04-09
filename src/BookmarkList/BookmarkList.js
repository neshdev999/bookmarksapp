import React, { Component } from 'react';
import './BookmarkList.css';
import Bookmark from '../Bookmark/Bookmark';
import PropTypes from 'prop-types';

class BookmarkList extends Component{
    render(){        
            const bookmarks = this.props.bookmarks.map((bookmark, i) => <Bookmark {...bookmark} key={i}/>);
        return(
            <div className="bookmarkList">
                {bookmarks}
            </div>
        );
    }
}

BookmarkList.defaultProps = {
    bookmarks: []
};

BookmarkList.propTypes = {
    bookmarks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        rating: PropTypes.number,
        description: PropTypes.string
    }))
};

export default BookmarkList;