let user = prompt();

switch(user)
{
    case "Employee":
        print("You can access");
        break;
    case "Enrolled Member":
        print("You can access");
        break;
    case "Subscriber":
        print("Partial access");
        break;
    default:
        print("Need to enroll");
}