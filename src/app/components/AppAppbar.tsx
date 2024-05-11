"use client"

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ModeSwitcher } from "./ModeSwitcher";
import { useEditor } from "@/provider";

export function AppAppbar() {

  const { state, dispatch } = useEditor()

  function rename(e: React.FocusEvent<HTMLSpanElement, Element>) {
    const context = e.target.innerText

    dispatch({
      type: "RENAME",
      payload: {
        value: context
      }
    })
  }

  return (
    <AppBar position="absolute" sx={{ height: "3.2rem" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          style={{
            userSelect: "none",
            fontSize: "1.6rem",
            padding: "0 1rem"
          }}
          contentEditable
          dangerouslySetInnerHTML={{ __html: state.name }}
          onBlur={rename}
        />
        <ModeSwitcher />
      </Toolbar>
    </AppBar>
  )
}