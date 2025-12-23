"use client";

import { useState } from "react";

export default function GetCoffee() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="btn btn--primary u-fullwidth" onClick={() => setOpen(true)}>
        <strong className="text-white">Let’s have coffee!</strong>
      </button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>

            <iframe src="https://billscott.youcanbook.me/" title="Schedule coffee" width="100%" height="100%" frameBorder="0" />
          </div>
        </div>
      )}
    </>
  );
}
