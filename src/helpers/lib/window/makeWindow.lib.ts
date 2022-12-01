import type { WebviewWindow } from "@tauri-apps/api/window";
import { isNode } from "../../utils";

export async function makeWindow(url: string, label: string) {
  if (isNode()) {
    return Promise.resolve(undefined as unknown as WebviewWindow);
  }

  const window = await import("@tauri-apps/api/window");
  const WebviewWindow = window.WebviewWindow;

  const webview = new WebviewWindow(label, { url });

  // since the webview window is created asynchronously,
  // Tauri emits the `tauri://created` and `tauri://error` to notify you of the creation response
  webview.once("tauri://created", function () {
    // webview window successfully created
  });
  webview.once("tauri://error", function (e) {
    // an error occurred during webview window creation
  });

  return webview;
}
