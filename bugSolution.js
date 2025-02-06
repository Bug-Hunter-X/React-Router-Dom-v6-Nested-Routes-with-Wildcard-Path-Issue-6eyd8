```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>; }
function About() { return <div>About</div>; }

function Users() {
  let { userId } = useParams();
  return (
    <div>
      <h1>Users</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}
```