import { useEffect, useState } from "react";

export default function VisitCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/jay-portfolio/visits")
      .then((res) => res.json())
      .then((data) => setCount(data.value));
  }, []);

  return (
    <div className="text-center mt-6 text-sm text-gray-600">
      👁️‍🗨️ <strong>{count}</strong> visitors have viewed this site!
    </div>
  );
}
