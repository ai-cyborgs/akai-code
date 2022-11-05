console.log("content loaded");

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
import("./components/Demo");

// aktive tab i scripting  w persmissions
// wersje 3 uzywac
// chrome scripting version 3
// api reference mv3+
// onUpdate
// wykryc czy w karcie link twitter*
