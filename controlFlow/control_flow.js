let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

let roleInOrganization = "Enrolled Member";
let message;

switch (roleInOrganization){

    case "Employee":
        message = "You are authorized to access Dietary Services.";
        break;
    case "Enrolled Member":
        message = "You are authorized to have access to Dietary Services and 1-1 interaction";
        break;
    case "Subscriber":
        message = "You have partial access to facilitate Dietary Services only";
        break;
    case "Non-Subscriber":
        message = "Please enroll or atleast subscribe first.";
        break;
    }

console.log(message);