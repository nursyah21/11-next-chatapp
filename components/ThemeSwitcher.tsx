"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Skeleton } from "@radix-ui/themes";

import { getData } from "./getdata.server";

export const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [text, setText] = useState("");
  useEffect(() => {
    setMount(true);
    (async () => {
      setText(await getData("https://nursyah21-deno-slim.deno.dev/"));
    })();
    // console.log(data);
  }, [theme]);

  if (!mount) {
    return (
      <div className="flex justify-center">
        <Skeleton className="w-8 h-8 " />
      </div>
    );
  }

  return (
    mount && (
      <>
        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        >
          {currentTheme === "dark" ? <IconMoon /> : <IconSun />}
        </button>
        <h1>{text}</h1>
      </>
    )
  );
};
