const qrcode = () => {
  const queryString = decodeURIComponent(window.location.search);
  const params = new URLSearchParams(queryString);
  if (params.get("id") !== null) {
    document.getElementById("qrcode").append(params.get("id"));
  }
};

const main = async () => {
  liff.ready.then(() => {
    if (liff.isInClient()) {
      qrcode();
    } else {
      document.write("กรุณาเข้าผ่าน Line บนมือถือเท่านั้น");
    }
  });
  await liff.init({ liffId: "1654164368-l7G8Q966" });
};

main();
