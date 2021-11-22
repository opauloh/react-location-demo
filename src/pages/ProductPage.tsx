import * as React from "react";
import { useMatch } from "react-location";

export const ProductPage = () => {
  const params = useMatch().params;

  return (
    <div>
      Product Page: <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
};
