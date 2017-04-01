import React from 'react';
//Route is used to define a match between URL and component
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/post_index';

//Routes definition
export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
    </Route>
);