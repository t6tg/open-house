const getPro = async () => {
  const p = await liff.getProfile();
  document.getElementById("pictureUrl").src = p.pictureUrl;
};

async function main() {
  liff.ready.then(() => {
    if (liff.isInClient()) {
      getEnv();
    } else {
      document.write("กรุณาเข้าผ่าน Line บนมือถือเท่านั้น");
    }
  });
  await liff.init({ liffId: "1654164368-LmQGP5pp" });
}
main();
