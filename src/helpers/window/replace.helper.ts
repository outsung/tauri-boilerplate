import { getByLabel, makeWindow } from "../lib/window";

interface WindowReplaceProps {
  fromLabel: string;
  toUrl: string;
  toLabel: string;
}
export async function replace({
  fromLabel,
  toUrl,
  toLabel,
}: WindowReplaceProps) {
  const fromWindow = await getByLabel(fromLabel);
  fromWindow.close();
  return makeWindow(toUrl, toLabel);
}
