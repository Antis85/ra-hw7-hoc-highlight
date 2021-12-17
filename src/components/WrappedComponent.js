import React from 'react';
import withPopularizer from '../hocs/withPopularizer';
import Video from './Video';
import Article from './Article';

const WrappedComponent = ({ ...props }) => {
  const VideoWrapper = withPopularizer(Video);
  const ArticleWrapper = withPopularizer(Article);
  switch (props.type) {
    case 'video':
      return <VideoWrapper {...props} />;
    case 'article':
      return <ArticleWrapper {...props} />;
    default:
      break;
  }
};

export default WrappedComponent;