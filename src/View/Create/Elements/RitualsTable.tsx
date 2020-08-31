import * as React from "react";
import { Magic } from "../../../Model/Magic";

export interface IRitualsTableProps {
  magicPriority: number;
  updateRituals: (ritual: unknown) => void;
  magic: Magic;
}

export interface IRitualsTableState {}

export class RitualsTable extends React.Component<
  IRitualsTableProps,
  IRitualsTableState
> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Hello World</div>;
  }
}
