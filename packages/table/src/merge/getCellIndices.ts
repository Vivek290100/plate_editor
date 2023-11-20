import { Value } from '@udecode/plate-common';

import { TablePlugin, TTableCellElement } from '../types';

export const getCellIndices = (
  options: TablePlugin<Value>,
  startCell: TTableCellElement
) => {
  // optional typing needs for tests
  return options._cellIndices?.get(startCell);
};
