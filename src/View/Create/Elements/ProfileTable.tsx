import * as React from "react";
import { Profile, GenderType } from "../../../Model/Create/Profile";

export interface IProfileProps {
  profile: Profile;
  updateProfile: (profile: Profile) => void;
}

export interface IProfileState {}

export class ProfileTable extends React.Component<
  IProfileProps,
  IProfileState
> {
  render() {
    return (
      <div>
        <h2>Personal data</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>Street Name</td>
                      <td>
                        <input
                          type="text"
                          value={this.props.profile.streetName}
                          onChange={(evt) =>
                            this.props.updateProfile({
                              ...this.props.profile,
                              streetName: evt.currentTarget.value,
                            })
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Real Name</td>
                      <td>
                        <input
                          type="text"
                          value={this.props.profile.realName}
                          onChange={(evt) =>
                            this.props.updateProfile({
                              ...this.props.profile,
                              realName: evt.currentTarget.value,
                            })
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>
                        <select
                          value={this.props.profile.gender}
                          onChange={(evt) =>
                            this.props.updateProfile({
                              ...this.props.profile,
                              gender: parseInt(
                                evt.currentTarget.value
                              ) as GenderType,
                            })
                          }
                        >
                          <option value={GenderType.Male}>Male</option>
                          <option value={GenderType.Female}>Female</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Age:</td>
                      <td>
                        <input
                          type="number"
                          value={this.props.profile.age}
                          onChange={(evt) =>
                            this.props.updateProfile({
                              ...this.props.profile,
                              age: parseFloat(evt.currentTarget.value),
                            })
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Height:</td>
                      <td>
                        <input
                          type="number"
                          value={this.props.profile.height}
                          onChange={(evt) =>
                            this.props.updateProfile({
                              ...this.props.profile,
                              height: parseFloat(evt.currentTarget.value),
                            })
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>
                        <input
                          type="number"
                          value={this.props.profile.weight}
                          onChange={(evt) =>
                            this.props.updateProfile({
                              ...this.props.profile,
                              weight: parseFloat(evt.currentTarget.value),
                            })
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table style={{ height: "286px" }}>
                  <tbody>
                    <tr>
                      <td>Picture URL</td>
                      <td>
                        <input
                          type="text"
                          value={this.props.profile.picture}
                          onChange={(evt) =>
                            this.props.updateProfile({
                              ...this.props.profile,
                              picture: evt.currentTarget.value,
                            })
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ height: "100%" }}>
                        <div
                          style={{
                            backgroundImage:
                              'url("' + this.props.profile.picture + '"',
                          }}
                          className="profilePicture"
                        ></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
