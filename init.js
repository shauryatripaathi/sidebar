let sideBar = document.getElementById("container");
sideBar.innerHTML = "Sidebar";
let horizontalLine = document.createElement("hr");
horizontalLine.id = "horizontalLine";
sideBar.appendChild(horizontalLine);

let sidebarContents = document.createElement("ul");

    let home = document.createElement("li");
    home.id = "home";
    home.addEventListener("click", handleOnHome);
    function handleOnHome(){
      home.style.color = "red";
    }
    home.innerHTML = "Home";
    sidebarContents.appendChild(home);

    let dashboard = document.createElement("li");
    dashboard.innerHTML = "Dashboard";
    sidebarContents.appendChild(dashboard);

    let orders = document.createElement("li");
    orders.innerHTML = "Orders";
    sidebarContents.appendChild(orders);

    let products = document.createElement("li");
    products.innerHTML = "Products";
    sidebarContents.appendChild(products);

    let customers = document.createElement("li");
    customers.innerHTML = "Customers";
    sidebarContents.appendChild(customers);

sidebarContents.id = "sidebarContents";
sideBar.append(sidebarContents);





