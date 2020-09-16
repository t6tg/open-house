const getPro = async () => {
  const p = await liff.getProfile();
  document.getElementById("pictureUrl").src = p.pictureUrl;
  document.getElementById("liff_name").innerText = p.displayName;
};

async function main() {
  liff.ready.then(() => {
    if (liff.isInClient()) {
      getPro();
    } else {
      document.write("กรุณาเข้าผ่าน Line บนมือถือเท่านั้น");
    }
  });
  await liff.init({ liffId: "1654164368-LmQGP5pp" });
}
main();
