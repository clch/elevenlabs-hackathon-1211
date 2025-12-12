"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const FIRST_AGENT_ID = "agent_1301kc88drzve9naq1aew5nfbvdv";
const SECOND_AGENT_ID = "agent_1901kc8anst7evjrf7j61fs0sc99";

export function ConvaiSwitcher() {
  const [agentId, setAgentId] = useState<string>(FIRST_AGENT_ID);
  const [secondsLeft, setSecondsLeft] = useState<number>(30);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);

    const t = window.setTimeout(() => {
      setAgentId(SECOND_AGENT_ID);
      window.clearInterval(tick);
      setSecondsLeft(0);
    }, 30_000);

    return () => {
      window.clearTimeout(t);
      window.clearInterval(tick);
    };
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />

      <p className="muted" style={{ marginTop: 0 }}>
        No more Mr. Nice Guy in <strong>{secondsLeft}s</strong>
      </p>

      {/* key forces remount so the widget re-initializes when the agent changes */}
      <elevenlabs-convai key={agentId} agent-id={agentId} />
    </>
  );
}
