import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsloading(true);

      //some logic if we go http request and suddenly switch to another page, to abort requet
      const httpAbortCtrl = new AbortController(); //https://developer.mozilla.org/ru/docs/Web/API/AbortController
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal, //abort
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsloading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsloading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  //some logic if we go http request and suddenly switch to another page, to abort requet
  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    }; //clean up or unmounts
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
    clearError,
  };
};
