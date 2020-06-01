/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import firebase from "./Firestore";
// import firebase from "firebase";

const liff = window.liff;

export default class FormRegis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLineID: "",
      name: "",
      email: "",
      school: "",
      interested: "",
    };
    this.initialize = this.initialize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.initialize);
  }

  initialize() {
    liff.init(async (data) => {
      let getProfile = await liff.getProfile();
      this.setState({
        userLineID: getProfile.userId,
      });
    });
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
    db.collection("users").add({
      userLineID: this.state.userLineID,
      name: this.state.name,
      email: this.state.email,
      school: this.state.school,
      interested: this.state.interested,
    });
    liff
      .sendMessages([
        {
          type: "text",
          text: "Thank you, Bye!",
        },
      ])
      .then(() => {
        liff.closeWindow();
      });
  };

  render() {
    return (
      <div>
        <div className="flex container mx-auto justify-center mt-16">
          <form className="w-full max-w-5xl" onSubmit={this.addUser}>
            <h2 className="text-2xl">ลงทะเบียนเข้าร่วมกิจกรรม</h2> <br />
            {/* name */}
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/1 px-3 mb-2 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  ชื่อ - สกุล
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200  text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="name"
                  placeholder="สมชาย สีสวย"
                  onChange={this.updateInput}
                  required
                />
              </div>
            </div>
            {/* school */}
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/1 px-3 mb-2 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  จากโรงเรียน
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="school"
                  placeholder="โรงเรียนพระจอมเกล้าพระนครเหนือ"
                  onChange={this.updateInput}
                  required
                />
              </div>
            </div>
            {/* email */}
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/1 px-3 mb-2 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  ที่อยู่อีเมล
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="email"
                  name="email"
                  placeholder="example@kmutnb.ac.th"
                  onChange={this.updateInput}
                  required
                />
              </div>
            </div>
            {/* Department */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  สาขาที่สนใจ
                </label>
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="interested"
                  onChange={this.updateInput}
                  required
                >
                  <option>
                    Really long option that will likely overlap the chevron
                  </option>
                  <option value="op1">Option 2</option>
                  <option value="op2">Option 3</option>
                </select>
              </div>
            </div>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold w-full py-2 rounded-full mb-4">
              ลงทะเบียน
            </button>
          </form>
        </div>
      </div>
    );
  }
}
