import { loadFlash } from "sveltekit-flash-message/server";

export const load = loadFlash(async ({ locals: { getSession } }) => {
  return {
    session: await getSession(),
  };
});
