import axios from "axios";
import React, {  memo, useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Search = memo(() => {
  const [nata, setNata] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [cancelToken, setCancelToken] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    let source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `http://localhost:7852/user/search?q=${q}`,
          { withCredentials: true, cancelToken: source.token }
        );
        setNata(response.data.results);
        setLoading(false);
        setErr(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled");
        } else {
          setLoading(false);
          setErr(true);
          console.error("Error searching:", error);
        }
      }
    };

    const fetchIfNeeded = () => {
      if (q.trim() !== "") {
        fetchData();
      } else {
        setNata([]);
      }
    };

    if (cancelToken) {
      cancelToken.cancel();
    }

    setCancelToken(source);

    fetchIfNeeded();

    return () => {
      if (source) {
        source.cancel();
      }
    };
  }, [q]);

  const handleInputChange = (e) => {
    setQ(e.target.value);
  };
  const send=useCallback((e)=>{
        navigate(`/user/${e}`);
  })

  return (
    <div className="px-3 relative flex-grow">
      <input
        type="text"
        onChange={handleInputChange}
        value={q}
        className="my-4 w-full border-white bg-transparent rounded-lg text-white p-2 border-2"
        placeholder="Search..."
      />
      {q.length > 0 && (
        <div className="w-[98.5%] h-[50vh] overflow-y-auto absolute bg-zinc-800 z-10">
          {loading ? (
            <div>loading</div>
          ) : err ? (
            <div>check the connection</div>
          ) : nata.length > 0 ? (
            nata.map((p) => (
              <button
                onClick={() => send(p._id)}
                className="bg-slate-200 my-2 block w-full text-start px-2 font-semibold text-3xl"
                
                key={p._id}>
                {p.name}
              </button>
            ))
          ) : (
            <div>no users found</div>
          )}
        </div>
      )}
    </div>
  );
});

export default Search;






