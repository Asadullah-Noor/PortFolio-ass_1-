import React, { useEffect, useRef } from "react";
import "./Cursor.css"; // keep the original CSS for image backgrounds & body class toggles

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);
  const cursor3Ref = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursor2 = cursor2Ref.current;
    const cursor3 = cursor3Ref.current;
    if (!cursor || !cursor2 || !cursor3) return;

    // Move handler
    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      // place cursors
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor2.style.left = `${x}px`;
      cursor2.style.top = `${y}px`;
      cursor3.style.left = `${x}px`;
      cursor3.style.top = `${y}px`;
    };

    document.addEventListener("mousemove", onMove);

    // Hover add/remove classes (the same class names as original CSS)
    const addHover = () => {
      cursor2.classList.add("hover");
      cursor3.classList.add("hover");
    };
    const removeHover = () => {
      cursor2.classList.remove("hover");
      cursor3.classList.remove("hover");
    };

    // Attach to all current hover-targets
    const hoverTargets = Array.from(document.querySelectorAll(".hover-target, .hover-target-2"));
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // Body class toggles for specific selectors (img-1, img-2, img-3, img-4, logo)
    const setupBodyToggle = (selector, bodyClass) => {
      const el = document.querySelector(selector);
      if (!el) return;
      const onEnter = () => document.body.classList.add(bodyClass);
      const onLeave = () => document.body.classList.remove(bodyClass);
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      };
    };

    const cleanupFns = [
      setupBodyToggle(".logo", "logo-wrap"),
      setupBodyToggle(".img-1", "img-1-wrap"),
      setupBodyToggle(".img-2", "img-2-wrap"),
      setupBodyToggle(".img-3", "img-3-wrap"),
      setupBodyToggle(".img-4", "img-4-wrap"),
    ].filter(Boolean);

    // cleanup
    return () => {
      document.removeEventListener("mousemove", onMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    // Keep this component mounted near the app root (top-level) so
    // the cursor overlays everything.
    <div className="cursor-component-root">
      <div className="section-fluid-main">
        <div className="section-row">
          <div className="section-col">
            {/* <p>
              Contrary to popular belief, Lorem Ipsum is not{" "}
              <a href="#" className="hover-target img-1 bg-amber-300">
                simply random text</a>. It has roots in a piece of classical{" "}
              <a href="#" className="hover-target img-2 bg-amber-300">
                Latin literature</a> from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in{" "}
              <a href="#" className="hover-target img-3 bg-amber-300">
                Virginia</a>, looked up one of the more obscure{" "}
              <a href="#" className="hover-target img-4 bg-amber-300">
                Latin words</a>, consectetur, from a Lorem Ipsum passage.
            </p> */}
          </div>
        </div>
        {/* Cursor layers (use refs instead of ids for reliability) */}
        <div ref={cursorRef} id="cursor" className="cursor" />
        <div ref={cursor2Ref} id="cursor2" className="cursor2" />
        <div ref={cursor3Ref} id="cursor3" className="cursor3" />
      </div>
    </div>
  );
};

export default Cursor;
