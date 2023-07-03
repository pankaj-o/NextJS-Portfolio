import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import { BlogContext } from "@/contextApi/blogContext";
import Head from "next/head";
import React, { Fragment, useContext } from "react";
import { github } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import MobileNavbar from "@/components/mobileNavbar";

const Debouncing = () => {
  const { dark: myDark } = useContext(BlogContext);

  return (
    <Fragment>
      <Head>
        <title>Debouncing in JavaScript</title>
      </Head>

      <Theme>
        <Navbar />
        <MobileNavbar />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h2 className="text-3xl font-bold mt-4 dark:bg-blue-800 bg-blue-400 p-2 rounded-md">
              Debouncing in JavaScript
            </h2>

            <p className="text-lg font-bold mt-5">DEFINATION</p>
            <p className="font-bold my-2">By Javascript</p>
            <p>
              The concept of debouncing is pretty straightforward. It delays the
              function invocation by a defined period of time to avoid
              unnecessary invocations. So, the function will only be invoked if
              no event is triggered within that time, If the user triggers a new
              event during that time the time will be reset.
            </p>
            <p className="font-bold my-2">By Me</p>
            <p>
              Dekho har bar event par function call karne ki bajaye ek time set
              kr diya jaata hai jisase pata chale ki user abb output chahata hai
              or time khatam hone par function call ho jata hai. Agar hum 5 bar
              ki jagah ek bar function call karainge to application ki speed
              badhegi obevious hai.
            </p>

            <Example1 myDark={myDark} />
          </div>

          <div className="layoutBox2">Namaste</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default Debouncing;

const Example1 = ({ myDark }) => {
  const codeString = `const Example1 = () => {
  const debounceFun = (fun, delay) => {
    var timer;

    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun();
      }, delay);
    };
  };

  const innerFun = debounceFun(() => {
    alert("Function run after 2 second");
  }, 2000);
  return (
    <input
      onChange={innerFun}
      type="text"
      name=""
      id=""
    />
  );
};`;

  const debounceFun = (fun, delay) => {
    var timer;

    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun();
      }, delay);
    };
  };

  const innerFun = debounceFun(() => {
    alert("Function run after 2 seconds");
  }, 2000);

  return (
    <>
      <h3 className="text-lg font-bold mt-6 mb-4">Example 1</h3>
      <p className="mb-2">
        In This example when you stop writing for 2 second alert will be showing
        = "Function run after 2 seconds"
      </p>
      <input
        className="dark:bg-black my-3 py-1 px-2 rounded border border-solid border-black dark:border-white"
        onChange={innerFun}
        type="text"
        name=""
        id=""
        placeholder="Write anything"
      />
      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};
