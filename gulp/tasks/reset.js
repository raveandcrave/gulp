import { deleteAsync } from "del";

import { filePaths } from "../config/path.js";

export const reset = () => {
  return deleteAsync(filePaths.clean);
};
