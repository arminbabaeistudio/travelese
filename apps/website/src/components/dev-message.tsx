"use client";

import { useEffect, useRef } from "react";

export function DevMessage() {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      console.log(`
      --------------------------------------------------------------------------
      ████████╗██████╗  █████╗ ██╗   ██╗███████╗██╗     ███████╗███████╗███████╗
      ╚══██╔══╝██╔══██╗██╔══██╗██║   ██║██╔════╝██║     ██╔════╝██╔════╝██╔════╝
         ██║   ██████╔╝███████║██║   ██║█████╗  ██║     █████╗  ███████╗█████╗  
         ██║   ██╔══██╗██╔══██║╚██╗ ██╔╝██╔══╝  ██║     ██╔══╝  ╚════██║██╔══╝  
         ██║   ██║  ██║██║  ██║ ╚████╔╝ ███████╗███████╗███████╗███████║███████╗
         ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚══════╝╚══════╝╚══════╝╚══════╝
      --------------------------------------------------------------------------
    We are open source: https://git.new/travelese
    Join the community: https://go.travelese.ai/XTxOfuy
    
    `);
      ref.current = true;
    }
  }, []);

  return null;
}
