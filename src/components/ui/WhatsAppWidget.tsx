"use client";

import { useState } from "react";
import { XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig, getWhatsAppLink } from "@/site.config";

const QUICK_REPLIES = siteConfig.services.items.map((service) => service.title);

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleToggle = () => setIsOpen((open) => !open);

  const handleClose = () => {
    setIsOpen(false);
    setMessage("");
  };

  const handleQuickReply = (title: string) => {
    setMessage(`Hi, I'm interested in ${title}.`);
  };

  const handleSend = () => {
    const text = message.trim() || siteConfig.whatsapp.generalMessage;
    window.open(getWhatsAppLink(text), "_blank", "noopener,noreferrer");
    handleClose();
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end">
      <div
        className={`mb-4 w-80 max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
          isOpen
            ? "max-h-[560px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 translate-y-4 opacity-0"
        }`}
      >
        <div className="bg-[#075E54] p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <WhatsAppIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm leading-tight font-semibold">
                  {siteConfig.practitioner.name}
                </p>
                <p className="text-xs text-white/80">Available now</p>
              </div>
            </div>
            <button
              aria-label="Close chat"
              onClick={handleClose}
              className="rounded-full p-1 transition-colors hover:bg-white/20"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="min-h-32 bg-[#ECE5DD] p-4">
          <div className="max-w-[85%] rounded-lg bg-white p-3 shadow-sm">
            <p className="text-sm text-gray-700">
              Hi, I&apos;m here to help with psychic readings, spiritual
              guidance, and energy work. How may I assist you?
            </p>
            <p className="mt-1 text-right text-xs text-gray-400">Just now</p>
          </div>

          {!message && (
            <div className="mt-3">
              <div className="max-w-[85%] rounded-lg bg-white p-3 shadow-sm">
                <p className="text-sm text-gray-700">
                  Please select a service you&apos;re interested in:
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {QUICK_REPLIES.map((title) => (
                  <button
                    key={title}
                    onClick={() => handleQuickReply(title)}
                    className="rounded-full border border-[#25D366] bg-white px-3 py-1.5 text-sm text-[#075E54] transition-colors hover:bg-[#25D366] hover:text-white"
                  >
                    {title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {message && (
          <div className="bg-[#f0f0f0] p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-full border-0 bg-white px-4 py-2 text-sm focus:ring-2 focus:ring-[#25D366] focus:outline-none"
              />
              <button
                aria-label="Send message"
                onClick={handleSend}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#128C7E]"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      <button
        aria-label="Chat on WhatsApp"
        onClick={handleToggle}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          isOpen ? "rotate-90" : ""
        }`}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-white" />
        ) : (
          <WhatsAppIcon className="h-7 w-7 text-white" />
        )}
      </button>
    </div>
  );
}
