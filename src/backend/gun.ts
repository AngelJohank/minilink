import GUN from "gun";
import "gun/sea";

export const db = GUN();
export const user = db.user();

// save user in session storage
user.recall({ sessionStorage: true });
