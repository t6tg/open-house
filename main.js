const getEnv = () => {
  document.getElementById("os").append(liff.getOS());
};

async function main() {
  liff.ready.then(() => {
    getEnv();
  });
  await liff.init({ liffId: "1654164368-LmQGP5pp" });
}
main();
