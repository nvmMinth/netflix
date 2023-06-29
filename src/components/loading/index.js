import React from "react";
import { Spinner, LockBody, OpenBody, Picture } from "./styles/loading.styles";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.OpenBody = function LoadingOpenBody() {
  return <OpenBody />;
};
