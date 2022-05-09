import React, { useEffect, useRef } from "react";
import "angular/polyfills";
import { mount } from "angular/Heroes";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
