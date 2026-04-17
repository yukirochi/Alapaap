const API_URL = process.env.REACT_APP_API_URL || "https://alapaap-rsmj.onrender.com";

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
    const res = await fetch(`${API_URL}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Network Error");
    let resp = await res.json();

    if (resp.var === "emailprob") {
      veremail(true);
      return;
    }
    if (resp.var === "userprob") {
      veruser(true);
      return;
    }

    navigate("/lobby", { state: { username: varusername, userinfo: resp.user } });
  } catch (error) {
    console.error(error);
  }
};

export const Onlogin = async (e, varusername, varpassword, varstats, navigate) => {
  e.preventDefault();
  try {
    let data = { username: varusername, password: varpassword };
    let res = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Network Error");
    let resp = await res.json();
    if (resp.var === "failed") {
      varstats(true);
      return;
    }
    navigate("/lobby", { state: { username: varusername, userinfo: resp.user } });
  } catch (error) {
    console.error(error);
  }
};
