import { useCallback, useEffect, useRef } from "react";
import { replace } from "../../helpers/window";

export default function Updater() {
  useUpdate();

  return (
    <div>
      <div>로딩중...</div>

      <div
        style={{ cursor: "pointer" }}
        onClick={() =>
          replace({ fromLabel: "updater", toLabel: "main", toUrl: "./" })
        }
      >
        메인으로 이동
      </div>
    </div>
  );
}

import { checkUpdate, installUpdate } from "@tauri-apps/api/updater";
import { relaunch } from "@tauri-apps/api/process";

function useUpdate() {
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
      }
    })();
  }, []);
}
