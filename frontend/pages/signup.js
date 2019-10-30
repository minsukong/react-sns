import React, { useState } from "react";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import AppLayout from "../components/AppLayout";

const Signup = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passswordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
  };
  const onChangeId = e => {
    setId(e.target.value);
  };
  const onChangeNick = e => {
    setNick(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onChangePasswordChk = e => {
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = e => {
    setTerm(e.target.checked);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.min.css"
        ></link>
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id"></label>
            <br />
            <Input
              name="user-id"
              value={id}
              required
              onChange={onChangeId}
            ></Input>
          </div>
          <div>
            <label htmlFor="user-nick"></label>
            <br />
            <Input
              name="user-nick"
              value={nick}
              required
              onChange={onChangeNick}
            ></Input>
          </div>
          <div>
            <label htmlFor="user-password"></label>
            <br />
            <Input
              name="user-password"
              type="password"
              required
              onChange={onChangePassword}
            ></Input>
          </div>
          <div>
            <label htmlFor="user-pass-chk"></label>
            <br />
            <Input
              name="user-pass-chk"
              type="password"
              required
              onChange={onChangePasswordChk}
            ></Input>
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              동의
            </Checkbox>
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
