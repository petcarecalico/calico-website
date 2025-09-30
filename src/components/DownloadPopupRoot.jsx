"use client";
import React from "react";
import Modal from "./UI/Modal";
import DownloadNav from "./DownloadNav";
import { useDownloadPopup } from "../context/DownloadPopupContext";

export default function DownloadPopupRoot() {
  const { open, closePopup } = useDownloadPopup();
  return (
    <Modal open={open} onClose={closePopup}>
      <DownloadNav onClose={closePopup} />
    </Modal>
  );
}
