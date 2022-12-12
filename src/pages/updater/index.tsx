import { Spin } from "antd";
import { replace } from "../../helpers/window";
import { useUpdate } from "../../hooks/update";

export default function Updater() {
  useUpdate();

  return (
    <div
      onClick={() =>
        replace({ fromLabel: "updater", toLabel: "main", toUrl: "./" })
      }
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Spin size="large" style={{ marginBottom: 16 }} />
      <div>업데이트 확인중..</div>
    </div>
  );
}
