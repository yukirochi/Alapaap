import Userhead from "../components/userhead";
export const Onsignup = async (
  e,
  varusername,
  varemail,
  varpassword,
  veremail,
  veruser,
  navigate
) => {
  e.preventDefault();

  let data = {
    username: varusername,
    email: varemail,
    password: varpassword,
  };

  try {
    const res = await fetch("http://localhost:4001/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("Status code:", res.status);

    if (!res.ok) throw new Error("Network Error");
    let resp = await res.json();

    if (resp.var === "emailprob") veremail(true);
    if (resp.var === "userprob") veruser(true);
    alert(resp.msg);
    navigate("/lobby", { state: { username: varusername } });
  } catch (error) {
    console.error(error);
  }
};

export const Onlogin = async (
  e,
  varusername,
  varpassword,
  varstats,
  navigate
) => {
  e.preventDefault();
  try {
    let data = {
      username: varusername,
      password: varpassword,
    };
    let res = await fetch("http://localhost:4001/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Network Error :", res.status);
    let resp = await res.json();
    if (resp.var === "failed") {
      varstats(true);
      alert(resp.msg);
    }
    alert(resp.msg);
    navigate("/lobby", { state: { username: varusername } });
  } catch (error) {
    console.error(error);
  }
};
