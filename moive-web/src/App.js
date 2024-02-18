import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  return <div>{loading ? <h1>loading...</h1> : null}</div>;
}

export default App;
