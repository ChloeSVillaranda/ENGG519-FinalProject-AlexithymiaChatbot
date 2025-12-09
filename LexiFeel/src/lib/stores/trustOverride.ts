import { writable } from "svelte/store";

export const debugTrustOverride = writable<string | null>(null);
