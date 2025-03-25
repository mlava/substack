import { createComponentRender } from "roamjs-components/components/ComponentContainer";
import React from 'react';
import { usePost } from 'react-substack';

const SubstackElement = ({ blockUid }) => {
    const substack = usePost('newsletter-subdomain', 'post-slug');

    return (
        <div className="posts">
            {substack.state === 'loading' &&
                (<div className="loading">Loading</div>)}

            {substack.state === 'data' &&
                <div className="post">
                    {post.cover && <img src={post.cover} />}
                    <h2>{post.title}</h2>
                    <div
                        className="body"
                        dangerouslySetInnerHTML={{ __html: post.bodyHTML }} />
                </div>
            }
        </div>
    )
};

export const renderCrossword = createComponentRender(
    ({ blockUid }) => <SubstackElement blockUid={blockUid} />,
    "substack-element-parent"
);