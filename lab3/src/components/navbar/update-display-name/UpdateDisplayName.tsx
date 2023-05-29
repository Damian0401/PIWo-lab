import * as React from "react";
import { IUpdateDisplayNameProps } from "./IUpdateDisplayNameProps";
import styles from "./UpdateDisplayName.module.scss";
import Input from "../../input/Input";
import controle from "../../../assets/styles/controls.module.scss";

const UpdateDisplayname: React.FC<IUpdateDisplayNameProps> = (props) => {
  const { updateDisplayName } = props;

  const [displayName, setDisplayName] = React.useState<string>("");

  return (
    <div className={styles.setDisplayName}>
      <Input
        type="text"
        placeholder="Set your display name"
        name={"displayName"}
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <button
        className={controle.button}
        onClick={() => updateDisplayName(displayName)}
        disabled={!displayName}
      >
        Save
      </button>
    </div>
  );
};

export default UpdateDisplayname;
