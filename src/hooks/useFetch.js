import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = useCallback(
    (dataToBePosted) => {
      setOptions({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToBePosted),
      });
    },
    [setOptions]
  );

  const patchData = useCallback(
    (dataToBePatched) => {
      setOptions({
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToBePatched),
      });
    },
    [setOptions]
  );

  const FetchData = useCallback(
    async (controller, fetchOptions) => {
      console.log("fetching...");
      setIsPending(true);
      try {
        const response = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setData(json);
        setIsPending(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("THE FETCH WAS ABORTED");
        } else {
          setError("COULD NOT FETCH THE DATA");
          console.log(err.message);
          setIsPending(false);
        }
      }
    },
    [url]
  );

  useEffect(() => {
    const controller = new AbortController();

    if (method === "GET") {
      console.log("called: ", method);
      FetchData(controller);
    }
    if (method === "PATCH" && options) {
      console.log("called: ", method);
      FetchData(controller, options);
    }
    if (method === "POST" && options) {
      console.log("called: ", method);
      FetchData(controller, options);
    }

    //cleanup functions are returned in useEffect if a
    //component using the useEffect unmounts.
    return () => {
      controller.abort();
    };
  }, [FetchData, options, method]);

  return { data, isPending, error, postData, patchData };
};
