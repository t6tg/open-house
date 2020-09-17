const main = async () => {
  liff.ready.then(() => {
    if (liff.isInClient()) {
      getPro();
    } else {
      document.write("กรุณาเข้าผ่าน Line บนมือถือเท่านั้น");
    }
  });
  await liff.init({ liffId: "1654164368-l7G8Q966" });
};

main();
