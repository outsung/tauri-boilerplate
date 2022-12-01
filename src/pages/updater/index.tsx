import { useCallback } from "react";
import { replace } from "../../helpers/window";

export default function Updater() {
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
