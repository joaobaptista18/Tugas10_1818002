// import * as React from 'react';
// import {Home} from './src/screens';
// export default function App() {
//   return <Home />;
// }

// import * as React from 'react';
// import {Discover} from './src/screens';
// export default function App() {
//   return <Discover />;
// }

// import * as React from 'react';
// import {Bookmark} from './src/screens';
// export default function App() {
//   return <Bookmark />;
// }

// import * as React from 'react';
// import {Profile} from './src/screens';
// export default function App() {
//   return <Profile />;
// }

// import * as React from 'react';
// import {AddBlogForm} from './src/screens';
// export default function App() {
//   return <AddBlogForm />;
// }

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router';
export default function App() {
  return (
    <NavigationContainer>
     <Router/>
    </NavigationContainer>
  );
}