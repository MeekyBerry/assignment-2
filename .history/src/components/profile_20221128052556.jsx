import { signInWithRedirect, auth, provider, getRedirectResult, onAuthStateChanged } from "../config";
import { useEffect, useState } from "react";
import { Avatar } from "./avatar";