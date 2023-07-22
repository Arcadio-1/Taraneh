import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { varifiypassword } from "../../../lib/hashHelper";
import { getClient } from "../util/functions/getClient";

export default NextAuth({
  session: {
    jwt: true,
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await getClient("users");
        if (!client) {
          client.close();
          throw new Error("خطا در اتصال به سرور");
        }

        const emailString = String(credentials.email).toLowerCase();
        const emailRegex = RegExp(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        const isEmailValid = emailRegex.test(emailString);
        if (!isEmailValid) {
          client.close();
          throw new Error("ایمیل وارد شده صحیح نیست");
        }

        const userCollection = client.db().collection("userList");
        const user = await userCollection.findOne({
          email: emailString,
        });
        if (!user) {
          client.close();
          throw new Error("حساب کاربری شما یافت نشد!");
        }

        const passwordRegex = RegExp(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        );
        const isPasswordValid = passwordRegex.test(credentials.password);
        if (!isPasswordValid) {
          client.close();

          throw new Error("پسورد وارد شده صحیح نیست");
        }
        const isPasswordCreact = await varifiypassword(
          credentials.password,
          user.password
        );
        if (!isPasswordCreact) {
          client.close();
          throw new Error("پسورد وارد شده صحیح نیست");
        }
        client.close();
        console.log(user.family);
        return { email: user };
      },
    }),
  ],
});
