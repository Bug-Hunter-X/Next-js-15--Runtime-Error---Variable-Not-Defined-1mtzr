```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  const someGlobalVar = "Hello from Home";
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about" passHref>
        <a>
          Go to About Page
        </a>
      </Link>    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About({ someGlobalVar }) {
  console.log(someGlobalVar); // This will now work
  return (
    <div>
      <h1>About Page</h1>
      <p>{someGlobalVar}</p>
    </div>
  );
}

//Note that you will need to adjust the export in the index page 
export async function getServerSideProps(context) {
  return { props: { someGlobalVar: 'Hello from Home' } };
}
```