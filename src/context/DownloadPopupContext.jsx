"use client";
import React, {createContext, useContext, useState, useCallback } from "react";

const DownloadPopupContext = createContext({
  open: false,
  openPopup: () => {},
  closePopup: () => {},
});

export function useDownloadPopup() {
  return useContext(DownloadPopupContext);
}

export function DownloadPopupProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openPopup = useCallback(() => setOpen(true), []);
  const closePopup = useCallback(() => setOpen(false), []);

  return (
    <DownloadPopupContext.Provider value={{ open, openPopup, closePopup }}>
      {children}
    </DownloadPopupContext.Provider>
  );
}
