/**
 * Copyright 2024 Henrique de Lima Pessoa
 * 
 * See the NOTICE file distributed with this work for 
 * additional information regarding copyright ownership.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    https://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * This project is based on https://github.com/google/pixelate which is licensed under the Apache 2.0 License.
 * 
 * Copyright 2022 Google LLC
 */

"use client"

import React from "react"

import IconButton from "@mui/material/IconButton"

import { useColorScheme } from "@mui/material/styles"

export const ModeSwitcher = () => {
  const { setMode, mode } = useColorScheme()

  const [mounted, setMounted] = React.useState<boolean>(false)

  const toggleMode = () => setMode(mode !== "dark" ? "dark" : "light")

  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    // for ssr
    return <div style={{ height: "3rem", width: "3rem" }} />
  }
  return (
    <IconButton onClick={toggleMode} >
      {mode == "dark" ? "🌞" : "🌜"}
    </IconButton>
  )
}