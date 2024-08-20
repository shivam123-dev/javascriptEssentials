let userRole = "admin";
let accessLevel;

if(userRole === "admin") {
        accessLevel = "You can fully access the system.";
} else if(userRole === "manager") {
        accessLevel = "You have limited access to system";
} else {
        accessLevel = "You cannot access system.";
    }

    console.log("Access Level:", accessLevel);
    
let isLoggedIn = true;
let userMessage;

if(isLoggedIn === true) {
    if(userRole === "admin") {
        userMessage = "You are admin";
    } else {
        userMessage = "You are user";
    }
} else {
    userMessage = "Please login first";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "admin";
        break;
    case "manager":
        userCategory = "manager";
        break;
    case "subscriber":
        userCategory = "subscriber";
        break;
    default:
        userCategory = "unknown";
        break;
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication status:", authenticationStatus);
