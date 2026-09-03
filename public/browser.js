const { response } = require("../app");

console.log("Java script is working here");

function itemTemplate(item){
    return`<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                <span class="item-text"><${ item.reja }</span>
                <div>
                <button
                    data-id="${ item._id }"
                    class="edit-me btn btn-secondary btn-sm mr-1"
                >
                    Ozgartirish
                </button>
                <button
                    data-id="${ item._id }"
                       class="delete-me btn btn-danger btn-sm"
                >
                    Ochirish
                </button>
                </div>
            </li>`
}

let createField = document.getElementById("create-field");
 
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Try again");
    });
});

document.addEventListener("click", function (e) {
  // delete oper
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq o'chirmoqchimisiz?")) {
      axios
        app.post("/delete-item", (req, res) => {
            const id = req.body.id;
            db.collection("plans").deleteOne(
                { _id: new mongodb.ObjectId(id) },
                function (err, data) {
                res.json({ state: "success" });
                }
            );
            });

}}}); 

  if (e.target.classList.contains("edit-me")) {
    alert("siz edit tugmasini bosdingiz");
  }

