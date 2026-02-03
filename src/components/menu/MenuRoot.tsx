import { useEffect, useRef, useState } from "react";
import { MenuContext, type Anchor, type Direction } from "./Context";

type MenuRootProps = {
  direction?: Direction;
  anchor?: Anchor;
  children: React.ReactNode;
};

export function MenuRoot({
  direction = "top",
  anchor = "start",
  children,
}: MenuRootProps) {
  const [open, setOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <MenuContext.Provider value={{ open, setOpen, direction, anchor }}>
      <div ref={rootRef} className="relative inline-block">
        {children}
      </div>
    </MenuContext.Provider>
  );
}
