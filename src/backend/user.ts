/* eslint-disable no-new */
import { createSignal } from "solid-js";
import { db, user } from "./gun";
import Notify from "simple-notify";

// interface used in login functions
interface Credentials {
  alias: string;
  password: string;
}

// username state
export const [username, setUsername] = createSignal("");

// logged in state
export const isLoggedIn = (): boolean => username().length > 0;

// login functions
export function createUser(credentials: Credentials): void {
  const { alias, password } = credentials;

  user.create(alias, password, (cb) => {
    if ("err" in cb) {
      new Notify({
        status: "error",
        title: "Error al crear el usuario",
        text: cb.err,
        effect: "fade",
        speed: 300,
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 3,
        position: "right bottom",
      });
    } else {
      logIn(credentials);
    }
  });
}

export function logIn(credentials: Credentials): void {
  const { alias, password } = credentials;

  user.auth(alias, password, (cb) => {
    if ("err" in cb) {
      new Notify({
        status: "error",
        title: "Error al iniciar sessión",
        text: cb.err,
        effect: "fade",
        speed: 300,
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 3,
        position: "right bottom",
      });
    } else {
      new Notify({
        status: "success",
        title: `Bievenido ${alias}`,
        text: "Logueado exitosamente",
        effect: "fade",
        speed: 300,
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 3,
        position: "right bottom",
      });
    }
  });
}

export function logOut(): void {
  user.leave();
  setUsername("");
  new Notify({
    status: "success",
    title: "Cerraste sesión exitosamente",
    text: "Hasta pronto",
    effect: "fade",
    speed: 300,
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 3000,
    gap: 20,
    distance: 20,
    type: 3,
    position: "right bottom",
  });
}

// on auth notification and username update
db.on("auth", () => {
  user.get("alias").once((alias: string) => {
    setUsername(alias);
    console.log(`Logged in as ${alias}`);
  });
});
