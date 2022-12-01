import type { WebviewWindow } from "@tauri-apps/api/window";
import { isNode } from "../../utils";

export async function getByLabel(label: string) {
  if (isNode()) {
    return Promise.resolve(undefined as unknown as WebviewWindow);
  }

  const window = await import("@tauri-apps/api/window");
  const WebviewWindow = window.WebviewWindow;
  return WebviewWindow.getByLabel(label);
}
