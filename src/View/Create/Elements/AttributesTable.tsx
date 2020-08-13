import * as React from "react";
import { Magic } from "../../../Model/Magic";

export interface IMagicTableProps {
  magic: Magic;
  updateMagic: (magic: Magic) => void;
  magicAmount: number;
}

export interface IMagicTableState {}

export class MagicTable extends React.Component<
  IMagicTableProps,
  IMagicTableState
> {
  render() {
    return <div>Hello World</div>;
  }
}
