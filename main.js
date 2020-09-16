import liff from "@line/liff";

const main = async () => {
  liff.ready.then(() => {
    document.write(liff.getOS());
  });
  await liff.init({ liffId: "1654164368-LmQGP5pp" });
};

main();
