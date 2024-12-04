// [r: Valuer]

"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronDown, Loading, UserCardToggle } from "@/components/svg";
import UserCard from "./UserCard";
import { useValuerStore } from "@/stores/valuerStore";

const UserCardButton: FC = () => {
  const { valuer } = useValuerStore();

  const userCardButtonRef = useRef<HTMLButtonElement | null>(null);
  const userCardRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAnimating, setisAnimating] = useState(false);

  // Toggle UserCard animation
  useEffect(() => {
    if (!userCardRef.current) {
      return;
    }

    setisAnimating(true); // Debounce

    // Open
    if (isOpen) {
      gsap.fromTo(
        userCardRef.current,
        { display: "block", opacity: 0, y: -2 },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          onComplete: () => {
            setisAnimating(false);
          },
        }
      );
    }
    // Close
    else {
      gsap.to(userCardRef.current, {
        opacity: 0,
        y: -2,
        duration: 0.2,
        onComplete: () => {
          if (userCardRef.current) {
            userCardRef.current.style.display = "none";
            setisAnimating(false);
          }
        },
      });
    }
  }, [isOpen]);

  // Callback for closing UserCard when clicking outside
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      userCardRef.current &&
      userCardButtonRef.current &&
      !userCardRef.current.contains(event.target as Node) &&
      !userCardButtonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  // Register event listener when isOpen is true
  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div className="relative -mr-2 flex justify-center items-center">
      {/* Button or Loading... */}
      {!valuer ? (
        <div className="w-16 flex justify-center items-center">
          <Loading color="#FAFAFA" />
        </div>
      ) : (
        <button
          ref={userCardButtonRef}
          onClick={() => !isAnimating && setIsOpen((prev) => !prev)}
          className="w-16 flex justify-center items-center p-2 rounded-md button-interaction"
        >
          <UserCardToggle />
          <div className={`${isOpen ? "-rotate-180" : ""} duration-200`}>
            <ChevronDown />
          </div>
        </button>
      )}

      {/* UserCard */}
      {valuer && (
        <div ref={userCardRef} className={`absolute top-10 right-2 hidden`}>
          <UserCard valuer={valuer} setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};
export default UserCardButton;
