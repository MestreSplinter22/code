
export const loadDrawerScript = (): string => {
  try {
    return Deno.readTextFileSync("src/scripts/ui-behaviors/drawer.js");
  } catch (e) {
    console.error("Failed to load drawer script", e);
    return "";
  }
};
