```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will throw an error because 'someGlobalVar' is not defined in this scope
  console.log(someGlobalVar);
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```