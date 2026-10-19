import React from "react";
import { contact } from "../data/contact";

export function ContactBlock() {
  return (
    <address className="mt-7 space-y-1.5 border-t border-ink/20 pt-5 text-center text-base not-italic leading-relaxed text-muted">
      <h2 className="mb-2 text-base font-bold text-ink">Get in touch</h2>
      <p className="whitespace-pre-line">Address: {contact.address}</p>
      <p>Hours: {contact.hours}</p>
      <p className="pt-2 text-xs text-muted/70">Powered by: Asuratech Solutions</p>
    </address>
  );
}
