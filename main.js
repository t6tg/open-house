import liff from "@line/liff";

const getEnv = () => {
  document.getElementById("os").append(liff.getOS());
};

const main = async () => {
  liff.ready.then(() => {
    getEnv();
  });
  await liff.init({ liffId: "1654164368-LmQGP5pp" });
};

main();
