import React, { Component } from "react";
import Modal from "../modal/Modal";
import { MatchMediaHOC } from "react-match-media";
import ReactDOM from "react-dom";
// import Exit from "./Exit";
import ExitMobile from "./ExitMobile";
import styles from "./style.module.css";

class Header extends Component {
  state = {
    isShowModal: false,
    users: {
      status: "success",
      user: {
        userData: {
          name: {
            fullName: "Petia Pupkin",
            firstName: "Petia",
            lastName: "Pupkin",
          },
          email: "user@example.com",
          photo: "",
          userNew: true,
        },
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDNhMTM4NmIxZTg1NTdjZjIzNjY3ODEiLCJpYXQiOjE1NjQwODcxNzV9.jSdzHuBSf4yKS6t7zwt0AoQIchHlz73JDOjfHVdbTBk",
      },
    },
    firstLetter: "",
  };

  componentDidMount() {
    if (this.state.users.user.userData.photo === "") {
      this.setState({
        firstLetter: this.state.users.user.userData.name.firstName.substr(0, 1),
      });
    }
  }
  closeModal = () => {
    this.setState({ isShowModal: false });
  };
  openModal = () => {
    this.setState({ isShowModal: true });
  };

  render() {
    return (
      <>
        <div className={styles.container}>
          <ul className={styles.headerUl}>
            <li>LOGO</li>
            <li>
              <ul className={styles.headerUlUl}>
                <li>
                  <span
                    style={{
                      fontFamily: "RobotoRegular",
                      backgroundColor: "#f4f7fa",
                      paddingBottom: 5,
                      paddingTop: 5,
                      paddingLeft: 10,
                      paddingRight: 10,
                      borderRadius: "50%",
                      fontSize: 14,
                    }}
                  >
                    {this.state.firstLetter}
                  </span>
                </li>
                <li>
                  {this.state.isShowModal && (
                    <Modal
                      text="Вы действительно хотите выйты?"
                      closeModal={this.closeModal}
                    />
                  )}
                  <ExitMobile />
                  {/* <Exit
                    open={this.openModal}
                    name={this.state.users.user.userData.name.fullName}
                  /> */}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Header;
