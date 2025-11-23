import type { WindowConfigKey } from "#constants";
import useWindowStore from "#store/window";

const WindowControls = ({ target }: { target: WindowConfigKey }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};
export default WindowControls;
