import getData from "./DOM.js";

let API = "https://660404f42393662c31d06276.mockapi.io/api/todo/homework1";

async function get() {
  try {
    let responce = await fetch(API);
    let data = await responce.json();
    getData(data);
  } catch (error) {
    console.error(error);
  }
}

async function deletuser(id) {
  try {
    let responce = await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    get();
  } catch (error) {
    console.error(error);
  }
}

async function Adduser(user) {
    try {
        let responce=await fetch(API, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        get()
    } catch (error) {
        console.error(error);
    }
}

async function Edituser(id,user) {
    try {
        let responce=await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        get()
    } catch (error) {
        console.error(error);
    }
}

export default get;
export { deletuser, Adduser, Edituser };
