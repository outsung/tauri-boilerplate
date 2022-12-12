import { useEffect } from "react";
import { replace } from "../../helpers/window";
import { checkUpdate, installUpdate } from "@tauri-apps/api/updater";
import { relaunch } from "@tauri-apps/api/process";

export function useUpdate() {
  useEffect(() => {
    (async () => {
      try {
        const { shouldUpdate, manifest } = await checkUpdate();
        console.log({ shouldUpdate, manifest });
        if (shouldUpdate) {
          // display dialog
          await installUpdate();
          // install complete, restart the app
          await relaunch();
        }
      } catch (error) {
        console.log({ error });
      } finally {
        replace({ fromLabel: "updater", toLabel: "main", toUrl: "./" });
      }
    })();
  }, []);
}
