import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";

export default function Main() {
  async function send() {
    let permissionGranted = await isPermissionGranted();
    console.log(permissionGranted);
    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }
    if (permissionGranted) {
      sendNotification("Tauri is awesome!");
      sendNotification({ title: "TAURI", body: "Tauri is awesome!" });
    }
  }

  return (
    <div>
      <div>메인 페이지</div>
      <div onClick={() => send()}>notification</div>
    </div>
  );
}
