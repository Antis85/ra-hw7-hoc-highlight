import React from 'react';
import WrappedComponent from './WrappedComponent';

export default function List(props) {
  return props.list.map((item) => {
    return <WrappedComponent key={item.url || item.title} {...item} />;
  });
}
