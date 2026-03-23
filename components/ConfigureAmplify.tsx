"use client";
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-2_uz7rgMTVd",
      userPoolClientId: "1rddbqd2uq48nclgej7ck8sirv",
    },
  },
});

export default function ConfigureAmplify() {
  return null;
}
