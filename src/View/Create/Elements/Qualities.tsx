import * as React from "react";

export interface IQualitiesProps {}

export interface IQualitiesState {}

export class Qualities extends React.Component<
  IQualitiesProps,
  IQualitiesState
> {
  render() {
    return (
      <div>
        <h2>Select Qualities</h2>
      </div>
    );
  }
}
