import { ReactNode, useEffect, useRef } from "react";

import { Fancybox as NativeFancybox, OptionsType } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FancyboxProps {
  delegate?: string;
  options?: OptionsType;
  children: ReactNode;
  className?: string;
}

export default function Fancybox(props: FancyboxProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate ?? "[data-fancybox]";
    const options = props.options ?? {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <div ref={containerRef} className={props.className}>
      {props.children}
    </div>
  );
}
