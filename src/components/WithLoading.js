import React, { useState } from "react";

const WithLoading = (WrappedComponent) => {
  function LoadedComponent(props) {
    const [isLoading, setLoading] = useState(true);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        {isLoading && <h1>LOADING</h1>}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  }
  return LoadedComponent;
};

export default WithLoading;
