// const p = new Promise((resolve, reject) => {
//   const gotMilk = true;

//   if (gotMilk) {
//     resolve("Yaay, du lyckades köpa mjölk");
//   } else {
//     reject("Sopa!");
//   }
// });

// // p.then((message) => console.log(message)).catch((message) =>
// //   console.log(message)
// // );

// //ASYNC / AWAIT

// async function getData() {
//   const response = await p;
//   console.log(response);
// }

// getData();

async function getMealCategories() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const data = await response.json();

  printCategories(data.categories);
}

function printCategories(categories) {
  categories.forEach((category) => {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");

    h4.innerText = category.strCategory;
    img.setAttribute("src", category.strCategoryThumb);

    img.addEventListener("click", () => {
      getMealByCategory(category.strCategory);
    });

    div.appendChild(h4);
    div.appendChild(img);

    document.body.appendChild(div);
  });
}

async function getMealByCategory(category) {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category
  );

  const data = await response.json();

  console.log(data.meals);
}

getMealCategories();
