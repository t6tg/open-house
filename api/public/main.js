const btn = document.getElementById("btn");
let userId;

const getPro = async () => {
  const p = await liff.getProfile();
  document.getElementById("pictureUrl").src = p.pictureUrl;
  document.getElementById("liff_name").innerText = p.displayName;
  document.getElementById("email").value = liff.getDecodedIDToken().email;
  userId = p.userId;
};

function main() {
  liff.init({ liffId: "1654164368-LmQGP5pp" });
  liff.ready.then(() => {
    if (liff.isLoggedIn()) {
      getPro();
    } else {
      liff.login();
    }
  });
}

main();

async function send(e) {
  e.preventDefault();
  const name = document.getElementById("regis_name").value;
  const email = document.getElementById("email").value;
  const regis_class = document.getElementById("regis_class").value;
  const school = document.getElementById("school").value;

  try {
    const result = await axios.post(
      "https://api-openhouse.vercel.app/api/v1/register",
      {
        name,
        email,
        regis_class,
        school,
        userId,
      }
    );
    if (result.status == 200) {
      console.log("done");
      liff.closeWindow();
    }
  } catch (error) {
    console.log(error);
  }
}
