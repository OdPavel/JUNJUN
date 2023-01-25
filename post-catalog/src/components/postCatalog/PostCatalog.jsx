import React from 'react';
import styles from './PostCatalog.module.css'
import PropTypes from 'prop-types';

const PostCatalog = ({post}) => {
    console.log(post)
    return (
        <div className={styles.posts}>
            <ul className={styles.posts__list}>
                <li className="posts_single-post" data-post-id={post.id}>
                    <h3 className="posts__post-title">{post.title}</h3>
                    <p className="posts__post-description">{post.body}</p>
                </li>
            </ul>

        </div>
    );
};

PostCatalog.propTypes = {
    post: PropTypes.object
};

export default PostCatalog;